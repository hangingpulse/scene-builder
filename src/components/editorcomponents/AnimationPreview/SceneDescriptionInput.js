import React, { useContext, useState } from "react";
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
            </DescriptionContainer>
            <ButtonContainer>
                {sceneShared ? (
                    <span>
                        {sceneId
                            ? `http://sceenies.herokuapp.com/${sceneId}`
                            : "Share to get your Sceeny-Link"}
                    </span>
                ) : (
                    <div>
                        <Button onClick={handleShare}>Share</Button>
                        <Button>Return to Edit Mode</Button>
                    </div>
                )}
            </ButtonContainer>
        </SceneDescriptionInputContainer>
    );
}

export default SceneDescriptionInput;
