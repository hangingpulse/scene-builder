import React, { useState, useContext } from "react";
import { SceneContext } from "../../../context/SceneContextProvider";
import styled from "styled-components";
import dummyText from "../../../data/dummyText";
import useTextParser from "../../../hooks/useTextParser";

const StyledTextArea = styled.textarea`
    width: 100%;
    height: 75vh;
    padding: 0.5rem;
    font-size: 1.2rem;
    font-family: ${(props) => props.theme.fonts.sansSerif};
`;

function TextEditor() {
    const [text, setText] = useState(dummyText);
    const { sceneState } = useContext(SceneContext);

    const saveScene = useTextParser();

    const handleClick = () => {
        console.log(sceneState);
        saveScene(text);
    };

    return (
        <div>
            <StyledTextArea
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></StyledTextArea>
            <button className="SaveButton" onClick={handleClick}>
                Save
            </button>
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
