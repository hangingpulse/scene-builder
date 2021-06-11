import React, { useState } from "react";
import TextEditor from "../../TextEditor";
import SceneEditor from "../../SceneEditor";
import AnimationEditor from "../../AnimationEditor";
import TabBar from "../../modularcomponents/TabBar";
import { EditorContentContainer, EditorContainer } from "./Main.style";

function EditorContent({ smallScreen }) {
    const [selectedTab, setSelectedTab] = useState("Write");

    const showTab = () => {
        switch (selectedTab) {
            case "Write":
                return <TextEditor />;
            case "Edit":
                return <SceneEditor />;
            case "View":
                return smallScreen ? <SceneEditor /> : <AnimationEditor />;
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
