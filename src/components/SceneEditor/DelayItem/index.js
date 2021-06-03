import React from "react";
import styled from "styled-components";

const StyledDelayItem = styled.div`
    width: 90%;
    margin: 0.3em auto;
    padding: 0.2em;
    border: 1px dotted black;
    border-radius: 2em;
    background-color: ${(props) => props.theme.colors.primaryLight};
    opacity: 0.5;

    font-size: ${({ theme }) => theme.fonts.fontSizes.blockSmall};
    text-align: center;

    &:hover {
        width: 80%;
    }
`;

function DelayItem() {
    return <StyledDelayItem></StyledDelayItem>;
}

export default DelayItem;
