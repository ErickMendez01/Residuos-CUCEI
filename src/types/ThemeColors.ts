type ColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  foreground: string; // contrast color
  DEFAULT: string;
};

type BaseColors = {
  background: ColorScale; // the page background color
  foreground: ColorScale; // the page text color
  divider: ColorScale; // used for divider and single line border
  overlay: ColorScale; // used for modal, popover, etc.
  focus: ColorScale; // used for focus state outline
  content1: ColorScale; // used for card, modal, popover, etc.
  content2: ColorScale;
  content3: ColorScale;
  content4: ColorScale;
};

// brand colors
type ThemeColors = BaseColors & {
  default: ColorScale;
  primary: ColorScale;
  secondary: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  danger: ColorScale;
};
