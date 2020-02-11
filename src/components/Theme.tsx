import * as React from 'react';
import { ThemeContext, ThemeProvider } from 'styled-components';
import LightTheme from '../styles/themes/LightTheme';
import GlobalStyle from '../styles/GlobalStyle';
import DarkTheme from '../styles/themes/DarkTheme';

interface ThemeProps {
  children: React.ReactNode;
}
const Theme: React.FC<ThemeProps> = ({ children }) => {
  const mql = window.matchMedia('(prefers-color-scheme: dark');
  const [themeName, setThemeName] = React.useState(
    localStorage.getItem('theme') || 'light',
  );
  const toggleTheme = (name: string): void => {
    localStorage.setItem('theme', name);
    setThemeName(name);
  };

  const theme = themeName === DarkTheme.themeType ? DarkTheme : LightTheme;
  return (
    <ThemeContext.Provider value={{ ...theme, toggle: toggleTheme }}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          {children}
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Theme;
