import {
  CustomBilingualTheme,
  DefaultTheme,
  SupportTheme,
  Theme,
} from "@contexts/types";

/**
 * Generate CSS variables from theme object
 * @param themeStyles {CSSStyleDeclaration} - Style element
 * @param theme {Theme} - Theme object
 * @returns
 */
export const generateCSSVariables = (
  themeStyles: CSSStyleDeclaration,
  theme: Theme,
) => {
  return Object.entries(theme).forEach(([key, value]) => {
    themeStyles.setProperty(`--${key}`, value);
  });
};

/**
 * Apply theme styles to the document
 * @param theme {Theme} - Theme object
 * @returns
 */
export const applyThemeStyles = async (theme: Theme) => {
  const themeStyles = document.documentElement.style;
  const supportedThemes = ["light", "dark", "github-dark"];

  if (typeof theme === "string") {
    if (supportedThemes.includes(theme)) {
      const importedTheme = await import("@styles/themes");

      generateCSSVariables(
        themeStyles,
        importedTheme[theme as keyof SupportTheme & DefaultTheme],
      );
    } else {
      throw new Error(
        "Unsupported theme, please check your theme configuration",
      );
    }
  } else if (
    (theme as CustomBilingualTheme).light &&
    (theme as CustomBilingualTheme).dark
  ) {
    const { light, dark } = theme as CustomBilingualTheme;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      generateCSSVariables(themeStyles, dark);
    } else {
      generateCSSVariables(themeStyles, light);
    }
  } else {
    generateCSSVariables(themeStyles, theme);
  }
};
