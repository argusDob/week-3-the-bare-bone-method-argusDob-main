import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./views/MainPage";
import MoviePage from "./views/MoviePage";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { AppThemeContext, Theme, theme_colors } from "./context/Theme";

export default function App() {
  // here we keep the state
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme_colors.light);

  return (
    <AppThemeContext.Provider // we use the provider to broadcast this state
      value={{
        theme: currentTheme,
        toggleTheme: () => {
          if (currentTheme.name === "light") {
            setCurrentTheme(theme_colors.dark);
          } else {
            setCurrentTheme(theme_colors.light);
          }
          console.log("theme updated");
        },
      }}
    >
      <AppContainer>
        <Header></Header>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/movie/:id" element={<MoviePage />}></Route>
          </Routes>
        </Router>
        <Footer></Footer>
      </AppContainer>
    </AppThemeContext.Provider>
  );
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
`;
