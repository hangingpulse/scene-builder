import React, { useContext } from "react";
import { SceneContext } from "../../../context/SceneContextProvider";
import useSpeechbubbleAnimation from "../../../hooks/useSpeechbubbleAnimation";
import Character from "../../scenecomponents/CharacterComponents/Character";
import StyledSpeechbubble from "../../scenecomponents/SpeechbubbleComponents/Speechbubble.style.js";
import Actiontext from "../../scenecomponents/ActiontextComponents/Actiontext";
import {
    AnimationContainer,
    CharacterContainerAnimation,
    DialogueContainer,
} from "./Animation.style";

function Animation() {
    const { sceneState } = useContext(SceneContext);

    const buildSpeechbubbles = useSpeechbubbleAnimation();

    console.log(buildSpeechbubbles);

    const editSpeechbubbles = [];
    const editDialogue = () => {
        sceneState.characters.forEach((character) => {
            const firstBubble = sceneState.dialogue.find(
                (dialogueLine) => character.id === dialogueLine.character
            );
            editSpeechbubbles.push(firstBubble);
            console.log(firstBubble);
        });
        editSpeechbubbles.push(
            sceneState.dialogue.find(
                (dialogue) => dialogue.type === "ACTIONTEXT"
            )
        );
    };
    editDialogue();

    const getCharacter = (characterId) => {
        return sceneState.characters.find(
            (character) => character.id === characterId
        );
    };

    return (
        <AnimationContainer>
            {sceneState.characters.map((character, index) => (
                <CharacterContainerAnimation
                    key={index}
                    index={`char${character.id}`}
                >
                    <Character character={character} />
                </CharacterContainerAnimation>
            ))}
            {buildSpeechbubbles(sceneState)}
        </AnimationContainer>
    );
}

export default Animation;

/* editSpeechbubbles.map((bubble, index) => (
                <DialogueContainer
                    key={index}
                    index={`text${bubble.character ? bubble.character : 0}`}
                >
                    {bubble.type === "ACTIONTEXT" ? (
                        <Actiontext actiontext={bubble} animation />
                    ) : (
                        <StyledSpeechbubble
                            character={getCharacter(bubble.character)}
                        >
                            {bubble.text}
                        </StyledSpeechbubble>
                    )}
                </DialogueContainer>
            )) */

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
