import React from "react";
import styled from "styled-components";
import SceneItemBase from "../SceneItem.style";

const StyledActiontext = styled(SceneItemBase)`
    padding: 0.3em;
    border: 2px solid black;
    background-color: ${(props) => props.theme.colors.primaryLight};
    font-size: ${(props) => props.theme.fonts.fontSizes.base};
    font-family: ${(props) => props.theme.fonts.sansSerif};
`;

function Actiontext({ actiontext, animation }) {
    return (
        <StyledActiontext animation={animation}>
            {actiontext.text}
        </StyledActiontext>
    );
}

export default Actiontext;
