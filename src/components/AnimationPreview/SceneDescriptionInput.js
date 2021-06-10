import React, { useContext } from "react";
import { PreviewContext } from "../../context/PreviewContext";
import Toggle from "../modularcomponents/Toggle";
import { TextArea } from "../modularcomponents/Inputs";
import {
    CreatorContainer,
    SceneDescriptionInputContainer,
    TitleContainer,
    ButtonContainer,
    DescriptionContainer,
} from "./AnimationPreview.style";

function SceneDescriptionInput() {
    const { previewState, editMetaData, sendScene, sceneId, sceneShared } =
        useContext(PreviewContext);

    const handleShare = () => {
        sendScene(previewState);
    };

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
                <Toggle>Public</Toggle>
            </DescriptionContainer>
        </SceneDescriptionInputContainer>
    );
}

export default SceneDescriptionInput;
