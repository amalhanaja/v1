import * as React from 'react';

interface ThemeProps {
  children: any;
}
const Theme: React.FC<ThemeProps> = ({ children }) => {
  const mql = window.matchMedia('(prefers-color-scheme: dark');
  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') || 'light',
  );
  const toggleTheme = (t: string): void => {
    localStorage.setItem('theme', 'theme');
    setTheme(theme);
  };
  return <div />;
};
