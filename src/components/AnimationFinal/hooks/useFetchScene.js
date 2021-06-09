import { useState } from "react";
import axios from "axios";

function useFetchScene() {
    const [selectedSceneData, setSelectedSceneData] = useState({});

    const url = process.env.REACT_APP_BACKEND_URL;

    const getSceneData = async (sceneid) => {
        const sceneData = await axios
            .get(`${url}scenes/${sceneid}`)
            .then((res) => res.data.data);
        setSelectedSceneData(sceneData);
    };

    return getSceneData;
}

export default useFetchScene;
