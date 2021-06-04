import React from "react";
import styled from "styled-components";

const SceneItemWrapperContainer = styled.div`
    width: 100%;
    grid-column: ${({ characterCount, characterPosition }) =>
            characterPosition === 5
                ? 4
                : characterPosition * (6 / (characterCount - 1)) + 1} / span 6;
`;

function SceneItemWrapper({ children, characterCount, characterPosition }) {
    return (
        <SceneItemWrapperContainer
            characterPosition={characterPosition}
            characterCount={characterCount}
        >
            {children}
        </SceneItemWrapperContainer>
    );
}

export default SceneItemWrapper;
