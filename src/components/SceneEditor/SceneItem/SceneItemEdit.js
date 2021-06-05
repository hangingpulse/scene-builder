import React, { useState } from "react";
import styled from "styled-components";
import SceneItemBase from "../../scenecomponents/SceneItem.style";
import Button, {
    CloseButton,
    DeleteButton,
} from "../../modularcomponents/Buttons";
import { TextArea } from "../../modularcomponents/Input";

const SceneItemEditContainer = styled(SceneItemBase)`
    width: 100%;
    grid-column: 1 / -1;
    padding: 0.2em;

    display: flex;
    flex-direction: column;

    position: relative;

    & .CloseButton {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    & .EditButtons {
        display: flex;
    }
`;
// HideSceneToggle: Modular Component
// ChangeLengthInput: Modular Component, NumberInput
// TextInput: Modular Component, small Text Area

function SceneItemEdit({ sceneItem, character, toggleEditSceneItem }) {
    const [text, setText] = useState(sceneItem.text);

    const closeEdit = () => {
        toggleEditSceneItem(false);
    };

    return (
        <SceneItemEditContainer sceneItem={sceneItem} character={character}>
            <div className="CloseButton">
                <CloseButton onClick={closeEdit} />
            </div>
            <TextArea value={text} onChange={(e) => setText(e.target.value)} />
            {/* <CloseEditModeButton />
            <SelectSceneItemCharacter />
            <EditSceneItemText />
                <ChangeLengthSceneItemInput />
                <HideSceneItemToggle />
            */}
            <div className="EditButtons">
                <DeleteButton size="2em" />
            </div>
        </SceneItemEditContainer>
    );
}

export default SceneItemEdit;
