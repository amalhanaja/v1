import { DefaultTheme } from 'styled-components';

const LightTheme: DefaultTheme = {
  fontSizes: {
    base: '16px',
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '32px',
  },
  fontWeights: {
    bold: 700,
    normal: 400,
  },
  spaces: ['4px', '8px', '16px', '32px', '64px', '128px'],
  colors: {
    text: '#333333',
    primary: '#d63447',
    surface: '#f2f3f7',
    surfaceDark: '#dadbde',
    surfaceLight: '#fff',
    secondary: '#f57B51',
  },
};

export default LightTheme;
