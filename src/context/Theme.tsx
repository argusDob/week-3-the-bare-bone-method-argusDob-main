import {
  useContext,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext<any>({});

const theme_colors = {
   light: {
    foreground: "#2d3436",
    background: "#dfe6e9",
    background_secondary: "#ffffff",
  },
  dark: {
    foreground: "#2d3436",
    background: "#2d3436",
    background_secondary: "#636e72",
  },
};

const ThemeProvider = ({
  children,
  themeData,
}: {
  children: ReactNode;
  themeData: any;
}) => {
  const [theme, setTheme] = useState<any>(theme_colors);

  useEffect(() => {
    switchTheme();
  }, [themeData]);

  const switchTheme = () => {
    setTheme(themeData ? theme_colors.dark : theme_colors.light);
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  const theme = useContext(ThemeContext);
  return theme;
};

export { useThemeContext, ThemeProvider };
