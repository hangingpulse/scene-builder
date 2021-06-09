import axios from "axios";

function useFetchScene() {
    const url = process.env.REACT_APP_BACKEND_URL;

    const getSceneData = async (sceneid) => {
        axios.get(`${url}scenes/${sceneid}`).then((res) => res.data.data);
    };

    return getSceneData;
}

export default useFetchScene;
