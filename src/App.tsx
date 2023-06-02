import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./views/MainPage";
import MoviePage from "./views/MoviePage";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { ThemeProvider, useThemeContext } from "./context/Theme";

interface Theme {
  foreground: string;
  background: string;
  background_secondary: string;
}

export default function App() {
  const [headerToogleButtonValue, setHeaderToogleButtonValue] =
    useState<Theme>(theme_colors.light);

  const theme = useThemeContext({
    theme: headerToogleButtonValue,
    toggleThem: setHeaderToogleButtonValue
  });

  function handleToogle(theme: Theme, toogleButtonStatus: boolean) {
    setHeaderToogleButtonValue(toogleButtonStatus);
    console.log(theme);
  }

  return (
    <ThemeProvider.Provider themeData={headerToogleButtonValue}>
      <AppContainer>
        <Header onToogleChange={handleToogle}></Header>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/movie/:id" element={<MoviePage />}></Route>
          </Routes>
        </Router>
        <Footer></Footer>
      </AppContainer>
    </ThemeProvider.Provider>
  );
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
`;
