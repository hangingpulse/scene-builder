import React, { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import useAnimationState from "./useAnimationState";
import SceneComponent from "../components/scenecomponents/SceneComponentWrapper/SceneComponent";
import AnimationPlayingWrapper from "../components/scenecomponents/SceneComponentWrapper/AnimationPlayingWrapper";
import AnimationPauseWrapper from "../components/scenecomponents/SceneComponentWrapper/AnimationPauseWrapper";

function useSceneAnimation(sceneObject) {
    // Stores our current animation state to keep it separated from the scene state
    const [animationObject, setAnimationObject] = useState(sceneObject);
    // stores the list of items that will be animated (for example for pausing and playing)
    const [currentAnimationList, setCurrentAnimationList] = useState([
        ...animationObject.sceneItems,
    ]);

    const [animationState, changeAnimationState] = useAnimationState();
    const { animationIndex, animationPlaying } = animationState;
    useEffect(() => {
        setAnimationObject(sceneObject);
    }, [sceneObject]);

    useEffect(() => {
        setCurrentAnimationList(animationObject.sceneItems);
    }, [animationObject]);

    useEffect(() => {
        console.log(animationState);
    }, [animationState]);

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
        setCurrentAnimationList(animationObject.sceneItems);
        changeAnimationState({ type: "START ANIMATION" });
    };

    const pauseAnimation = () => {
        changeAnimationState({ type: "PAUSE ANIMATION" });
        setCurrentAnimationList([
            ...animationObject.sceneItems.slice(animationIndex),
        ]);
    };

    const playAnimation = () => {
        changeAnimationState({
            type: "PLAY ANIMATION",
            payload: animationIndex + 1,
        });
    };

    const changeAnimationItem = (direction) => {
        switch (direction) {
            case "NEXT":
                const nextAnimationIndex =
                    animationIndex >= animationObject.sceneItems.length - 1
                        ? 0
                        : animationIndex + 1;
                changeAnimationState({
                    type: "CHANGE ITEM",
                    payload: nextAnimationIndex,
                });
                setCurrentAnimationList([
                    ...animationObject.sceneItems.slice(nextAnimationIndex),
                ]);
                break;
            case "PREVIOUS":
                const previousAnimationIndex =
                    animationIndex === 0
                        ? animationObject.sceneItems.length - 1
                        : animationIndex - 1;

                changeAnimationState({
                    type: "CHANGE ITEM",
                    payload: previousAnimationIndex,
                });
                setCurrentAnimationList([
                    ...animationObject.sceneItems.slice(previousAnimationIndex),
                ]);
                break;
            default:
                break;
        }
    };

    const renderAnimationItems = () => {
        if (animationIndex > animationObject.sceneItems.length - 1) {
            changeAnimationState({ type: "END ANIMATION" });
        }

        if (animationPlaying) {
            let totalDelay = 0;

            const sceneItemList = currentAnimationList.map(
                (sceneItem, index) => {
                    const currentCharacter = sceneObject.characters.find(
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
        if (animationObject.sceneItems.length) {
            const currentCharacter = animationObject.characters.find(
                (character) =>
                    character.id ===
                    animationObject.sceneItems[animationIndex].character
            );
            return (
                <AnimationPauseWrapper
                    characterIndex={
                        currentCharacter ? currentCharacter.position + 1 : 0
                    }
                >
                    <SceneComponent
                        sceneItem={animationObject.sceneItems[animationIndex]}
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
    ];
}

export default useSceneAnimation;
