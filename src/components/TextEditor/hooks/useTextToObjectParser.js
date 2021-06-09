import { useContext } from "react";
import { SceneContext } from "../../../context/SceneContext";
import uuid from "react-uuid";

function useTextParser() {
    const { dispatch, sceneState } = useContext(SceneContext);

    const createActiontextObject = (actiontext) => {
        const actiontextLines = actiontext.split(/\n/);
        const actiontextObjects = actiontextLines.map((actiontextLine) => ({
            id: uuid(),
            type: "ACTIONTEXT",
            character: null,
            text: actiontextLine,
            length: Math.round((2 + actiontextLine.length * 0.05) * 10),
            delay: 0,
            display: true,
        }));
        return actiontextObjects;
    };

    const createCharacterObject = (charactername, position) => {
        return {
            name: charactername,
            id: uuid(),
            position,
            colorIndex: 0,
            imageIndex: 0,
        };
    };

    const createSceneItemObject = (sceneItemLines, characterId) => {
        // get the current Character ID by checking the position in the currentCharacter Array
        // This should work because that's also how the character objects are created

        const sceneItemObjects = sceneItemLines.map((sceneItemLine, index) => {
            // Check if SceneItem Line is a parenthetical
            if (/\(.*\)/.test(sceneItemLine)) {
                return {
                    id: uuid(),
                    type: "PARENTHETICAL",
                    text: sceneItemLine,
                    character: characterId,
                    length: Math.round((2 + sceneItemLine.length * 0.05) * 10),
                    delay: 0,
                    display: false,
                };
            }
            // Check if sceneItem line is sceneItem
            if (/.*/.test(sceneItemLine)) {
                return {
                    id: uuid(),
                    type: "DIALOGUE",
                    text: sceneItemLine,
                    character: characterId,
                    length: Math.round((2 + sceneItemLine.length * 0.05) * 10),
                    delay: 0,
                    display: true,
                };
            }
            return "";
        });
        return sceneItemObjects;
    };

    const findSceneObjects = (text) => {
        const sceneObjects = [];
        const characterObjects = [...sceneState.characters];
        let headerObject = "";
        const sceneArray = text.split(/\n\n/);

        sceneArray.forEach((sceneObject) => {
            // don't render empty scene objects:
            if (sceneObject.length) {
                // test if it is a header Object: only containing Capital letters
                if (/^[^a-z]+$/.test(sceneObject) && headerObject === "") {
                    headerObject = sceneObject;

                    // test if it is a sceneItem object: starts with only capital letters, then a line break, than the sceneItem.
                } else if (/^([^a-z\n]+)\n.*/.test(sceneObject)) {
                    const sceneItemObjectArray = sceneObject.split(/\n/);

                    // take the character name out of the sceneItem array
                    const characterName = sceneItemObjectArray.shift();
                    console.log(characterObjects);
                    // check if there is already a character with this name. If no, create a new character object
                    if (
                        !characterObjects
                            .map((character) => character.name)
                            .includes(characterName) &&
                        characterObjects.length < 4
                    ) {
                        const newCharacterObject = createCharacterObject(
                            characterName,
                            characterObjects.length
                        );
                        characterObjects.push(newCharacterObject);
                    }

                    const { id } = characterObjects.find(
                        (character) => character.name === characterName
                    );
                    const newSceneItemObject = createSceneItemObject(
                        sceneItemObjectArray,
                        id
                    );
                    console.log(newSceneItemObject);
                    sceneObjects.push(...newSceneItemObject);
                } else if (/.*/.test(sceneObject)) {
                    const newActiontextObject =
                        createActiontextObject(sceneObject);
                    sceneObjects.push(...newActiontextObject);
                } else {
                    return;
                }
            }
        });

        return [characterObjects, sceneObjects, headerObject];
    };

    // This sends all the characters, the sceneItem objects and the header info to the global scene object
    const saveScene = (text) => {
        const [characterObjects, sceneObjects, headerObject] =
            findSceneObjects(text);
        dispatch({
            type: "EDIT SCENE",
            payload: {
                header: headerObject,
                characters: characterObjects,
                sceneItems: sceneObjects,
                rawtext: text,
            },
        });
    };

    return saveScene;
}

export default useTextParser;

/*
PURPOSE: Parses the text string into a scene object (and vice versa?)

Structure:
1. Search for all sceneItem objects with Regex.
2. get all character names.
3. if name doesn't exist, create character with random color and random image, save character in scene object
4. Create Speechbubble Objects for every sceneItem objects (one or more speechbubbles), linked to the characterid
4a if new line between sceneItem lines, add a new speechbubble for the same character.
4b. calculate length for every speechbubble object (3s base + length dependent)
5.Add sceneItem objects into the scene object.




*/
