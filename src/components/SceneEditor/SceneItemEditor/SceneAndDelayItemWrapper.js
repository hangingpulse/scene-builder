import React from "react";
import styled from "styled-components";

const SceneAndDelayItemWrapperContainer = styled.div`
    width: 100%;
    margin-bottom: 0.8em;
`;

function SceneAndDelayItemWrapper({ children }) {
    return (
        <SceneAndDelayItemWrapperContainer>
            {children}
        </SceneAndDelayItemWrapperContainer>
    );
}

export default SceneAndDelayItemWrapper;
