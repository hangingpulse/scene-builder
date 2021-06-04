import React, { useContext } from "react";
import styled from "styled-components";
import { SceneContext } from "../../../context/SceneContextProvider";
import { AnimationContext } from "../../../context/AnimationContext";
import {
    FaPlay,
    FaPause,
    FaStepForward,
    FaStepBackward,
    FaFastForward,
    FaFastBackward,
} from "react-icons/fa";
import Button from "../../modularcomponents/Buttons";

const AnimationControlsContainer = styled.div`
    width: 100%;
    display: flex;
    border: 1px black solid;
    justify-content: center;

    font-size: ${(props) => props.theme.fonts.fontSizes.base};

    padding: 1.2em;
`;

const PlayButton = styled.div`
    padding: 0.4em;

    background-color: ${(props) => props.theme.colors.highlight};
    border: 2px black solid;

    &:hover {
        cursor: pointer;
    }
`;

function AnimationControls() {
    const {
        pauseAnimation,
        setAnimationPlaying,
        animationPlaying,
        setAnimationIndex,
        animationIndex,
        setCurrentAnimationList,
    } = useContext(AnimationContext);

    const { sceneState } = useContext(SceneContext);

    const playAnimation = () => {
        setAnimationPlaying(true);
    };

    const changeItem = (direction) => {
        if (!animationPlaying) {
            switch (direction) {
                case "next":
                    console.log(animationIndex);
                    setAnimationIndex((prevState) => prevState + 1);
                    setCurrentAnimationList([
                        ...sceneState.dialogue.slice(animationIndex + 1),
                    ]);
                    break;
                case "previous":
                    setAnimationIndex((prevState) => prevState - 1);
                    setCurrentAnimationList([
                        ...sceneState.dialogue.slice(animationIndex - 1),
                    ]);
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <AnimationControlsContainer>
            <Button round onClick={() => changeItem("previous")}>
                <FaStepBackward size={20} />
            </Button>
            <Button round highlighted onClick={playAnimation}>
                <FaPlay size={20} />
            </Button>
            <Button round onClick={pauseAnimation}>
                <FaPause size={20} />
            </Button>
            <Button round onClick={() => changeItem("next")}>
                <FaStepForward size={20} />
            </Button>
        </AnimationControlsContainer>
    );
}

export default AnimationControls;

/*

    const playAnimation = () => {
        setAnimationPlaying(true);
    };

    const changeItem = (direction) => {
        if (!animationPlaying) {
            switch (direction) {
                case "next":
                    console.log(animationIndex);
                    setAnimationIndex((prevState) => prevState + 1);
                    break;
                case "previous":
                    setAnimationIndex((prevState) => prevState - 1);
                    break;
                default:
                    break;
            }
        }
    };
*/
