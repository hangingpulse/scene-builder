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

function AnimationControls() {
    const {
        pauseAnimation,
        setAnimationPlaying,
        animationPlaying,
        setAnimationIndex,
        animationIndex,
        setCurrentAnimationList,
        animationState,
    } = useContext(AnimationContext);

    const { sceneState } = useContext(SceneContext);

    const playAnimation = () => {
        setAnimationPlaying(true);
    };

    const changeItem = (direction) => {
        if (!animationPlaying) {
            switch (direction) {
                case "next":
                    const nextAnimationIndex =
                        animationIndex >= animationState.sceneItems.length - 1
                            ? 0
                            : animationIndex + 1;
                    setAnimationIndex(nextAnimationIndex);
                    setCurrentAnimationList([
                        ...sceneState.sceneItems.slice(nextAnimationIndex),
                    ]);
                    break;
                case "previous":
                    const previousAnimationIndex =
                        animationIndex === 0
                            ? animationState.sceneItems.length - 1
                            : animationIndex - 1;

                    setAnimationIndex(previousAnimationIndex);
                    setCurrentAnimationList([
                        ...sceneState.sceneItems.slice(previousAnimationIndex),
                    ]);
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <AnimationControlsContainer>
            <Button square="3em" onClick={() => changeItem("previous")}>
                <FaStepBackward size={20} />
            </Button>
            <Button square="3em" highlighted onClick={playAnimation}>
                <FaPlay size={20} />
            </Button>
            <Button square="3em" onClick={pauseAnimation}>
                <FaPause size={20} />
            </Button>
            <Button square="3em" onClick={() => changeItem("next")}>
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
