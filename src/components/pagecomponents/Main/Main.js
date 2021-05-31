import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Animation from "../../editorcomponents/Animation";
import SceneEditor from "../../editorcomponents/SceneEditor";
import TextEditor from "../../editorcomponents/TextEditor/TextEditor";
import {
    MainContainer,
    EditorContainer,
    TabBar,
    TabItem,
    AnimationContainer,
} from "./Main.style";

function Main() {
    const [selectedTab, setSelectedTab] = useState("SceneEditor");

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

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

    if (windowWidth >= 1024) {
        return (
            <MainContainer flex="row">
                <div className="MainContent">
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
                            active={
                                selectedTab === "SceneEditor" ? true : false
                            }
                            onClick={(e) => handleTab(e)}
                            marginRight="-1rem"
                            marginLeft="-1rem"
                        >
                            SceneEditor
                        </TabItem>
                    </TabBar>
                    <EditorContainer>{showTab()}</EditorContainer>
                </div>
                <AnimationContainer></AnimationContainer>
            </MainContainer>
        );
    } else {
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
}

export default Main;

/*
PURPOSE: Container for the three different Modi of the Editor. Allows to toggle between them.


*/
