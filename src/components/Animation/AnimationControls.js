import React from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";
import Button from "../modularcomponents/Buttons";
import { AnimationControlsContainer } from "./Animation.style";

function AnimationControls({
    animationState,
    startAnimation,
    pauseAnimation,
    changeAnimationItem,
    animate,
    initial,
    transition,
    exit,
}) {
    const { animationPlaying } = animationState;

    return (
        <AnimationControlsContainer
            animate={animate}
            initial={initial}
            transition={transition}
            exit={exit}
        >
            <Button
                square="3em"
                onClick={() => changeAnimationItem("PREVIOUS")}
            >
                <FaStepBackward size={20} />
            </Button>
            <Button
                square="3em"
                highlighted={!animationPlaying}
                onClick={startAnimation}
            >
                <FaPlay size={20} />
            </Button>
            <Button
                square="3em"
                highlighted={animationPlaying}
                onClick={pauseAnimation}
            >
                <FaPause size={20} />
            </Button>
            <Button square="3em" onClick={() => changeAnimationItem("NEXT")}>
                <FaStepForward size={20} />
            </Button>
        </AnimationControlsContainer>
    );
}

export default AnimationControls;
