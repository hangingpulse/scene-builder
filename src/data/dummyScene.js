const dummyScene = {
    id: 0,
    room: [],
    characters: [
        {
            name: "Joseph",
            color: "#e9b0df",
            image: "../../pics/characters/peep-51.png",
        },
        {
            name: "Henrietta",
            color: "#adeecf",
            image: "../../pics/characters/peep-13.png",
        },
    ],
    dialogue: [
        {
            leftBubble: true,
            character: "Joseph",
            text: "Hey there, how's it going!",
            length: 4,
            delay: 0.5,
        },
        {
            leftBubble: false,
            character: "Henrietta",
            text: "Who are you?",
            length: 4,
            delay: 0,
        },
        {
            leftBubble: true,
            character: "Joseph",
            text: "I'm your roommate...",
            length: 3,
            delay: 0.5,
        },
        {
            leftBubble: false,
            character: "Henrietta",
            text: "Really?",
            length: 3,
            delay: 0,
        },
        {
            leftBubble: true,
            character: "Joseph",
            text: "Yeah. Since five years... ",
            length: 4,
            delay: 0.5,
        },
        {
            leftBubble: false,
            character: "Henrietta",
            text: "Ah... cool. ",
            length: 4,
            delay: 0,
        },
        {
            leftBubble: true,
            character: "Joseph",
            text: "So...",
            length: 3,
            delay: 2,
        },
        {
            leftBubble: true,
            character: "Joseph",
            text: "You didn't take your memory pills, huh?",
            length: 3,
            delay: 0,
        },
        {
            leftBubble: false,
            character: "Henrietta",
            text: "I don't want to. They make my skin itchy...",
            length: 4,
            delay: 0,
        },
        {
            leftBubble: true,
            character: "Joseph",
            text: "You really should take them.",
            length: 4,
            delay: 0,
        },
        {
            leftBubble: false,
            character: "Henrietta",
            text: "Don't tell me what to do! You're not my MOM!",
            length: 4,
            delay: 0,
        },
        {
            leftBubble: true,
            character: "Joseph",
            text: "Uhh...",
            length: 3,
            delay: 0,
        },
        {
            leftBubble: false,
            character: "Henrietta",
            text: "Wait...",
            length: 3,
            delay: 0,
        },
        {
            leftBubble: false,
            character: "Henrietta",
            text: "Are you my mom?",
            length: 4,
            delay: 0,
        },
        {
            leftBubble: true,
            character: "Joseph",
            text: "Sigh...",
            length: 4,
            delay: 0,
        },
    ],
};

export default dummyScene;
