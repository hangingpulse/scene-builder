import { useContext } from "react";
import { SceneContext } from "../context/SceneContextProvider";

function changeObjectToTextParser(sceneState) {
    const header = sceneState.header;
    const characters = sceneState.characters;
    const textArray = [header];
    console.log(sceneState);
    let currentCharacter = "";
    let currentDialogue = [];

    sceneState.dialogue.forEach((dialogue, index) => {
        if (dialogue.type === "ACTIONTEXT") {
            if (currentDialogue.length) {
                textArray.push(currentDialogue.join("\n"));
                currentDialogue = [];
            }
            textArray.push(dialogue.text);
            currentCharacter = "";
        }
        if (dialogue.type === "DIALOGUE" || dialogue.type === "PARENTHETICAL") {
            const dialogueCharacter = characters.find(
                (character) => character.id === dialogue.character
            );
            if (currentCharacter === dialogueCharacter.name) {
                currentDialogue.push(dialogue.text);
            } else if (currentCharacter !== dialogueCharacter.name) {
                if (currentDialogue.length) {
                    textArray.push(currentDialogue.join("\n"));
                    currentDialogue = [];
                }
                currentDialogue.push(dialogueCharacter.name);
                currentDialogue.push(dialogue.text);
                currentCharacter = dialogueCharacter.name;
            }
        }
    });
    console.log(textArray);

    const sceneString = textArray.join("\n\n");
    return sceneString;
}

export default changeObjectToTextParser;