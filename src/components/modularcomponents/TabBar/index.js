import React from "react";
import { TabBarContainer, TabItem } from "./TabBar.style";

function TabBar({ selectedTab, setSelectedTab, smallScreen }) {
    return (
        <TabBarContainer>
            <TabItem
                active={selectedTab === "TextEditor" ? true : false}
                onClick={(e) => setSelectedTab(e.target.innerText)}
                marginRight="-2rem"
                marginLeft="0"
            >
                TextEditor
            </TabItem>
            <TabItem
                active={selectedTab === "SceneEditor" ? true : false}
                onClick={(e) => setSelectedTab(e.target.innerText)}
                marginRight="-1rem"
                marginLeft="-1rem"
            >
                SceneEditor
            </TabItem>
            {smallScreen && (
                <TabItem
                    active={selectedTab === "Animation" ? true : false}
                    onClick={(e) => setSelectedTab(e.target.innerText)}
                    marginRight="0"
                    marginLeft="-2rem"
                >
                    Animation
                </TabItem>
            )}
        </TabBarContainer>
    );
}

export default TabBar;
