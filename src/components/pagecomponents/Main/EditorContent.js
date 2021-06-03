import React, { useState } from "react";
import TextEditor from "../../editorcomponents/TextEditor";
import SceneEditor from "../../SceneEditor";
import AnimationContent from "./AnimationContent";
import TabBar from "../../modularcomponents/TabBar";
import { EditorContentContainer, EditorContainer } from "./Main.style";

function EditorContent({ smallScreen }) {
    const [selectedTab, setSelectedTab] = useState("Edit");

    const showTab = () => {
        switch (selectedTab) {
            case "Write":
                return <TextEditor />;
            case "Edit":
                return <SceneEditor />;
            case "View":
                return <AnimationContent />;
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
