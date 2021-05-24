import React, { useContext, useState } from "react";
import { SceneContext } from "../../context/SceneContextProvider";
import { CharacterContainer } from "../CharacterComponents/Character.style";
import CharacterEditorItem from "./CharacterEditorItem";

function CharacterEditor() {
    const { sceneState } = useContext(SceneContext);

    return (
        <CharacterContainer>
            {sceneState.characters.map((character, index) => (
                <CharacterEditorItem key={index} character={character} />
            ))}
        </CharacterContainer>
    );
}

export default CharacterEditor;

/*
PURPOSE: This Component renders the different Characters for the Scene Editor. 

*/
