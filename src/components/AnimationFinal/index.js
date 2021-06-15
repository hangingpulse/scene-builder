import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Animation from "../Animation";
import { AnimationFinalContainer } from "./AnimationFinal.style";

function AnimationFinal() {
    const { sceneid } = useParams();
    const [sceneData, setSceneData] = useState("");
    const url = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        const scene = getScene(sceneid);
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

    return (
        <AnimationFinalContainer>
            {sceneData && <Animation sceneObject={sceneData} />}
        </AnimationFinalContainer>
    );
}

export default AnimationFinal;
