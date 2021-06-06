import React from "react";
import styled from "styled-components";
import { AddButton } from "../../modularcomponents/Buttons";

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

function CharacterSlot({ children, character, position }) {
    return (
        <CharacterSlotContainer position={position}>
            {children ? (
                children
            ) : (
                <EmptySlot>
                    <AddButton size="5rem" />
                    <div className="AddCharacterLabel">Add New Character</div>
                </EmptySlot>
            )}
        </CharacterSlotContainer>
    );
}

export default CharacterSlot;
