import styled, { ThemeContext } from "styled-components";
import ToogleButton from "./ToogleButton";
import { useContext } from "react";
import { AppThemeContext, Theme } from "../context/Theme";
// import { toggleTheme } from "../context/Theme";

export default function Header() {
  const { toggleTheme, theme } = useContext(AppThemeContext);

  return (
    <HeaderContainer theme={theme}>
      <HeaderWrapper>
        <h2>The Movie App</h2>
        <ToogleButton onToggle={toggleTheme} />
      </HeaderWrapper>
    </HeaderContainer>
  );
}

interface HeaderContainerProps {
  theme: Theme;
}

const HeaderContainer = styled.div<HeaderContainerProps>`
  width: 100%;
  background-color: ${(props) => props.theme.foreground};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
`;
