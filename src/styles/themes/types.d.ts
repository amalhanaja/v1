export interface Colors {
  primary: string;
  text: string;
  secondary: string;
  surface: string;
}

export interface FontWeights {
  normal: number;
  bold: number;
}

export interface FonstSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface Theme {
  spaces: [string, string, string, string, string, string];
  colors: Colors;
  fontWeights: FontWeights;
  fontSizes: FonstSizes;
}
