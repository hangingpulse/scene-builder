import styled from "styled-components";
import { ButtonContainer } from "../modularcomponents/Buttons/Button.style";

const LandingPageContainer = styled.div`
    width: 100%;
    padding: 1.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 3rem;

    ${({ theme }) => theme.desktopSmall`
            flex-direction: row;
        `}
`;

const GalleryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${({ theme }) => theme.desktopSmall`
            width: 60%;
        `}
`;

const SceneInformationContainer = styled.div`
    width: 100%;
    font-size: ${({ theme }) => theme.fonts.fontSizes.blockLarge};
    font-family: ${({ theme }) => theme.fonts.serif};
    background-color: ${({ theme }) => theme.colors.primaryLight};
    margin: 0.4em;
    padding: 0.4em;
    border-radius: 0.8em;

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
    }
    & .Description {
        grid-area: desc;
        display: inline-block;
    }
`;

const AboutContainer = styled.div`
    border: 1px black solid;
    border-radius: 1.2em;
    background-color: ${({ theme }) => theme.colors.primaryLight};

    ${({ theme }) => theme.desktopSmall`
            flex-direction: column;
            width: 20%;
        `}
`;

const CallToActionButton = styled(ButtonContainer)`
    width: 25rem;
    height: 12rem;
    font-size: ${({ theme }) => theme.fonts.fontSizes.header2};
    color: white;
    border-color: ${({ theme }) => theme.colors.primary};
    border-width: 1rem;
    box-shadow: 10px 10px 5px black;
    text-align: center;
`;

export {
    LandingPageContainer,
    AboutContainer,
    GalleryContainer,
    CallToActionButton,
    SceneInformationContainer,
};
