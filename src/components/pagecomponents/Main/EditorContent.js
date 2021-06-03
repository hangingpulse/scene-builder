import React, { useState } from "react";
import TextEditor from "../../editorcomponents/TextEditor";
import SceneEditor from "../../SceneEditor";
import Animation from "../../editorcomponents/Animation";
import TabBar from "../../modularcomponents/TabBar";
import { EditorContentContainer, EditorContainer } from "./Main.style";

function EditorContent({ smallScreen }) {
    const [selectedTab, setSelectedTab] = useState("SceneEditor");

    const showTab = () => {
        switch (selectedTab) {
            case "TextEditor":
                return <TextEditor />;
            case "SceneEditor":
                return <SceneEditor />;
            case "Animation":
                return <Animation />;
            default:
                return;
        }
    };

    return (
        <EditorContentContainer smallScreen={smallScreen}>
            <TabBar
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                smallScreen={smallScreen}
            />

            <EditorContainer>{showTab()}</EditorContainer>
        </EditorContentContainer>
    );
}

export default EditorContent;
