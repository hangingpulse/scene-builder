import React from "react";
import { useAnimation } from "framer-motion";
import AnimationSpeechbubble from "../components/scenecomponents/SpeechbubbleComponents/AnimationSpeechbubble";
import AnimatedComponent from "../components/scenecomponents/AnimatedComponent/AnimatedComponent";
import Actiontext from "../components/scenecomponents/ActiontextComponents/Actiontext";
import Parenthetical from "../components/scenecomponents/ParentheticalComponents/Parenthetical";
import { DialogueContainer } from "../components/editorcomponents/Animation/Animation.style";
import StyledSpeechbubble from "../components/scenecomponents/SpeechbubbleComponents/Speechbubble.style";

function useSpeechbubbleAnimation() {
    // Animation for the speechbubbles, using the useAnimation hook

    const controls = useAnimation();

    // the animation has custom properties for delay and duration that are passed in

    controls.start(({ delay, duration }) => ({
        display: "block",
        opacity: [0, 1, 1, 0],
        transition: {
            delay: delay,
            duration: duration,
            times: [0, 0.1, 0.9, 1],
        },
        transitionEnd: { display: "none" },
    }));

    const getDialogueComponent = (dialogue, character) => {
        switch (dialogue.type) {
            case "ACTIONTEXT":
                return <Actiontext actiontext={dialogue} animation />;
            case "DIALOGUE":
                return (
                    <StyledSpeechbubble character={character}>
                        {dialogue.text}
                    </StyledSpeechbubble>
                );
            case "PARENTHETICAL":
                return (
                    <Parenthetical
                        parenthetical={dialogue}
                        character={character}
                    />
                );
            default:
                break;
        }
    };

    const buildSpeechbubbles = (sceneState) => {
        let totalDelay = 0;
        return sceneState.dialogue.map((dialogue, index) => {
            const currentCharacter = sceneState.characters.find(
                (character) => character.id === dialogue.character
            );
            const duration = dialogue.length;
            totalDelay += dialogue.delay + duration;

            return (
                <AnimatedComponent
                    key={index}
                    controls={controls}
                    totalDelay={totalDelay}
                    duration={duration}
                >
                    <DialogueContainer
                        key={index}
                        index={`text${
                            dialogue.character ? dialogue.character : 0
                        }`}
                    >
                        {getDialogueComponent(dialogue, currentCharacter)}
                    </DialogueContainer>
                </AnimatedComponent>
            );
        });
    };

    return buildSpeechbubbles;
}

export default useSpeechbubbleAnimation;
