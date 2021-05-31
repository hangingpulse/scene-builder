import React, { useState } from "react";
import Animation from "../../editorcomponents/Animation";
import SceneEditor from "../../editorcomponents/SceneEditor";
import TextEditor from "../../editorcomponents/TextEditor/TextEditor";
import { MainContainer, EditorContainer, TabBar, TabItem } from "./Main.style";

function Main() {
    const [selectedTab, setSelectedTab] = useState("SceneEditor");

    console.log(window.innerWidth);

    const handleTab = (e) => {
        setSelectedTab(e.target.innerText);
    };

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
        <MainContainer>
            <TabBar>
                <TabItem
                    active={selectedTab === "TextEditor" ? true : false}
                    onClick={(e) => handleTab(e)}
                    marginRight="-2rem"
                    marginLeft="0"
                >
                    TextEditor
                </TabItem>
                <TabItem
                    active={selectedTab === "SceneEditor" ? true : false}
                    onClick={(e) => handleTab(e)}
                    marginRight="-1rem"
                    marginLeft="-1rem"
                >
                    SceneEditor
                </TabItem>
                <TabItem
                    active={selectedTab === "Animation" ? true : false}
                    onClick={(e) => handleTab(e)}
                    marginRight="0"
                    marginLeft="-2rem"
                >
                    Animation
                </TabItem>
            </TabBar>
            <EditorContainer>{showTab()}</EditorContainer>
        </MainContainer>
    );
}

export default Main;

/*
PURPOSE: Container for the three different Modi of the Editor. Allows to toggle between them.


*/
