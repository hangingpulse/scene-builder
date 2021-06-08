import React, { useContext } from "react";
import { PreviewContext } from "../../../context/PreviewContext";
import Button from "../../modularcomponents/Buttons";
import { TextArea } from "../../modularcomponents/Inputs";
import {
    CreatorContainer,
    SceneDescriptionInputContainer,
    TitleContainer,
    ButtonContainer,
    DescriptionContainer,
} from "./AnimationPreview.style";

function SceneDescriptionInput() {
    const { previewState, editMetaData } = useContext(PreviewContext);
    return (
        <SceneDescriptionInputContainer>
            <TitleContainer>
                <TextArea
                    value={previewState.title}
                    onChange={(e) => editMetaData("TITLE", e.target.value)}
                />
            </TitleContainer>
            <CreatorContainer>
                <TextArea
                    value={previewState.meta.creator}
                    onChange={(e) => editMetaData("CREATOR", e.target.value)}
                />
            </CreatorContainer>
            <DescriptionContainer>
                <TextArea
                    value={previewState.meta.description}
                    onChange={(e) =>
                        editMetaData("DESCRIPTION", e.target.value)
                    }
                />
            </DescriptionContainer>
            <ButtonContainer>
                <Button>Share with everyone</Button>
                <Button>Get a private Link</Button>
                <Button>Return to Edit Mode</Button>
            </ButtonContainer>
        </SceneDescriptionInputContainer>
    );
}

export default SceneDescriptionInput;
