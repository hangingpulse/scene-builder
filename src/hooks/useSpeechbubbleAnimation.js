import React from "react";
import { useAnimation } from "framer-motion";
import AnimationSpeechbubble from "../components/Animation/AnimationSpeechbubble";

function useSpeechbubbleAnimation() {
    // Animation for the speechbubbles, using the useAnimation hook

    const controls = useAnimation();

    // the animation has custom properties for delay and duration that are passed in

    controls.start(({ delay, duration }) => ({
        opacity: [0, 1, 1, 0],
        transition: {
            delay: delay,
            duration: duration,
            times: [0, 0.1, 0.9, 1],
        },
        transitionEnd: { display: "none" },
    }));

    const buildSpeechbubbles = (sceneState) => {
        let totalDelay = 0;
        return sceneState.map((dialogue, index) => {
            const duration = dialogue.length;
            totalDelay += dialogue.delay + duration;

            return (
                <AnimationSpeechbubble
                    key={index}
                    controls={controls}
                    totalDelay={totalDelay}
                    duration={duration}
                    dialogue={dialogue}
                />
            );
        });
    };

    return buildSpeechbubbles;
}

export default useSpeechbubbleAnimation;
