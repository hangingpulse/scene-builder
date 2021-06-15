import styled from "styled-components";
import { ButtonContainer } from "../modularcomponents/Buttons/Button.style";

const LandingPageContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    ${({ theme }) => theme.desktopSmall`
            flex-direction: row;
        `}
`;

const GalleryContainer = styled.div`
    max-width: 80rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2em;

    ${({ theme }) => theme.desktopSmall`
            width: 60%;
        `}
`;

const SceneInformationContainer = styled.div`
    width: 100%;
    font-size: ${({ theme }) => theme.fonts.fontSizes.blockLarge};
    font-family: ${({ theme }) => theme.fonts.serif};
    background-color: ${({ theme }) => theme.colors.primaryLight};
    padding: 0.8em;
    border-radius: 0.8em;
    border: 2px solid black;
    box-shadow: ${({ theme }) => theme.boxShadows.mainContainer};
    margin-top: 0.8rem;

    display: grid;
    grid-template-areas:
        "title title creator"
        "desc desc desc";
    gap: 0.4em;

    & .Title {
        display: inline-block;
        grid-area: title;
        font-weight: 600;
    }
    & .Creator {
        grid-area: creator;
        display: inline-block;
        font-style: italic;
        justify-self: flex-end;
    }
    & .Description {
        grid-area: desc;
        display: inline-block;
    }
`;

const AboutContainer = styled.div`
    height: 92vh;
    border: 1px black solid;
    border-radius: 1.2em;
    display: flex;
    align-items: center;
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.boxShadows.mainContainer};

    background-color: ${({ theme }) => theme.colors.primaryLight};

    ${({ theme }) => theme.desktopSmall`
            flex-direction: column;
            width: 20%;
        `}
`;

const CallToActionButton = styled(ButtonContainer)`
    width: 20rem;
    height: 12rem;
    font-size: ${({ theme }) => theme.fonts.fontSizes.header2};
    font-weight: 600;
    color: black;
    border: 3px black solid;

    box-shadow: 5px 5px 5px black;
    text-align: center;
`;

export {
    LandingPageContainer,
    AboutContainer,
    GalleryContainer,
    CallToActionButton,
    SceneInformationContainer,
};
