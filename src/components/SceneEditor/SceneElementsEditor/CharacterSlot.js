import React, { useContext } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import { characterColors, characterImages } from "../../../data/characterdata";
import { AddButton } from "../../modularcomponents/Buttons";
import {
    SceneEditorContext,
    SceneEditorContextProvider,
} from "../../../context/SceneEditorContext";

const CharacterSlotContainer = styled.div`
    width: 100%;
    height: 100%;
    grid-area: ${({ position }) => `char${position}`};
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid black;
    border-radius: 1.5rem;
`;

const EmptySlot = styled.div`
    width: 100%;
    height: 21rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: ${({ theme }) => theme.fonts.fontSizes.block};
`;

function CharacterSlot({ children, setCharacters, characters, position }) {
    const addCharacter = () => {
        console.log(characters);
        if (characters.length < 4) {
            setCharacters([
                ...characters,
                {
                    id: uuid(),
                    name: "NAME",
                    position: position,
                    colorIndex: Math.floor(
                        Math.random() * characterColors.length
                    ),
                    imageIndex: Math.floor(
                        Math.random() * characterImages.length
                    ),
                },
            ]);
        }
    };

    return (
        <CharacterSlotContainer position={position}>
            {children ? (
                children
            ) : (
                <EmptySlot>
                    <AddButton size="5rem" onClick={addCharacter} />
                    <div className="AddCharacterLabel">Add New Character</div>
                </EmptySlot>
            )}
        </CharacterSlotContainer>
    );
}

export default CharacterSlot;
