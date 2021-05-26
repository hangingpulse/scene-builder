import React from "react";
import SpeechbubbleEditor from "./SpeechbubbleEditor";
import CharacterEditor from "./CharacterEditor";

function SceneEditor() {
    return (
        <div className="SceneEditor">
            <CharacterEditor />
            <SpeechbubbleEditor />
        </div>
    );
}

export default SceneEditor;

/* 
PURPOSE:
The user can directly edit and fine tune the animation part of the scene here


NEXT STEPS:
-Build a styled Container for the Scene Editor
Build in a Background Editor?


*/
