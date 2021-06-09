import React from "react";
import { Title, HeaderContainer, NavBar, StyledLink } from "./Header.style";

function Header() {
    return (
        <HeaderContainer>
            <Title>SCEENIES</Title>
            <NavBar>
                <StyledLink to="/">EXPLORE</StyledLink>
                <StyledLink to="/create">CREATE</StyledLink>
            </NavBar>
        </HeaderContainer>
    );
}

export default Header;

// TODO:
// Header could also be a sidebar. Navigation only necessary if there is a backend and
// users can save scenes.
// Not important for the beginning.
