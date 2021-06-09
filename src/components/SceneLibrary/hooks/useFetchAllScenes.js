import { useState, useEffect } from "react";
import axios from "axios";

function useFetchAllScenes() {
    const [allScenes, setAllScenes] = useState();

    const url = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        axios.get(`${url}scenes`).then((res) => {
            console.log(res.data);
            setAllScenes(res.data.data);
        });
    }, [url]);

    return allScenes;
}

export default useFetchAllScenes;
