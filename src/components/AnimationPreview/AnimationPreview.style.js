import styled from "styled-components";

const AnimationPreviewContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 5rem;

    background-color: ${({ theme }) => theme.colors.background};

    display: flex;
    flex-direction: column;
    gap: 0.8em;
`;

const SceneDescriptionInputContainer = styled.div`
    width: 100%;
    display: grid;
    padding: 0.4em;
    column-gap: 0.8em;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid black;
    border-radius: 0.8em;
    box-shadow: ${({ theme }) => theme.boxShadows.mainContainer};
    grid-template-areas:
        "title title title creator creator"
        "desc desc desc desc pub";
`;

const TitleContainer = styled.div`
    width: 100%;
    grid-area: title;
`;
const CreatorContainer = styled.div`
    width: 100%;
    grid-area: creator;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    & p {
        width: 2ch;
        font-size: ${({ theme }) => theme.fonts.fontSizes.base};
        font-family: ${({ theme }) => theme.fonts.serif};
        color: white;
        display: inline-block;
    }
`;

const DescriptionContainer = styled.div`
    width: 100%;
    grid-area: desc;
    display: flex;
`;

const PublicContainer = styled.div`
    width: 100%;
    grid-area: pub;
    display: flex;
    justify-content: flex-end;
`;

const ButtonContainer = styled.div`
    width: 100%;
    grid-area: button;
    display: flex;
    justify-content: center; ;
`;

export {
    AnimationPreviewContainer,
    SceneDescriptionInputContainer,
    TitleContainer,
    ButtonContainer,
    CreatorContainer,
    PublicContainer,
    DescriptionContainer,
};
