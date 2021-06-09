import React from "react";
import Title from "./Header.style";

function Header() {
    return (
        <div>
            <Title>Scene Builder</Title>
        </div>
    );
}

export default Header;

// TODO:
// Header could also be a sidebar. Navigation only necessary if there is a backend and
// users can save scenes.
// Not important for the beginning.
