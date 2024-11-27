type BaseThemeUnit = {
  small?: string;
  medium?: string;
  large?: string;
};

type FontThemeUnit = {
  small?: string;
  medium?: string;
  large?: string;
  tiny?: string;
};

interface LayoutTheme {
  /**
   * The default font size applied across the components.
   */
  fontSize?: FontThemeUnit;
  /**
   * The default line height applied across the components.
   */
  lineHeight?: FontThemeUnit;
  /**
   * The default radius applied across the components.
   * we recommend to use `rem` units.
   */
  radius?: BaseThemeUnit;
  /**
   * A number between 0 and 1 that is applied as opacity-[value] when
   * the component is disabled.
   */
  disabledOpacity?: string | number;
  /**
   * The default height applied to the divider component.
   * we recommend to use `px` units.
   */
  dividerWeight?: string;
  /**
   * The border width applied across the components.
   */
  borderWidth?: BaseThemeUnit;
  /**
   * The box shadow applied across the components.
   */
  boxShadow?: BaseThemeUnit;
}
