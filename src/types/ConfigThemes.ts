type ConfigTheme = {
  extend?: "light" | "dark"; 
  layout?: LayoutTheme; 
  colors?: ThemeColors; 
};

type ConfigThemes = Record<string, ConfigTheme>;
