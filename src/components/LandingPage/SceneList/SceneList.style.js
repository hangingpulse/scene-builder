import styled from "styled-components";

const SceneListContainer = styled.div`
    height: 100vh;
    border: 1px black solid;
    border-radius: 1.2em;
    display: flex;
    align-items: center;

    padding: 0.8em;

    overflow-y: scroll;

    background-color: ${({ theme }) => theme.colors.primaryLight};

    ${({ theme }) => theme.desktopSmall`
            flex-direction: column;
            width: 20%;
        `}
`;

const SceneListItemContainer = styled.div`
    min-width: 20ch;
    max-width: 25ch;
    font-size: ${({ theme }) => theme.fonts.fontSizes.blockSmall};
    font-family: ${({ theme }) => theme.fonts.serif};
    padding: 0.4em;
    margin: 0.4em;

    background-color: ${({ theme }) => theme.colors.secondary};
    border: 2px solid black;
    border-radius: 0.4rem;

    display: flex;
    flex-direction: column;
    gap: 0.2em;

    & .TitleAndCreator {
        display: flex;
    }

    &:hover {
        cursor: pointer;
    }

    ${({ theme }) => theme.desktopSmall`
            max-width: 90%;
            width: 90%;
        `}
`;

const SceneListItemTitle = styled.p`
    font-family: inherit;
    font-weight: 600;
`;

const SceneListItemCreator = styled.p`
    font-family: inherit;
    font-style: italic;
`;

const SceneListItemDescription = styled.p`
    display: block;
    font-family: inherit;
`;

export {
    SceneListContainer,
    SceneListItemContainer,
    SceneListItemCreator,
    SceneListItemDescription,
    SceneListItemTitle,
};
