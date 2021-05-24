import React, { useState } from "react";

import Character from "../CharacterComponents/Character";
import EditCharacter from "../CharacterComponents/EditCharacter";

function CharacterEditorItem({ character }) {
    const [edit, toggleEdit] = useState(false);

    const handleClick = () => {
        toggleEdit(true);
        console.log(edit);
    };

    return (
        <div className="EditOrViewCharacter" onClick={handleClick}>
            {edit ? (
                <EditCharacter character={character} toggleEdit={toggleEdit} />
            ) : (
                <Character character={character} />
            )}
        </div>
    );
}

export default CharacterEditorItem;
