import { useState } from "react";
import axios from "axios";

function useSendScene() {
    const [sceneId, setSceneId] = useState({});
    const [sceneShared, setSceneShared] = useState(false);

    const url = process.env.REACT_APP_BACKEND_URL;

    const sendScene = (sceneData) => {
        console.log(sceneData);
        if (!sceneShared) {
            axios.post(`${url}scenes`, sceneData).then((res) => {
                setSceneId(res.data.data._id);
                setSceneShared(true);
            });
        }
    };

    return [sceneId, sendScene, sceneShared, setSceneShared];
}

export default useSendScene;
