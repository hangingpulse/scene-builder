import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 3rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
`;

const Title = styled.h1`
    text-align: center;
    font-size: 20px;
    color: ${(props) => props.theme.colors.primaryLight};
    font-family: ${(props) => props.theme.fonts.sansSerif};
`;

const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: ${({ theme }) => theme.fonts.fontSizes.header2Small};
    margin: 0 0.8rem;

    &:visited {
        color: ${({ theme }) => theme.colors.primaryLight};
    }
`;

export { Title, HeaderContainer, NavBar, StyledLink };
