import { useContext } from "react";
import { SceneContext } from "../context/SceneContextProvider";

function useTextParser() {
    const { sceneState, dispatch } = useContext(SceneContext);

    // if there are already characters in our Global Scene Object, put their names in this array.
    const currentCharacters = sceneState.characters.length
        ? sceneState.characters.map((character) => character.name.toUpperCase())
        : [];

    const createActiontextObject = (actiontext) => {
        const actiontextLines = actiontext.split(/\n/);
        const actiontextObjects = actiontextLines.map((actiontextLine) => ({
            type: "ACTIONTEXT",
            text: actiontextLine,
            duration: 2 + actiontextLine.length * 0.05,
            delay: 0,
            display: true,
        }));
        return actiontextObjects;
    };

    const createCharacterObject = (charactername) => {
        const characterId = currentCharacters.length + 1;
        return {
            name: charactername,
            id: characterId,
            position: characterId - 1,
            colorIndex: characterId,
            imageIndex: characterId,
        };
    };

    const createDialogueObject = (dialogue) => {
        const dialogueLines = dialogue.split(/\n/);

        // take the character name out of the dialogue array
        const characterName = dialogueLines.shift();

        // get the current Character ID by checking the position in the currentCharacter Array
        // This should work because that's also how the character objects are created
        const characterId = currentCharacters.indexOf(characterName) + 1;
        const dialogueObjects = dialogueLines.map((dialogueLine, index) => {
            // Check if Dialogue Line is a parenthetical
            if (/\(.*\)/.test(dialogueLine)) {
                return {
                    type: "PARENTHETICAL",
                    text: dialogueLine,
                    character: characterId,
                    duration: 2 + dialogueLine.length * 0.05,
                    delay: 0,
                    display: false,
                };
            }
            // Check if dialogue line is dialogue
            if (/.*/.test(dialogueLine)) {
                return {
                    type: "DIALOGUE",
                    text: dialogueLine,
                    character: characterId,
                    duration: 2 + dialogueLine.length * 0.05,
                    delay: 0,
                    display: true,
                };
            }
            return "";
        });
        return dialogueObjects;
    };

    const findSceneObjects = (text) => {
        const sceneObjects = [];
        const characterObjects = [];
        let headerObject = "";
        const sceneArray = text.split(/\n\n/);

        sceneArray.forEach((sceneObject) => {
            if (/^[^a-z]+$/.test(sceneObject)) {
                headerObject = sceneObject;
            } else if (/([^a-z\n]+)\n.*/.test(sceneObject)) {
                const dialogueObjectArray = sceneObject.split(/\n/);
                if (!currentCharacters.includes(dialogueObjectArray[0])) {
                    const newCharacterObject = createCharacterObject(
                        dialogueObjectArray[0]
                    );
                    characterObjects.push(newCharacterObject);
                    currentCharacters.push(newCharacterObject.name);
                }
                const newDialogueObject = createDialogueObject(sceneObject);
                sceneObjects.push(...newDialogueObject);
            } else if (/.*/.test(sceneObject)) {
                const newActiontextObject = createActiontextObject(sceneObject);
                sceneObjects.push(...newActiontextObject);
            } else {
                return;
            }
        });

        console.log(characterObjects, sceneObjects);
        return [characterObjects, sceneObjects, headerObject];
    };

    // This sends all the characters, the dialogue objects and the header info to the global scene object
    const saveScene = (text) => {
        const [characterObjects, sceneObjects, headerObject] =
            findSceneObjects(text);
        dispatch({
            type: "EDIT SCENE",
            payload: {
                header: headerObject,
                characters: characterObjects,
                dialogue: sceneObjects,
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
