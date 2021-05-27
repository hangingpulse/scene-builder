import React, { useContext } from "react";
import styled from "styled-components";
import { SceneContext } from "../../context/SceneContextProvider";
import useSpeechbubbleAnimation from "../../hooks/useSpeechbubbleAnimation";
import Character from "../CharacterComponents/Character";

const Characters = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Dialogue = styled.div`
    height: 10rem;
`;

function Animation() {
    const { sceneState } = useContext(SceneContext);

    const buildSpeechbubbles = useSpeechbubbleAnimation();

    return (
        <div className="Animation">
            <Dialogue>{buildSpeechbubbles(sceneState.dialogue)}</Dialogue>
            <Characters>
                {sceneState.characters.map((character, index) => (
                    <Character key={index} character={character} />
                ))}
            </Characters>
        </div>
    );
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
