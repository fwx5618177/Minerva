import { CustomBilingualTheme, Theme } from "@contexts/types";

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

  console.log("theme:", theme);

  if (typeof theme === "string") {
    switch (theme) {
      case "light":
        await import("@styles/themes/light.module.scss");
        break;
      case "dark":
        await import("@styles/themes/dark.module.scss");
        break;
      case "github-dark":
        await import("@styles/themes/github-dark.module.scss");
        break;
      default:
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
