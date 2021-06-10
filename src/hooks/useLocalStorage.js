import templateScene from "../data/templateScene";

function useLocalStorage() {
    const storeScene = (sceneObject) => {
        localStorage.setItem("scene", JSON.stringify(sceneObject));
    };

    const getStoredScene = () => {
        const localScene = localStorage.getItem("scene");
        return localScene ? JSON.parse(localScene) : templateScene;
    };

    const clearLocalStorage = () => {
        localStorage.setItem("scene", JSON.stringify({}));
    };

    return { storeScene, getStoredScene, clearLocalStorage };
}

export default useLocalStorage;
