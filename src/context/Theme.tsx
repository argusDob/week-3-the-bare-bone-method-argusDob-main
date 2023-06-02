import {
  useContext,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";

export const theme_colors = {
  light: {
    name: "light",
    foreground: "#2d3436",
    background: "#dfe6e9",
    background_secondary: "#ffffff",
  },
  dark: {
    name: "dark",
    foreground: "#2d3436",
    background: "#2d3436",
    background_secondary: "#636e72",
  },
};

export interface AppThemeContextArgs {
  theme: Theme;
  toggleTheme: () => void;
}

export const AppThemeContext = createContext<AppThemeContextArgs>({
  theme: theme_colors.light,
  toggleTheme: () => {},
});

export type Theme = {
  name: string;
  foreground: string;
  background: string;
  background_secondary: string;
};
