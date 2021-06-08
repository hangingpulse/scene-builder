import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { SceneContext } from "./SceneContextProvider";
import useSaveScene from "../hooks/useSaveScene";

const PreviewContext = createContext();

function PreviewContextProvider({ children }) {
    const { sceneState, dispatch } = useContext(SceneContext);

    // custom Hook that saves the scene to the backend, gets back the sceneid for the link
    const [sceneId, sendScene, sceneShared] = useSaveScene();
    const [previewState, setPreviewState] = useState({ ...sceneState });

    // opens and closes the preview modal
    const [preview, togglePreview] = useState(true);

    // gets the sceneId as a response from sending it to the backend

    useEffect(() => {
        dispatch({ type: "EDIT METADATA", payload: previewState.meta });
    }, [previewState, dispatch]);

    const editMetaData = (type, value) => {
        switch (type) {
            case "TITLE":
                setPreviewState({ ...previewState, title: value });
                break;
            case "CREATOR":
                console.log(value);
                setPreviewState({
                    ...previewState,
                    meta: { ...previewState.meta, creator: value },
                });
                break;
            case "DESCRIPTION":
                setPreviewState({
                    ...previewState,
                    meta: { ...previewState.meta, description: value },
                });
                break;
            case "PUBLIC":
                setPreviewState({
                    ...previewState,
                    meta: { ...previewState.meta, public: value },
                });
                break;
            default:
                return;
        }
    };

    return (
        <PreviewContext.Provider
            value={{
                preview,
                togglePreview,
                editMetaData,
                sendScene,
                previewState,
                sceneId,
                sceneShared,
            }}
        >
            {children}
        </PreviewContext.Provider>
    );
}

export { PreviewContext, PreviewContextProvider };
