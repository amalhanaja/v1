import * as React from 'react';
import { ThemeContext, ThemeProvider } from 'styled-components';
import LightTheme from '../styles/themes/LightTheme';
import GlobalStyle from '../styles/GlobalStyle';
import DarkTheme from '../styles/themes/DarkTheme';
import { ThemeType } from '../styles/themes/types';

interface ThemeProps {
  children: React.ReactNode;
}
const Theme: React.FC<ThemeProps> = ({ children }) => {
  const mql = window.matchMedia('(prefers-color-scheme: dark');
  const [themeName, setThemeName] = React.useState(
    localStorage.getItem('theme') || mql.matches
      ? DarkTheme.themeType
      : LightTheme.themeType,
  );
  const toggleTheme = (themeType: ThemeType): void => {
    localStorage.setItem('theme', themeType);
    setThemeName(themeType);
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
