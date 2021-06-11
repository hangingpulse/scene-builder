import styled from "styled-components";
import { motion } from "framer-motion";

const AnimationAndControls = styled.div`
    display: flex;
    flex-direction: column;
`;

const AnimationContainer = styled.div`
    width: 100%;
    max-width: 100rem;
    display: grid;
    grid-template-areas:
        "head head head"
        "ani ani ani"
        "ctrl ctrl ctrl";
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 4rem 3fr 8rem;
    column-gap: 0.6rem;
    row-gap: 0.8rem;

    align-items: center;
    justify-items: center;

    overflow: hidden;

    background-color: ${({ theme }) => theme.colors.primaryLight};
    border: 3px solid black;
    border-radius: 1.6em;
    box-shadow: ${({ theme }) => theme.boxShadows.mainContainer};
    @media (orientation: landscape) {
        @media (max-width: 800px) {
            grid-template-areas:
                "head head head"
                "ani ani ctrl"
                "ani ani ctrl";
        }
    }
    ${({ theme }) => theme.tablet`
        grid-template-rows: 4rem 4fr 8rem;
        `}
    ${({ theme }) => theme.desktopSmall`
        grid-template-rows: 4rem 4fr 8rem;
        `}
`;

const AnimationContentContainer = styled.div`
    width: 100%;
    min-height: 20rem;
    display: grid;
    grid-area: ani;
    grid-template-areas:
        "char0 text char1"
        "char2 text char3";
    grid-template-columns: 2fr 5fr 2fr;
    grid-template-rows: 1fr 1fr;
`;

const AnimationHeader = styled.div`
    grid-area: head;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2rem;
    text-align: center;

    background-color: ${({ theme }) => theme.colors.highlight};
    border-bottom: 2px solid black;
    border-radius: 0.6em 0.6em 0 0;
    box-shadow: inset 0px -6px 5px -6px black;
`;

const CharacterContainerAnimation = styled.div`
    grid-area: ${(props) => props.index};
    padding: 1.2rem;
`;

const SceneContentAnimation = styled.div`
    position: relative;
    height: 80%;
    width: 100%;
    grid-column: 2 / 3;
    grid-row: 1 / 5;
    align-self: center;
`;

const AnimationControlsContainer = styled(motion.div)`
    grid-area: ctrl;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: ${(props) => props.theme.fonts.fontSizes.base};
    padding: 1.6em 0;

    background-color: ${({ theme }) => theme.colors.primary};
    border-top: 2px solid black;
    border-radius: 0 0 0.6em 0.6em;
    box-shadow: inset 0px 6px 5px -4px black;

    @media (orientation: landscape) {
        @media (max-width: 800px) {
            flex-direction: column;
        }
    }
`;

export {
    AnimationContainer,
    AnimationContentContainer,
    CharacterContainerAnimation,
    SceneContentAnimation,
    AnimationHeader,
    AnimationControlsContainer,
    AnimationAndControls,
};
