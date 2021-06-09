import React from "react";
import { useParams } from "react-router-dom";
import useFetchScene from "./hooks/useFetchScene";
import Animation from "../Animation";
import { AnimationFinalContainer } from "./AnimationFinal.style";

function AnimationFinal() {
    const { sceneid } = useParams();

    const sceneData = useFetchScene(sceneid);
    console.log(sceneData);
    return (
        <AnimationFinalContainer>
            {sceneData && <Animation sceneObject={sceneData} />}
            {/* <SceneInfo>
                <Title></Title>
                <Creator></Creator>
                <Description></Description>
            </SceneInfo> */}
        </AnimationFinalContainer>
    );
}

export default AnimationFinal;
