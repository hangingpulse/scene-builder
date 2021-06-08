import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { SceneContext } from "./SceneContextProvider";
import { useEffect } from "react/cjs/react.development";

const PreviewContext = createContext();

function PreviewContextProvider({ children }) {
    const { sceneState, dispatch } = useContext(SceneContext);

    const [previewState, setPreviewState] = useState({ ...sceneState });

    // useEffect(() => {
    //     dispatch({ type: "EDIT METADATA", payload: previewState.meta });
    // }, [previewState, dispatch]);

    const editMetaData = (type, value) => {
        switch (type) {
            case "TITLE":
                setPreviewState({ ...previewState, title: value });
                break;
            case "CREATOR":
                setPreviewState({ ...previewState, creator: value });
                break;
            case "DESCRIPTION":
                setPreviewState({ ...previewState, description: value });
                break;
            case "PUBLIC":
                setPreviewState({ ...previewState, public: value });
                break;
            default:
                return;
        }
    };

    console.log(previewState);

    const sendToBackend = () => {
        axios
            .post("http://localhost:5000/scenes", {
                ...sceneState,
                title: "Test Scene",
                meta: {
                    creator: "Me",
                    public: true,
                    rawtext: "",
                },
            })
            .then((res) => console.log(res));
    };

    return (
        <PreviewContext.Provider
            value={{ editMetaData, sendToBackend, previewState }}
        >
            {children}
        </PreviewContext.Provider>
    );
}

export { PreviewContext, PreviewContextProvider };
