import { useState, useEffect } from "react";

async function useLocalStorage() {
    // State that saves the curerent sceneState on local storage

    console.log(JSON.parse(localStorage.getItem("scene")));
    // useEffect to run and save in the local storage
    const saveSceneToLocalStorage = (sceneState) => {
        console.log(sceneState);
        localStorage.setItem("scene", JSON.stringify(sceneState));
    };

    const getSceneFromLocalStorage = async () => {
        const sceneLocal = await localStorage.getItem("scene");
        return JSON.parse(sceneLocal);
        // if (localStorage.getItem("scene") !== "object") {
        //     localStorage.setItem("scene", JSON.stringify({}));
        //     console.log(localStorage.getItem("scene"));
        // } else {
        //     let sceneLocal = await JSON.parse(localStorage.getItem("scene"));
        //     console.log(sceneLocal);
        //     return sceneLocal;
        // }
    };
    return [saveSceneToLocalStorage, getSceneFromLocalStorage];
}

export default useLocalStorage;
