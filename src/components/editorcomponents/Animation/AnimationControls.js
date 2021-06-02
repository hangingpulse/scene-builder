import React, { useContext } from "react";
import { AnimationContext } from "../../../context/AnimationContext";
import styled from "styled-components";

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
        setAnimationPlaying,
        animationPlaying,
        setAnimationIndex,
        animationIndex,
    } = useContext(AnimationContext);

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

    return (
        <AnimationControlsContainer>
            <PlayButton onClick={playAnimation}>Play Animation</PlayButton>
            <button onClick={() => setAnimationPlaying(false)}>
                Pause Animation
            </button>
            <button onClick={() => changeItem("previous")}>
                Previous Item
            </button>
            <button onClick={() => changeItem("next")}>Next Item</button>
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
