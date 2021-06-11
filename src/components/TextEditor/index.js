import React, { useState, useEffect, useContext } from "react";
import { SceneContext } from "../../context/SceneContext";
import styled from "styled-components";
import useTextToObjectParser from "./hooks/useTextToObjectParser";
import changeObjectToTextParser from "./hooks/useObjectToTextParser";
import useOpenAI from "./hooks/useOpenAI";

import Button from "../modularcomponents/Buttons";

const StyledTextArea = styled.textarea`
    width: 100%;
    height: 75vh;
    padding: 1rem;
    font-size: ${({ theme }) => theme.fonts.fontSizes.base};
    font-family: ${(props) => props.theme.fonts.sansSerif};
    box-shadow: ${({ theme }) => theme.boxShadows.editorInset};
`;

function TextEditor() {
    const { dispatch, sceneState } = useContext(SceneContext);
    const [text, setText] = useState();
    const saveScene = useTextToObjectParser();
    const [getPrompt, openAIText] = useOpenAI();

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
        console.log(sceneState.openAIused);
        if (sceneState.openAIused < 3) {
            dispatch({ type: "USE OPENAI" });
            getPrompt(text);
        }
    };

    return (
        <div>
            <Button highlighted onClick={handleClick}>
                Save
            </Button>
            <Button onClick={getTextFromOpenAI}>Generate new lines</Button>
            <StyledTextArea
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></StyledTextArea>
        </div>
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
