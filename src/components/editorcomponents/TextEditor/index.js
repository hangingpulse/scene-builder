import React, { useState, useEffect, useContext } from "react";
import { SceneContext } from "../../../context/SceneContextProvider";
import styled from "styled-components";
import dummyText from "../../../data/dummyText";
import useTextToObjectParser from "../../../hooks/useTextToObjectParser";
import changeObjectToTextParser from "../../../hooks/useObjectToTextParser";
import useOpenApi from "../../../hooks/useOpenApi";

const StyledTextArea = styled.textarea`
    width: 100%;
    height: 75vh;
    padding: 0.5rem;
    font-size: 1.2rem;
    font-family: ${(props) => props.theme.fonts.sansSerif};
`;

function TextEditor() {
    const { sceneState } = useContext(SceneContext);
    const [text, setText] = useState(dummyText);
    const [getPrompt, openApiText] = useOpenApi();

    useEffect(() => {
        const sceneText = changeObjectToTextParser(sceneState);
        setText(sceneText);
    }, [sceneState]);

    useEffect(() => {
        if (openApiText.length) {
            setText(text + openApiText);
        }
    }, [openApiText]);

    const saveScene = useTextToObjectParser();

    const handleClick = () => {
        saveScene(text);
    };

    const getTextFromOpenApi = () => {
        getPrompt(text);
    };

    return (
        <div>
            <button className="SaveButton" onClick={handleClick}>
                Save
            </button>
            <button onClick={() => getPrompt(text)}>Generate new lines</button>
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
