import styled from "styled-components";

const LandingPageContainer = styled.div`
    width: 100%;
    padding: 1.2rem 0;
    display: flex;
    gap: 1.2rem;
    margin-top: 3rem;
`;

const SceneListContainer = styled.div`
    width: 20%;
    height: 100vh;
    border: 1px black solid;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

const GalleryContainer = styled.div`
    width: 60%;
    border: 1px black solid;
`;

const AboutContainer = styled.div`
    width: 20%;
    border: 1px black solid;
`;

export {
    LandingPageContainer,
    AboutContainer,
    GalleryContainer,
    SceneListContainer,
};
