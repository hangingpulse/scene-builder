import styled from "styled-components";
import SceneItemBase from "../SceneItem.style";

const DialogueContainer = styled(SceneItemBase)`
    &:hover {
        transform: scale(1.05);
        transition: transform 0.1s;
        cursor: pointer;
    }
`;

export { DialogueContainer };
