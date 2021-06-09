import styled from "styled-components";

const AnimationPreviewContainer = styled.div`
    position: absolute;
    z-index: 100;

    width: 100vw;
    height: 100vh;
    padding: 5rem;

    background-color: ${({ theme }) => theme.colors.background};

    display: flex;
    flex-direction: column;
`;

const SceneDescriptionInputContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-areas:
        "title title creator"
        "desc desc desc"
        "button button button";
`;

const TitleContainer = styled.div`
    width: 100%;
    grid-area: title;
`;
const CreatorContainer = styled.div`
    width: 100%;
    grid-area: creator;
`;

const DescriptionContainer = styled.div`
    width: 100%;
    grid-area: desc;
`;

const ButtonContainer = styled.div`
    width: 100%;
    grid-area: button;
`;

export {
    AnimationPreviewContainer,
    SceneDescriptionInputContainer,
    TitleContainer,
    ButtonContainer,
    CreatorContainer,
    DescriptionContainer,
};
