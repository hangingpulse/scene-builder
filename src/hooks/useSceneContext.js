import { useReducer, useEffect } from "react";
import uuid from "react-uuid";

function useSceneContext(newScene) {
    const initialState = {
        title: "Example Scene",
        meta: {
            creator: "Me",
            public: true,
            description: "",
            tags: [],
            rawtext: "",
        },
        //  names of itmes must be exactly the same as fields in MngoDB
        general: {
            header: "THIS IS A HEADER",
            background: "",
        },
        characters: [
            {
                id: uuid(),
                name: "JOHN DOE",
                position: 0,
                colorIndex: 0,
                imageIndex: 0,
            },
        ],
        sceneItems: [
            {
                id: uuid(),
                type: "ACTIONTEXT",
                text: "Example Text",
                character: null,
                position: 0,
                length: 2,
                delay: 0,
            },
        ],
    };

    const reducer = (sceneState, action) => {
        switch (action.type) {
            case "LOAD SCENE":
                console.log(action.payload);
                action.payload.characters.filter((character) => character);
                return {
                    ...action.payload,
                };
            case "EDIT SCENE":
                const newState = {
                    ...sceneState,
                    characters: action.payload.characters,
                    sceneItems: action.payload.sceneItems,
                    header: action.payload.header,
                };

                console.log(newState);

                return newState;
            case "DELETE SCENEITEM":
                const sceneItemsWithoutDeletedItem = [...sceneState.sceneItems];
                sceneItemsWithoutDeletedItem.splice(action.payload, 1);
                return {
                    ...sceneState,
                    sceneItems: [...sceneItemsWithoutDeletedItem],
                };
            case "ADD SCENEITEM":
                const sceneItemsWithNewItem = [...sceneState.sceneItems];
                sceneItemsWithNewItem.splice(
                    action.payload.index,
                    0,
                    action.payload.sceneItem
                );
                return {
                    ...sceneState,
                    sceneItems: [...sceneItemsWithNewItem],
                };

            case "EDIT SCENEITEM":
                const sceneItemsWithEditedItem = [...sceneState.sceneItems];

                sceneItemsWithEditedItem[action.payload.index] =
                    action.payload.sceneItem;
                return {
                    ...sceneState,
                    sceneItems: [...sceneItemsWithEditedItem],
                };
            case "UPDATE SCENEELEMENTS":
                const characterIndexArray = action.payload.characters.map(
                    (character) => character.id
                );
                const newSceneItemsArray = sceneState.sceneItems.filter(
                    (item) =>
                        characterIndexArray.includes(item.character) ||
                        item.type === "ACTIONTEXT"
                );
                return {
                    ...sceneState,
                    header: action.payload.header,
                    characters: action.payload.characters,
                    sceneItems: newSceneItemsArray,
                };
            default:
                return sceneState;
        }
    };

    const [sceneState, dispatch] = useReducer(
        reducer,
        initialState
        //     () => {
        //     // get the initialState from the localStorage
        //     // const localScene = localStorage.getItem("scene");
        //     // return localScene ? JSON.parse(localScene) : { ...initialState };
        // }
    );

    // save the sceneState to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem("scene", JSON.stringify(sceneState));
    }, [sceneState]);

    console.log(sceneState);

    return [sceneState, dispatch];
}

export default useSceneContext;

/*
PURPOSE:
This Custom context hook will provide the scene object to all the components.

NEXT STEPS:
- Build a custom hook with useReducer and CreateContext
- Wrap it around the Main Component
- Provide the example scene first (from data)


*/
