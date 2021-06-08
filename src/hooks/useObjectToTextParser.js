function changeObjectToTextParser(sceneState) {
    const header = sceneState.header;
    const characters = sceneState.characters;
    const textArray = [header];
    let currentCharacter = "";
    let currentSceneItem = [];

    console.log(sceneState);
    sceneState.sceneItems.forEach((sceneItem, index) => {
        if (sceneItem.type === "ACTIONTEXT") {
            if (currentSceneItem.length) {
                textArray.push(currentSceneItem.join("\n"));
                currentSceneItem = [];
            }
            textArray.push(sceneItem.text);
            currentCharacter = "";
        }
        if (
            sceneItem.type === "DIALOGUE" ||
            sceneItem.type === "PARENTHETICAL"
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
