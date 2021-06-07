import React from "react";
import styled from "styled-components";
import SceneItemBase from "../SceneItem.style";

const StyledParenthetical = styled(SceneItemBase)``;

function Parenthetical({ parenthetical, character }) {
    return (
        <StyledParenthetical character={character}>
            {parenthetical.text}
        </StyledParenthetical>
    );
}

export default Parenthetical;
