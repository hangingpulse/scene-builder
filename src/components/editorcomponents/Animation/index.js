import React, { useContext, useEffect } from "react";
import { SceneContext } from "../../../context/SceneContextProvider";
import { AnimationContext } from "../../../context/AnimationContext";
import Character from "../../scenecomponents/Character";
import {
    AnimationContainer,
    CharacterContainerAnimation,
} from "./Animation.style";
import SceneComponent from "../../scenecomponents/SceneComponent";

function Animation() {
    const { sceneState } = useContext(SceneContext);

    const { animationItems, animationPlaying, animationItemIndex } =
        useContext(AnimationContext);

    const renderCurrentItem = () => {
        const currentCharacter = sceneState.characters.find(
            (character) =>
                character.id ===
                sceneState.dialogue[animationItemIndex].character
        );
        return (
            <SceneComponent
                sceneItem={sceneState.dialogue[animationItemIndex]}
                character={currentCharacter}
            />
        );
    };

    return (
        <AnimationContainer className="AnimationContainer">
            {sceneState.characters.map((character, index) => (
                <CharacterContainerAnimation
                    key={index}
                    index={`char${character.id}`}
                >
                    <Character character={character} />
                </CharacterContainerAnimation>
            ))}
            {animationPlaying ? animationItems() : renderCurrentItem()}
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
