import React, { useContext } from "react";
import { SceneContext } from "../../context/SceneContextProvider";
import SpeechbubbleEditor from "./SpeechbubbleEditor";

function SceneEditor() {
    const { sceneState } = useContext(SceneContext);

    return (
        <div className="SceneEditor">
            <div className="Characters"></div>
            {sceneState.dialogue.map((dialogue, index) => (
                <SpeechbubbleEditor
                    key={index}
                    indexBubble={index}
                    dialogue={dialogue}
                    character={sceneState.characters.find(
                        (character) => character.name === dialogue.character
                    )}
                />
            ))}
        </div>
    );
}

export default SceneEditor;

/* 
PURPOSE:
The user can directly edit and fine tune the animation part of the scene here


NEXT STEPS:
Display the Speechbubbles as a list and build in an editmode to change text, duration and delay.
Build in a character selection menu

SMALLER COMPONENTS:
- Characters at the top (how many?)
-AddCharacterButton
- DialogueList 


TO CONSIDER:
How many characters can be in one scene (prob not more than 4)

*/
