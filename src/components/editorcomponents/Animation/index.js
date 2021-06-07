import React, { useContext } from "react";
import { SceneContext } from "../../../context/SceneContextProvider";
import { AnimationContext } from "../../../context/AnimationContext";
import Character from "../../scenecomponents/Character";
import {
    AnimationContainer,
    CharacterContainerAnimation,
    SceneContentAnimation,
    AnimationHeader,
} from "./Animation.style";
import SceneComponent from "../../scenecomponents/SceneComponentWrapper/SceneComponent";
import AnimationPauseWrapper from "../../scenecomponents/SceneComponentWrapper/AnimationPauseWrapper";

function Animation() {
    const { animationItems, animationPlaying, animationIndex, animationState } =
        useContext(AnimationContext);
    // This returns the SceneItem that is currently animated if you pause the animation
    const renderCurrentItem = () => {
        if (animationState.dialogue.length) {
            const currentCharacter = animationState.characters.find(
                (character) =>
                    character.id ===
                    animationState.dialogue[animationIndex].character
            );
            return (
                <AnimationPauseWrapper
                    characterIndex={
                        currentCharacter ? currentCharacter.position + 1 : 0
                    }
                >
                    <SceneComponent
                        sceneItem={animationState.dialogue[animationIndex]}
                        character={currentCharacter}
                        animation
                    />
                </AnimationPauseWrapper>
            );
        }
    };

    return (
        <AnimationContainer className="AnimationContainer">
            <AnimationHeader>{animationState.header}</AnimationHeader>
            {animationState.characters.map((character, index) => (
                <CharacterContainerAnimation
                    key={index}
                    position={`char${character.position}`}
                >
                    <Character character={character} />
                </CharacterContainerAnimation>
            ))}
            <SceneContentAnimation>
                {animationPlaying ? animationItems() : renderCurrentItem()}
            </SceneContentAnimation>
        </AnimationContainer>
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
