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
    const { sceneState } = useContext(SceneContext);

    const { animationItems, animationPlaying, animationIndex } =
        useContext(AnimationContext);

    console.log(animationIndex);

    // This returns the SceneItem that is currently animated if you pause the animation
    const renderCurrentItem = () => {
        const currentCharacter = sceneState.characters.find(
            (character) =>
                character.id === sceneState.dialogue[animationIndex].character
        );
        return (
            <AnimationPauseWrapper
                characterIndex={currentCharacter ? currentCharacter.id : 0}
            >
                <SceneComponent
                    sceneItem={sceneState.dialogue[animationIndex]}
                    character={currentCharacter}
                    animation
                />
            </AnimationPauseWrapper>
        );
    };

    return (
        <AnimationContainer className="AnimationContainer">
            <AnimationHeader>{sceneState.header}</AnimationHeader>
            {sceneState.characters.map((character, index) => (
                <CharacterContainerAnimation
                    key={index}
                    index={`char${character.id}`}
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
