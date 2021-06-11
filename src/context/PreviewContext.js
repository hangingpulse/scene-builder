import React, { createContext, useState, useContext, useEffect } from "react";
import { SceneContext } from "./SceneContext";
import useSendScene from "../components/AnimationPreview/hooks/useSendScene";
import useLocalStorage from "../hooks/useLocalStorage";

const PreviewContext = createContext();

function PreviewContextProvider({ children }) {
    const { sceneState, dispatch } = useContext(SceneContext);
    const { clearLocalStorage } = useLocalStorage();

    // custom Hook that saves the scene to the backend, gets back the sceneid for the link
    const [sceneId, sendScene, sceneShared, setSceneShared] = useSendScene();
    const [previewState, setPreviewState] = useState({ ...sceneState });

    // opens and closes the preview modal
    const [preview, togglePreview] = useState(false);

    // gets the sceneId as a response from sending it to the backend

    useEffect(() => {
        setPreviewState({ ...sceneState });
    }, [sceneState]);

    useEffect(() => {
        dispatch({ itemType: "EDIT METADATA", payload: previewState.meta });
    }, [previewState, dispatch]);

    const handleShare = () => {
        sendScene(previewState);
        clearLocalStorage();
        dispatch({ type: "LOAD NEW SCENE" });
    };

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
                console.log(previewState.meta.public);
                setPreviewState({
                    ...previewState,
                    meta: {
                        ...previewState.meta,
                        public: previewState.meta.public ? false : true,
                    },
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
                setSceneShared,
                handleShare,
            }}
        >
            {children}
        </PreviewContext.Provider>
    );
}

export { PreviewContext, PreviewContextProvider };
