import styled from "styled-components";

const Title = styled.h1`
    text-align: center;
    font-size: 20px;
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.sansSerif};
`;

export default Title;

// export default function PageTitle({ children }) {
//     return <Title>{children}</Title>;
// }
