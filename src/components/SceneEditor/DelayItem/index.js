import React, { useState, useContext } from "react";
import { SceneEditorContext } from "../../../context/SceneEditorContext";
import { DelayItemContainer, EditPause } from "./DelayItem.style";
import { NumberInput } from "../../modularcomponents/Inputs";
import { AddButton } from "../../modularcomponents/Buttons";

function DelayItem({ editorIndex, sceneItemAfter, sceneItemBefore }) {
    const { addSceneItem } = useContext(SceneEditorContext);
    const [hover, setHover] = useState(false);

    const canHover = window.matchMedia("(hover: hover)").matches;

    return (
        <DelayItemContainer
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={(e) =>
                e.target === e.currentTarget &&
                !canHover &&
                setHover((prevState) => !prevState)
            }
            whileHover={{
                opacity: 1,
                height: "5rem",
                transition: { duration: 0.2 },
            }}
            height={hover && !canHover ? "5rem" : "2rem"}
            animate
        >
            <EditPause>
                {hover ? (
                    <NumberInput
                        value={sceneItemAfter ? sceneItemAfter.delay : 0}
                        initial={{ visibility: "hidden" }}
                        animate={{
                            visibility: "visible",
                        }}
                        transition={{ delay: 0.1 }}
                    >
                        Pause
                    </NumberInput>
                ) : (
                    <div className="PauseInfo">
                        {sceneItemAfter ? sceneItemAfter.delay : 0}s Pause
                    </div>
                )}
            </EditPause>
            <AddButton
                size={hover ? "3rem" : "2rem"}
                onClick={() => addSceneItem(editorIndex)}
            />
        </DelayItemContainer>
    );
}

export default DelayItem;
