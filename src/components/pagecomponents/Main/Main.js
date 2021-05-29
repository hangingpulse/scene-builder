import React, { useState, useEffect, useContext } from "react";
import { SceneContext } from "../../../context/SceneContextProvider";
import useLocalStorage from "../../../hooks/useLocalStorage";
import Animation from "../../editorcomponents/Animation";
import SceneEditor from "../../editorcomponents/SceneEditor";
import TextEditor from "../../editorcomponents/TextEditor/TextEditor";
import { MainContainer, TabBar, TabItem } from "./Main.style";

function Main() {
    const [selectedTab, setSelectedTab] = useState("SceneEditor");

    const { sceneState } = useContext(SceneContext);
    const [saveSceneToLocalStorage, getSceneFromLocalStorage] =
        useLocalStorage();

    useEffect(() => {
        saveSceneToLocalStorage(sceneState);
    }, [sceneState, saveSceneToLocalStorage]);

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
            {showTab()}
        </MainContainer>
    );
}

export default Main;

/*
PURPOSE: Container for the three different Modi of the Editor. Allows to toggle between them.


*/
