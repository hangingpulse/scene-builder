import React, { useState, useEffect, useContext } from "react";
import { SceneContext } from "../../context/SceneContext";
import styled from "styled-components";
import useTextToObjectParser from "./hooks/useTextToObjectParser";
import changeObjectToTextParser from "./hooks/useObjectToTextParser";
import useOpenAI from "./hooks/useOpenAI";
import Modal from "../modularcomponents/Modal";
import InfoBox, {
    InfoBoxHeader,
    InfoBoxText,
} from "../modularcomponents/InfoBox";
import Button, { HelpButton } from "../modularcomponents/Buttons";

const StyledTextArea = styled.textarea`
    width: 100%;
    height: 75vh;
    padding: 1rem;
    font-size: ${({ theme }) => theme.fonts.fontSizes.base};
    font-family: ${(props) => props.theme.fonts.sansSerif};
    box-shadow: ${({ theme }) => theme.boxShadows.editorInset};
`;

const TextEditorContainer = styled.div`
    width: 100%;
    padding: 0.4em;
    position: relative;

    & .ButtonContainer {
        display: flex;
        justify-content: space-between;

        & .ButtonsRight {
            display: flex;
            justify-content: flex-end;
        }
    }
`;

function TextEditor() {
    const { dispatch, sceneState } = useContext(SceneContext);
    const saveScene = useTextToObjectParser();
    const [getPrompt, openAIText] = useOpenAI();
    const [text, setText] = useState();

    const [textEditorHelp, toggleTextEditorHelp] = useState(false);

    useEffect(() => {
        const sceneText = changeObjectToTextParser(sceneState);
        setText(sceneText);
    }, [sceneState]);

    useEffect(() => {
        if (openAIText.length) {
            setText((text) => text + openAIText);
        }
    }, [openAIText]);

    const handleClick = () => {
        saveScene(text);
    };

    const getTextFromOpenAI = () => {
        if (sceneState.openAIused < 3) {
            saveScene(text);
            dispatch({ type: "USE OPENAI" });
            getPrompt(text);
        }
    };

    return (
        <TextEditorContainer>
            {textEditorHelp && (
                <Modal toggleModal={toggleTextEditorHelp}>
                    <InfoBox>
                        <InfoBoxHeader>Write Your Sceeny</InfoBoxHeader>
                        <InfoBoxText>
                            The formatting rules for a Sceeny are the same as
                            for a screenplay.
                        </InfoBoxText>
                        <InfoBoxText highlighted>
                            Scene Headers are one line and all UPPERCASE.
                        </InfoBoxText>
                        <InfoBoxText highlighted>
                            Dialogue is the name in UPPERCASE, followed by a new
                            line and the dialogue. A new line in dialogue
                            creates a new speechbubble. A new paragraph ends the
                            dialogue.
                        </InfoBoxText>
                        <InfoBoxText highlighted>
                            Scene Descriptions (Action Text) is everything else.
                        </InfoBoxText>

                        <InfoBoxText>
                            What else... A Sceeny can also only consist of max.
                            four characters.
                        </InfoBoxText>
                        <InfoBoxText>
                            Oh, and I almost forgot. You have also three wishes
                            free to let OpenAI's AI continue the scene for you.
                            Have fun with it!
                        </InfoBoxText>
                    </InfoBox>
                </Modal>
            )}
            <div className="ButtonContainer">
                <HelpButton
                    onClick={() =>
                        toggleTextEditorHelp((prevState) => !prevState)
                    }
                />
                <div className="ButtonsRight">
                    <Button onClick={getTextFromOpenAI}>
                        Ask the AI {`(${3 - sceneState.openAIused} times)`}
                    </Button>
                    <Button highlighted onClick={handleClick}>
                        Save
                    </Button>
                </div>
            </div>
            <StyledTextArea
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></StyledTextArea>
        </TextEditorContainer>
    );
}

export default TextEditor;

/* 
PURPOSE:
The user can copy paste screenplay scenes in here and also edit them as text. 
On Save they will be automatically turned into a  scene object and a first animation.

NEXT STEPS:
Research building text editor with React
Research regular Expressions for text parsing and automatic formatting

SMALLER COMPONENTS:
- Textarea
- Save Button
- Copy and Paste Buttons (Import Button if I can figure out how to import Markdown Files)
- Formatting Buttons
- Optionally: a small guide how the editor works.

*/
