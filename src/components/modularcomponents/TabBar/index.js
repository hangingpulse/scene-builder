import React from "react";
import { TabBarContainer, TabItem } from "./TabBar.style";

function TabBar({ selectedTab, setSelectedTab, smallScreen }) {
    return (
        <TabBarContainer>
            <TabItem
                active={selectedTab === "Write" ? true : false}
                onClick={(e) => setSelectedTab(e.target.innerText)}
                marginRight="-2rem"
                marginLeft="0"
            >
                Write
            </TabItem>
            <TabItem
                active={selectedTab === "Edit" ? true : false}
                onClick={(e) => setSelectedTab(e.target.innerText)}
                marginRight="-1rem"
                marginLeft="-1rem"
            >
                Edit
            </TabItem>
            {smallScreen && (
                <TabItem
                    active={selectedTab === "View" ? true : false}
                    onClick={(e) => setSelectedTab(e.target.innerText)}
                    marginRight="0"
                    marginLeft="-2rem"
                >
                    View
                </TabItem>
            )}
        </TabBarContainer>
    );
}

export default TabBar;
