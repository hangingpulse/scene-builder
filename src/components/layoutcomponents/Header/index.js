import React from "react";
import { HeaderContainer, NavBar, StyledLink, Logo } from "./Header.style";

function Header() {
    return (
        <HeaderContainer>
            <Logo>SCEENIES</Logo>
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
