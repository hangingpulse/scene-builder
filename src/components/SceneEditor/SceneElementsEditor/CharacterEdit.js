import React from "react";
import {
    CharacterEditContainer,
    StyledCharacterEdit,
} from "./SceneElementsEditor.style";
import { CharacterImage } from "../../scenecomponents/Character/Character.style";
import ColorSelection from "../../modularcomponents/ColorSelection";
import { TextArea } from "../../modularcomponents/Inputs";
import { DeleteButton } from "../../modularcomponents/Buttons";
import { characterColors, characterImages } from "../../../data/characterdata";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function CharacterEdit({ currentCharacter, setCharacters, characters }) {
    const characterIndex = characters.findIndex(
        (character) => character.id === currentCharacter.id
    );

    const deleteCharacter = () => {
        const newCharacterArray = characters.filter(
            (character) => character.id !== currentCharacter.id
        );
        setCharacters([...newCharacterArray]);
    };

    const changeCharacter = (type, value) => {
        switch (type) {
            case "NAME":
                const charactersWithNewName = [...characters];
                charactersWithNewName[characterIndex].name = value;
                setCharacters([...charactersWithNewName]);
                break;
            case "PREVIOUS IMAGE":
                const indexBefore =
                    currentCharacter.imageIndex === 0
                        ? characterImages.length - 1
                        : currentCharacter.imageIndex - 1;
                const charactersWithPreviousImage = [...characters];
                charactersWithPreviousImage[characterIndex].imageIndex =
                    indexBefore;
                setCharacters([...charactersWithPreviousImage]);
                break;
            case "NEXT IMAGE":
                const indexAfter =
                    currentCharacter.imageIndex === characterImages.length - 1
                        ? 0
                        : currentCharacter.imageIndex + 1;
                const charactersWithNextImage = [...characters];
                charactersWithNextImage[characterIndex].imageIndex = indexAfter;
                setCharacters([...charactersWithNextImage]);
                break;
            case "COLOR":
                const charactersWithNewColor = [...characters];
                charactersWithNewColor[characterIndex].colorIndex = value;
                setCharacters([...charactersWithNewColor]);
                break;
            case "POSITION":
                const charactersWithNewPosition = [...characters];
                charactersWithNewPosition[characterIndex].position = value;
                setCharacters([...charactersWithNewPosition]);
                break;
            default:
                return;
        }

        setCharacters([...characters]);
    };

    return (
        <CharacterEditContainer position={currentCharacter.position}>
            <StyledCharacterEdit
                character={currentCharacter}
                color={characterColors[currentCharacter.colorIndex]}
            >
                <ColorSelection
                    selectedColor={currentCharacter.colorIndex}
                    changeCharacter={changeCharacter}
                />
                <div className="ImageSelection">
                    <FaAngleLeft
                        size="2em"
                        onClick={() => changeCharacter("PREVIOUS IMAGE")}
                    />
                    <CharacterImage
                        src={characterImages[currentCharacter.imageIndex]}
                        alt={currentCharacter.name}
                    />
                    <FaAngleRight
                        size="2em"
                        onClick={() => changeCharacter("NEXT IMAGE")}
                    />
                </div>
                <div className="NameAndDelete">
                    <TextArea
                        small
                        maxChar={15}
                        value={currentCharacter.name}
                        height="2.5rem"
                        onChange={(e) =>
                            changeCharacter(
                                "NAME",
                                e.target.value.toUpperCase()
                            )
                        }
                    />
                    <DeleteButton onClick={deleteCharacter} />
                </div>
            </StyledCharacterEdit>
        </CharacterEditContainer>
    );
}

export default CharacterEdit;
