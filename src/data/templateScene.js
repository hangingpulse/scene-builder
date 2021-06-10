import uuid from "react-uuid";

const templateScene = {
    title: "Scene Title",
    openAIused: 0,
    meta: {
        creator: "Anonymous",
        public: true,
        description: "A short description of the scene",
        tags: [],
        rawtext: "",
    },
    //  names of itmes must be exactly the same as fields in MngoDB
    general: {
        header: "THIS IS A HEADER",
        background: "",
    },
    characters: [],
    sceneItems: [
        {
            id: uuid(),
            itemType: "ACTIONTEXT",
            text: "Something is happening in this paragraph.",
            character: null,
            position: 0,
            length: 30,
            delay: 0,
            display: true,
        },
    ],
};

export default templateScene;
