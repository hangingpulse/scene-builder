import axios from "axios";
import React, { useContext } from "react";
import { SceneContext } from "../../../context/SceneContextProvider";
import Animation from "../../editorcomponents/Animation";
import AnimationControls from "../../editorcomponents/Animation/AnimationControls";
import Button from "../../modularcomponents/Buttons";
import { AnimationContentContainer } from "./Main.style.js";

function AnimationContent() {
    const { sceneState } = useContext(SceneContext);

    const sendToBackend = () => {
        axios
            .post("http://localhost:5000/scenes", {
                ...sceneState,
                title: "Test Scene",
                meta: {
                    creator: "Me",
                    public: true,
                    rawtext: "",
                },
            })
            .then((res) => console.log(res));
    };

    return (
        <AnimationContentContainer>
            <Animation />
            <AnimationControls />
            <Button onClick={sendToBackend}>Save to Backend</Button>
        </AnimationContentContainer>
    );
}

export default AnimationContent;
