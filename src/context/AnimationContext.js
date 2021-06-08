import React, { createContext, useContext, useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import { SceneContext } from "./SceneContextProvider";
import SceneComponent from "../components/scenecomponents/SceneComponentWrapper/SceneComponent";
import AnimationPlayingWrapper from "../components/scenecomponents/SceneComponentWrapper/AnimationPlayingWrapper";

const AnimationContext = createContext();

function AnimationContextProvider({ children }) {
    const { sceneState } = useContext(SceneContext);

    // Stores our current animation state to keep it separated from the scene state
    const [animationState, setAnimationState] = useState({ ...sceneState });

    // stores the list of items that will be animated (for example for pausing and playing)
    const [currentAnimationList, setCurrentAnimationList] = useState([
        ...animationState.sceneItems,
    ]);

    // stores the index of the Item that is currently animated
    const [animationIndex, setAnimationIndex] = useState(0);

    const [animationPlaying, setAnimationPlaying] = useState(false);

    useEffect(() => {
        setAnimationState({ ...sceneState });
    }, [sceneState]);

    useEffect(() => {
        setCurrentAnimationList(animationState.sceneItems);
    }, [animationState]);

    // Animation for the speechbubbles, using the useAnimation hook

    const controls = useAnimation();

    // the animation has custom properties for delay and duration that are passed in
    useEffect(() => {
        if (animationPlaying) {
            startAnimation();
        }
    }, [animationPlaying]);

    const startAnimation = () => {
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
        setCurrentAnimationList([
            ...animationState.sceneItems.slice(animationIndex),
        ]);
    };

    const animationItems = () => {
        if (animationIndex > animationState.sceneItems.length - 1) {
            setAnimationPlaying(false);
            setAnimationIndex(0);
        }

        if (animationPlaying) {
            let totalDelay = 0;

            const sceneItemList = currentAnimationList.map(
                (sceneItem, index) => {
                    const currentCharacter = sceneState.characters.find(
                        (character) => character.id === sceneItem.character
                    );
                    const duration = sceneItem.length;
                    totalDelay += sceneItem.delay + duration;

                    return (
                        <AnimationPlayingWrapper
                            key={index}
                            index={index}
                            characterIndex={
                                currentCharacter
                                    ? currentCharacter.position + 1
                                    : 0
                            }
                            controls={controls}
                            totalDelay={totalDelay - duration}
                            duration={duration}
                            setAnimationIndex={setAnimationIndex}
                        >
                            <SceneComponent
                                key={index}
                                sceneItem={sceneItem}
                                character={currentCharacter}
                                animation
                            />
                        </AnimationPlayingWrapper>
                    );
                }
            );
            return sceneItemList;
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
                animationState,
            }}
        >
            {children}
        </AnimationContext.Provider>
    );
}

export { AnimationContextProvider, AnimationContext };
