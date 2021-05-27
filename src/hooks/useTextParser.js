import { useContext } from "react";
import { SceneContext } from "../context/SceneContextProvider";

const sceneRegex =
    /\n(?<name>[^a-z\n]+)\n(?<dialogue>(?:(?:\([^\n]+\)\n)?[^\n]+\n)+)/g; //Dialogue Object that finds the names

const dialogueRegex = /([^\n]+)\n/g; // Dialogue parts in the dialogue object.

const parentheticalRegex = /\([^\n]+\)\n/;

function useTextParser() {
    const { dispatch } = useContext(SceneContext);

    // This function gets all the characters
    // This function extracts all the speaking characters in the scene
    function findSceneObjects(text) {
        // This array contains all dialogue objects found with the Regular Expressions
        const sceneObjectsArray = [...text.matchAll(sceneRegex)];

        const findCharacterObjects = () => {
            const characterArray = [];
            sceneObjectsArray.forEach((sceneObject) => {
                if (!characterArray.includes(sceneObject.groups.name)) {
                    characterArray.push(sceneObject.groups.name);
                }
            });

            // This function creates new character objects for our scene object
            // TO DO: Build in a check if the character already exists in the sceneState
            const sceneObjectCharacters = characterArray.map(
                (character, index) => {
                    return {
                        name: character,
                        id: index + 1,
                        position: index,
                        imageIndex: index + 1,
                        colorIndex: index + 1,
                    };
                }
            );
            return sceneObjectCharacters;
        };
        // perform a Regex search for each DialogueObject to get the speechbubbles

        const findDialogueObjects = (characters) => {
            const dialogueArray = [];
            sceneObjectsArray.forEach((sceneObject) => {
                // creates an Array with all the Dialogue Lines in one Dialogue Object
                const dialogueCharacter = characters.find(
                    (character) => sceneObject.groups.name === character.name
                );

                const dialogueLines = [
                    ...sceneObject.groups.dialogue.matchAll(dialogueRegex),
                ];

                // filters only the spoken lines and not the parentheticals
                const rawDialogueText = dialogueLines.filter(
                    (dialogueLine) => !parentheticalRegex.test(dialogueLine)
                );

                // creates a SpeechBubbleObject for every new line of dialogue
                const speechbubbleObjects = rawDialogueText.map((dialogue) => {
                    return {
                        character: dialogueCharacter.id,
                        text: dialogue[1],
                        length: 2 + dialogue[1].length * 0.05,
                        delay: 0,
                    };
                });

                dialogueArray.push(...speechbubbleObjects);
            });
            return dialogueArray;
        };

        const characterObjects = findCharacterObjects();
        const dialogueObjects = findDialogueObjects(characterObjects);

        console.log(dialogueObjects);
        return [characterObjects, dialogueObjects];
    }

    const saveScene = (text) => {
        const [characterObjects, dialogueObjects] = findSceneObjects(text);
        dispatch({
            type: "EDIT SCENE",
            payload: {
                characters: characterObjects,
                dialogue: dialogueObjects,
            },
        });
    };

    return saveScene;
}

export default useTextParser;

/*
PURPOSE: Parses the text string into a scene object (and vice versa?)

Structure:
1. Search for all dialogue objects with Regex.
2. get all character names.
3. if name doesn't exist, create character with random color and random image, save character in scene object
4. Create Speechbubble Objects for every dialogue objects (one or more speechbubbles), linked to the characterid
4a if new line between dialogue lines, add a new speechbubble for the same character.
4b. calculate length for every speechbubble object (3s base + length dependent)
5.Add dialogue objects into the scene object.




*/
