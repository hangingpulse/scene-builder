import React, { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import useAnimationState from "./useAnimationState";
import SceneComponent from "../../scenecomponents/SceneComponentWrapper/SceneComponent";
import AnimationPlayingWrapper from "../AnimationPlayingWrapper";
import AnimationPauseWrapper from "../AnimationPauseWrapper";

function useSceneAnimation(sceneObject) {
    console.log(sceneObject);
    // Stores our current animation state to keep it separated from the scene state
    const [animationObject, setAnimationObject] = useState(sceneObject);

    const filteredList = animationObject.sceneItems.filter(
        (animationItem) => animationItem.display
    );

    // stores the list of items that will be animated (for example for pausing and playing)
    const [currentAnimationList, setCurrentAnimationList] = useState([
        ...filteredList,
    ]);

    const [animationState, changeAnimationState] = useAnimationState();
    const { animationIndex, animationPlaying } = animationState;

    useEffect(() => {
        setAnimationObject(sceneObject);
        changeAnimationState({ type: "LOAD ANIMATION" });
    }, [sceneObject]);

    useEffect(() => {
        setCurrentAnimationList(filteredList);
    }, [animationObject]);

    // Animation for the speechbubbles, using the useAnimation hook

    const controls = useAnimation();

    // the animation has custom properties for delay and duration that are passed in
    useEffect(() => {
        if (animationPlaying) {
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
        }
    }, [animationPlaying, controls]);

    const startAnimation = () => {
        changeAnimationState({ type: "START ANIMATION" });
    };

    const pauseAnimation = () => {
        changeAnimationState({ type: "PAUSE ANIMATION" });
        setCurrentAnimationList([...filteredList.slice(animationIndex)]);
    };

    const playAnimation = () => {
        changeAnimationState({
            type: "PLAY ANIMATION",
            payload: animationIndex + 1,
        });
    };

    const endAnimation = () => {
        changeAnimationState({ type: "END ANIMATION" });
        setCurrentAnimationList(filteredList);
    };

    const changeAnimationItem = (direction) => {
        switch (direction) {
            case "NEXT":
                const nextAnimationIndex =
                    animationIndex >= filteredList.length - 1
                        ? 0
                        : animationIndex + 1;
                changeAnimationState({
                    type: "CHANGE ITEM",
                    payload: nextAnimationIndex,
                });
                setCurrentAnimationList([
                    ...filteredList.slice(nextAnimationIndex),
                ]);
                break;
            case "PREVIOUS":
                console.log(animationIndex);
                const previousAnimationIndex =
                    animationIndex === 0
                        ? filteredList.length - 1
                        : animationIndex - 1;

                changeAnimationState({
                    type: "CHANGE ITEM",
                    payload: previousAnimationIndex,
                });
                setCurrentAnimationList([
                    ...filteredList.slice(previousAnimationIndex),
                ]);
                break;
            default:
                break;
        }
    };

    const renderAnimationItems = () => {
        if (animationIndex > filteredList.length - 1) {
            endAnimation();
        }

        if (animationPlaying) {
            let totalDelay = 0;

            const sceneItemList = currentAnimationList.map(
                (sceneItem, index) => {
                    const currentCharacter = animationObject.characters.find(
                        (character) => character.id === sceneItem.character
                    );
                    const duration = sceneItem.length / 10;
                    //  dividing the delay and length by ten to not get rounding errors
                    totalDelay += sceneItem.delay / 10 + duration;

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
                            playAnimation={playAnimation}
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

    const renderCurrentItem = () => {
        if (currentAnimationList.length) {
            const currentCharacter = animationObject.characters.find(
                (character) =>
                    character.id === filteredList[animationIndex].character
            );
            return (
                <AnimationPauseWrapper
                    characterIndex={
                        currentCharacter ? currentCharacter.position + 1 : 0
                    }
                >
                    <SceneComponent
                        sceneItem={filteredList[animationIndex]}
                        character={currentCharacter}
                        animation
                    />
                </AnimationPauseWrapper>
            );
        }
    };

    return [
        startAnimation,
        pauseAnimation,
        changeAnimationItem,
        renderAnimationItems,
        renderCurrentItem,
        animationState,
        animationObject,
        filteredList,
    ];
}

export default useSceneAnimation;
