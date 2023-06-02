import styled from "styled-components";
import ToogleButton from "./ToogleButton";
import { useThemeContext } from "../context/Theme";


export default function Header() {

  const {theme, toggleTheme} = useThemeContext()

  function handleToogleButton() {
    toggleTheme(theme)
  }

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <h2>The Movie App</h2>
        <ToogleButton onClick={handleToogleButton} />
      </HeaderWrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #2d3436;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
`;
