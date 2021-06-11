import React, { useContext } from "react";
import { PreviewContext } from "../../context/PreviewContext";
import Toggle from "../modularcomponents/Toggle";
import { TextArea } from "../modularcomponents/Inputs";
import {
    CreatorContainer,
    SceneDescriptionInputContainer,
    TitleContainer,
    DescriptionContainer,
    PublicContainer,
} from "./AnimationPreview.style";

function SceneDescriptionInput() {
    const { previewState, editMetaData } = useContext(PreviewContext);

    return (
        <SceneDescriptionInputContainer>
            <TitleContainer>
                <TextArea
                    maxChar={50}
                    value={previewState.title}
                    onChange={(e) => editMetaData("TITLE", e.target.value)}
                />
            </TitleContainer>
            <CreatorContainer>
                <p className="Creator">by</p>
                <TextArea
                    maxChar={20}
                    value={previewState.meta.creator}
                    onChange={(e) => editMetaData("CREATOR", e.target.value)}
                />
            </CreatorContainer>
            <DescriptionContainer>
                <TextArea
                    maxChar={200}
                    value={previewState.meta.description}
                    onChange={(e) =>
                        editMetaData("DESCRIPTION", e.target.value)
                    }
                />
            </DescriptionContainer>
            <PublicContainer>
                <Toggle
                    labelOff="Only Link"
                    labelOn="Post publicly"
                    value={previewState.meta.public}
                    onClick={() => editMetaData("PUBLIC")}
                >
                    Public
                </Toggle>
            </PublicContainer>
        </SceneDescriptionInputContainer>
    );
}

export default SceneDescriptionInput;
