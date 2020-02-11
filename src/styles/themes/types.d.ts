export interface Colors {
  primary: string;
  text: string;
  secondary: string;
  surface: string;
  surfaceLight: string;
  surfaceDark: string;
}

export interface FontWeights {
  normal: number;
  bold: number;
}

export interface FonstSizes {
  base: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export type ThemeType = 'light';
export interface Theme {
  themeType: ThemeType;
  spaces: [string, string, string, string, string, string];
  colors: Colors;
  fontWeights: FontWeights;
  fontSizes: FonstSizes;
  toggle?: (themeType: ThemeType) => void;
}
