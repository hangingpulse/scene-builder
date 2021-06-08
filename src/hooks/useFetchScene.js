import { useState, useEffect } from "react";
import axios from "axios";

function useFetchScene(sceneid) {
    const [sceneData, setSceneData] = useState({});

    const url = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        if (sceneid) {
            axios.get(`${url}scenes/${sceneid}`).then((res) => {
                console.log(res.data);
                setSceneData(res.data.data);
            });
        }
    }, [sceneid, url]);

    return sceneData;
}

export default useFetchScene;
