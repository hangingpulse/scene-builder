import React from "react";
import useSceneAnimation from "./hooks/useSceneAnimation";
import Character from "../scenecomponents/Character";
import AnimationControls from "./AnimationControls";
import Button from "../modularcomponents/Buttons";
import AnimationPauseWrapper from "./AnimationPauseWrapper";
import {
    AnimationContainer,
    CharacterContainerAnimation,
    SceneContentAnimation,
    AnimationHeader,
    AnimationAndControls,
    AnimationContentContainer,
} from "./Animation.style";
import { AnimatePresence } from "framer-motion";

function Animation({ sceneObject, animationstate }) {
    // This returns the SceneItem that is currently animated if you pause the animation
    const [
        startAnimation,
        pauseAnimation,
        changeAnimationItem,
        renderAnimationItems,
        renderCurrentItem,
        animationState,
        animationObject,
    ] = useSceneAnimation(sceneObject, animationstate);

    const { animationPlaying, animationStart, animationEnd } = animationState;

    const getSceneContent = () => {
        if (animationPlaying) {
            return renderAnimationItems();
        }
        if (animationStart) {
            return (
                <AnimationPauseWrapper characterIndex={0}>
                    <Button onClick={startAnimation} highlighted>
                        Start the Animation
                    </Button>
                </AnimationPauseWrapper>
            );
        }
        if (animationEnd) {
            return (
                <AnimationPauseWrapper characterIndex={0}>
                    <Button onClick={startAnimation} highlighted>
                        Play Again
                    </Button>
                </AnimationPauseWrapper>
            );
        }
        if (!animationPlaying) {
            return renderCurrentItem();
        }
    };

    return (
        <AnimationAndControls>
            <AnimationContainer className="AnimationContainer">
                <AnimationHeader>
                    {animationObject.general.header}
                </AnimationHeader>
                <AnimationContentContainer>
                    {animationObject.characters.map((character, index) => (
                        <CharacterContainerAnimation
                            key={index}
                            position={`char${character.position}`}
                        >
                            <Character character={character} />
                        </CharacterContainerAnimation>
                    ))}
                    <SceneContentAnimation>
                        {getSceneContent()}
                    </SceneContentAnimation>
                </AnimationContentContainer>
                <AnimatePresence>
                    <AnimationControls
                        intital={false}
                        animate={animationPlaying && { opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        exit={{ opacity: 0 }}
                        animationState={animationState}
                        startAnimation={startAnimation}
                        pauseAnimation={pauseAnimation}
                        changeAnimationItem={changeAnimationItem}
                    />
                </AnimatePresence>
            </AnimationContainer>
        </AnimationAndControls>
    );
}

export default Animation;

/*
PURPOSE:
The User can watch the Animation here

NEXT STEPS:
- Migrate the animation from the 9rooms project here.

COMPONENTS:
- CHaracters (toggle on/off)
-Speechbubbles (with Animation)

NICE TO HAVE:
Pause/Play Button

*/
