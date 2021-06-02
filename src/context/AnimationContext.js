import React, { createContext, useContext, useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import { SceneContext } from "./SceneContextProvider";
import AnimatedComponent from "../components/scenecomponents/AnimatedComponent/AnimatedComponent";
import SceneComponent from "../components/scenecomponents/SceneComponent";

const AnimationContext = createContext();

function AnimationContextProvider({ children }) {
    const { sceneState } = useContext(SceneContext);
    const [animationPlaying, setAnimationPlaying] = useState(false);

    // stores the index of the Item that is currently animated
    const [animationIndex, setAnimationIndex] = useState(0);

    // stores the list of items that will be animated (for example for pausing and playing)
    const [currentAnimationList, setCurrentAnimationList] = useState([
        ...sceneState.dialogue,
    ]);

    // Animation for the speechbubbles, using the useAnimation hook

    const controls = useAnimation();

    // the animation has custom properties for delay and duration that are passed in
    useEffect(() => {
        console.log(animationPlaying);
        if (animationPlaying) {
            startAnimation();
        }
    }, [animationPlaying]);

    const startAnimation = () => {
        console.log(currentAnimationList);
        controls.start(({ delay, duration }) => ({
            opacity: [0, 1, 1, 0],
            visibility: "visible",
            transition: {
                delay: delay,
                duration: duration,
                times: [0, 0.1, 0.9, 1],
            },
            transitionEnd: { visibility: "hidden" },
        }));
    };

    const pauseAnimation = () => {
        setAnimationPlaying(false);
        setCurrentAnimationList([...sceneState.dialogue.slice(animationIndex)]);
    };

    const animationItems = () => {
        if (animationPlaying) {
            let totalDelay = 0;

            const dialogueList = currentAnimationList.map((dialogue, index) => {
                const currentCharacter = sceneState.characters.find(
                    (character) => character.id === dialogue.character
                );
                const duration = dialogue.length;
                totalDelay += dialogue.delay + duration;

                return (
                    <AnimatedComponent
                        key={index}
                        index={index}
                        characterIndex={
                            currentCharacter ? currentCharacter.id : 0
                        }
                        controls={controls}
                        totalDelay={totalDelay - duration}
                        duration={duration}
                        setAnimationIndex={setAnimationIndex}
                    >
                        <SceneComponent
                            key={index}
                            sceneItem={dialogue}
                            character={currentCharacter}
                            animation
                        />
                    </AnimatedComponent>
                );
            });
            return dialogueList;
        }
    };
    return (
        <AnimationContext.Provider
            value={{
                startAnimation,
                pauseAnimation,
                animationItems,
                animationPlaying,
                setAnimationPlaying,
                animationIndex,
                setAnimationIndex,
                setCurrentAnimationList,
            }}
        >
            {children}
        </AnimationContext.Provider>
    );
}

export { AnimationContextProvider, AnimationContext };
