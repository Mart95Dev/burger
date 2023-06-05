import styled from "styled-components";
import { theme } from "../../theme/index";

export default function Logo({ className, onClick }) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <h1>Ticot</h1>
      <img src="/images/logo-burger-orange.png" alt="Logo crazee" />
      <h1>burger</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    /* display: inline;
     text-align: center; */
    font-size: ${theme.fonts.size.P4};
    line-height: 1em;
    font-weight: ${theme.fonts.weights.bold};
    text-transform: UPPERCASE;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.primary};
  }

  img {
    object-fit: contain;
    object-position: center;
    height: ${theme.fonts.size.P6};
    width: 80px; //for safari and firefox
    margin: 0 5px;
  }
`;
