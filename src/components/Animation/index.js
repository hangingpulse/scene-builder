import React from "react";
import useSceneAnimation from "./hooks/useSceneAnimation";
import Character from "../scenecomponents/Character";
import AnimationControls from "./AnimationControls";
import {
    AnimationContainer,
    CharacterContainerAnimation,
    SceneContentAnimation,
    AnimationHeader,
    AnimationAndControls,
} from "./Animation.style";

function Animation({ sceneObject }) {
    // This returns the SceneItem that is currently animated if you pause the animation
    const [
        startAnimation,
        pauseAnimation,
        changeAnimationItem,
        renderAnimationItems,
        renderCurrentItem,
        animationState,
        animationObject,
    ] = useSceneAnimation(sceneObject);

    const { animationPlaying } = animationState;
    return (
        <AnimationAndControls>
            <AnimationContainer className="AnimationContainer">
                <AnimationHeader>{animationObject.header}</AnimationHeader>
                {animationObject.characters.map((character, index) => (
                    <CharacterContainerAnimation
                        key={index}
                        position={`char${character.position}`}
                    >
                        <Character character={character} />
                    </CharacterContainerAnimation>
                ))}
                <SceneContentAnimation>
                    {animationPlaying
                        ? renderAnimationItems()
                        : renderCurrentItem()}
                </SceneContentAnimation>
            </AnimationContainer>
            <AnimationControls
                animationState={animationState}
                startAnimation={startAnimation}
                pauseAnimation={pauseAnimation}
                changeAnimationItem={changeAnimationItem}
            />
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
