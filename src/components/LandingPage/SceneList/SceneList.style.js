import styled from "styled-components";

const SceneListContainer = styled.div`
    height: 92vh;
    border: 1px black solid;
    border-radius: 1.2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    background-color: ${({ theme }) => theme.colors.primaryLight};
    box-shadow: ${({ theme }) => theme.boxShadows.mainContainer};

    ${({ theme }) => theme.desktopSmall`
            width: 20%;
        `}
`;

const SceneListItemsContainer = styled.div`
    width: 100%;
    padding: 0.8em;
    display: flex;
    flex-direction: row-reverse;

    overflow-y: scroll;

    ${({ theme }) => theme.desktopSmall`
            flex-direction: column-reverse;
        `}
`;

const SceneListItemContainer = styled.div`
    min-width: 20ch;
    max-width: 25ch;
    font-size: ${({ theme }) => theme.fonts.fontSizes.blockSmall};
    font-family: ${({ theme }) => theme.fonts.serif};
    padding: 0.4em;
    margin: 0.4em;

    background-color: ${({ theme, selected }) =>
        selected ? theme.colors.highlight : theme.colors.secondary};
    border: 2px solid black;
    border-radius: 0.4rem;
    box-shadow: ${({ theme }) => theme.boxShadows.animationText};

    display: flex;
    flex-direction: column;
    gap: 0.2em;

    & .TitleAndCreator {
        display: flex;
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
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
    SceneListItemsContainer,
    SceneListItemContainer,
    SceneListItemCreator,
    SceneListItemDescription,
    SceneListItemTitle,
};
