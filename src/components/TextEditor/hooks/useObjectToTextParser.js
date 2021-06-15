function changeObjectToTextParser(sceneState) {
    const header = sceneState.general.header;
    const characters = sceneState.characters;
    const textArray = [header];
    let currentCharacter = "";
    let currentSceneItem = [];

    sceneState.sceneItems.forEach((sceneItem, index) => {
        if (sceneItem.itemType === "ACTIONTEXT") {
            if (currentSceneItem.length) {
                textArray.push(currentSceneItem.join("\n"));
                currentSceneItem = [];
            }
            textArray.push(sceneItem.text);
            currentCharacter = "";
        }
        if (
            sceneItem.itemType === "DIALOGUE" ||
            sceneItem.itemType === "PARENTHETICAL"
        ) {
            const sceneItemCharacter = characters.find(
                (character) => character.id === sceneItem.character
            );
            if (currentCharacter === sceneItemCharacter.name) {
                currentSceneItem.push(sceneItem.text);
            } else if (currentCharacter !== sceneItemCharacter.name) {
                if (currentSceneItem.length) {
                    textArray.push(currentSceneItem.join("\n"));
                    currentSceneItem = [];
                }
                currentSceneItem.push(sceneItemCharacter.name.toUpperCase());
                currentSceneItem.push(sceneItem.text);
                currentCharacter = sceneItemCharacter.name;
            }
        }
    });
    textArray.push(currentSceneItem.join("\n"));
    const sceneString = textArray.join("\n\n");
    return sceneString;
}

export default changeObjectToTextParser;
