import React, { useState } from "react";
import { MainContainer } from "./Main.style";
import EditorContent from "./EditorContent";
import AnimationContent from "./AnimationContent";

function Main() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return (
        <MainContainer flex={windowWidth >= 1024 ? "row" : ""}>
            <EditorContent smallScreen={windowWidth >= 1024 ? false : true} />
            {windowWidth >= 1024 ? <AnimationContent /> : ""}
        </MainContainer>
    );
}

export default Main;

/*
PURPOSE: Container for the three different Modi of the Editor. Allows to toggle between them.


*/
