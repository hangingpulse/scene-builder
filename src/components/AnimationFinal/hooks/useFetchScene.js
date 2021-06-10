import axios from "axios";
import { useEffect, useState } from "react";

function useFetchScene() {
    const url = process.env.REACT_APP_BACKEND_URL;
    const [sceneData, setSceneData] = useState("");

    // get all movies for one user

    const getScene = (sceneid) => {
        axios
            .get(`${url}scenes/${sceneid}`)
            .then((response) => {
                setSceneData(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return getScene;
}

export default useFetchScene;
