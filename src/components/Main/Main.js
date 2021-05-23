import React, { useState } from "react";
import { SceneContextProvider } from "../../context/SceneContextProvider";
import Animation from "../Animation/Animation";
import SceneEditor from "../SceneEditor/SceneEditor";
import TextEditor from "../TextEditor/TextEditor";
import { MainContainer, TabBar, TabItem } from "./Main.style";

function Main() {
    const [selectedTab, setSelectedTab] = useState("SceneEditor");

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
                    active={selectedTab === "TextEditor" ? "active" : ""}
                    onClick={(e) => handleTab(e)}
                >
                    TextEditor
                </TabItem>
                <TabItem
                    active={selectedTab === "SceneEditor" ? "active" : ""}
                    onClick={(e) => handleTab(e)}
                >
                    SceneEditor
                </TabItem>
                <TabItem
                    active={selectedTab === "Animation" ? "active" : ""}
                    onClick={(e) => handleTab(e)}
                >
                    Animation
                </TabItem>
            </TabBar>
            <SceneContextProvider>{showTab()}</SceneContextProvider>
        </MainContainer>
    );
}

export default Main;

/*
PURPOSE: Container for the three different Modi of the Editor. Allows to toggle between them.


*/
