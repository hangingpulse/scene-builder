import React, { useContext } from "react";
import { PreviewContext } from "../../context/PreviewContext";
import Animation from "../Animation";
import {
    AnimationPreviewContainer,
    ButtonContainer,
} from "./AnimationPreview.style.js";
import Button from "../modularcomponents/Buttons";
import Modal from "../modularcomponents/Modal";
import SceneDescriptionInput from "./SceneDescriptionInput";
import InfoBox, {
    InfoBoxHeader,
    InfoBoxText,
} from "../modularcomponents/InfoBox";
import StyledLink from "../modularcomponents/Link";

function AnimationPreview() {
    const {
        previewState,
        sceneShared,
        setSceneShared,
        sceneId,
        handleShare,
        togglePreview,
    } = useContext(PreviewContext);
    console.log(previewState);
    return (
        <AnimationPreviewContainer>
            {sceneShared && (
                <Modal>
                    <InfoBox>
                        <InfoBoxHeader>Share your Sceenie</InfoBoxHeader>
                        <InfoBoxText large>
                            You have successfully created your Sceenie. Just
                            copy the link down below, save it and share it with
                            the world.
                        </InfoBoxText>
                        <InfoBoxText highlighted>
                            {`http://www.sceenies.io/${sceneId}`}
                        </InfoBoxText>
                        <div>
                            <Button
                                onClick={() => {
                                    togglePreview(false);
                                    setSceneShared(false);
                                }}
                            >
                                <StyledLink to="/create">
                                    Create a new Sceenie
                                </StyledLink>
                            </Button>
                            <Button onClick={() => togglePreview(false)}>
                                <StyledLink to="/">
                                    Explore other Sceenies
                                </StyledLink>
                            </Button>
                        </div>
                    </InfoBox>
                </Modal>
            )}
            <Animation sceneObject={previewState} />
            <SceneDescriptionInput />
            <ButtonContainer>
                <div>
                    <Button onClick={handleShare}>Share</Button>
                    <Button onClick={() => togglePreview(false)}>
                        Return to Edit Mode
                    </Button>
                </div>
            </ButtonContainer>
        </AnimationPreviewContainer>
    );
}

export default AnimationPreview;
