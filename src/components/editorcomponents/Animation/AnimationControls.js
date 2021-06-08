import React from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";
import Button from "../../modularcomponents/Buttons";
import { AnimationControlsContainer } from "./Animation.style";

function AnimationControls({
    animationState,
    startAnimation,
    pauseAnimation,
    changeAnimationItem,
}) {
    return (
        <AnimationControlsContainer>
            <Button
                square="3em"
                onClick={() => changeAnimationItem("PREVIOUS")}
            >
                <FaStepBackward size={20} />
            </Button>
            <Button square="3em" highlighted onClick={startAnimation}>
                <FaPlay size={20} />
            </Button>
            <Button square="3em" onClick={pauseAnimation}>
                <FaPause size={20} />
            </Button>
            <Button square="3em" onClick={() => changeAnimationItem("NEXT")}>
                <FaStepForward size={20} />
            </Button>
        </AnimationControlsContainer>
    );
}

export default AnimationControls;
