import { useState, useEffect } from "react";
import axios from "axios";

function useFetchAllScenes() {
    const [allScenes, setAllScenes] = useState();

    const url = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        axios.get(`${url}scenes`).then((res) => {
            setAllScenes(res.data.data);
            console.log(res.data.data);
        });
    }, [url]);

    console.log(allScenes);
    return allScenes;
}

export default useFetchAllScenes;
