import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useFetchScene from "./hooks/useFetchScene";
import Animation from "../Animation";
import { AnimationFinalContainer } from "./AnimationFinal.style";

function AnimationFinal() {
    const { sceneid } = useParams();
    const [sceneData, setSceneData] = useState("");
    const url = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        const scene = getScene(sceneid);
        console.log(scene);
        setSceneData(scene);
    }, []);

    const getScene = () => {
        axios
            .get(`${url}scenes/${sceneid}`)
            .then((response) => {
                setSceneData(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
