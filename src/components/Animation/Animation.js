import React, { useContext } from "react";
import { SceneContext } from "../../context/SceneContextProvider";
import useSpeechbubbleAnimation from "../../hooks/useSpeechbubbleAnimation";

function Animation() {
    const { sceneState } = useContext(SceneContext);

    const buildSpeechbubbles = useSpeechbubbleAnimation();

    return <div className="Animation">{buildSpeechbubbles(sceneState)}</div>;
}

export default Animation;

/*
PURPOSE:
The User can watch the Animation here

NEXT STEPS:
- Migrate the animation from the 9rooms project here.

COMPONENTS:
- CHaracters (toggle on/off)
-Speechbubbles (with Animation)

NICE TO HAVE:
Pause/Play Button

*/
