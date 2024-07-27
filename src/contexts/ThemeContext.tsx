import React, { createContext, useContext, useState, ReactNode } from "react";

type customTheme = "github-dark";

type Theme = "light" | "dark" | customTheme | "custom";

interface CustomThemeProps {
  "primary-color": string;
  "secondary-color": string;
  "success-color": string;
  "danger-color": string;
  "warning-color": string;
  "info-color": string;
  "light-color": string;
  "dark-color": string;
  "background-color": string;
  "foreground-color": string;
  "border-color": string;
  "text-gray": string;
  "primary-gradient-start": string;
  "primary-gradient-end": string;
  "secondary-gradient-start": string;
  "secondary-gradient-end": string;
}

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme, customTheme?: CustomThemeProps) => void;
  customTheme?: CustomThemeProps | null;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const applyCustomTheme = (customTheme?: CustomThemeProps | null) => {
  const root = document.documentElement;

  if (customTheme) {
    Object.keys(customTheme).forEach((key) => {
      root.style.setProperty(
        `--${key}`,
        customTheme[key as keyof CustomThemeProps],
      );
    });
  } else {
    root.style.cssText = "";
  }
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [customTheme, setCustomTheme] = useState<CustomThemeProps | null>(null);

  const applyTheme = (theme: Theme, customTheme?: CustomThemeProps) => {
    setTheme(theme);
    if (customTheme) {
      setCustomTheme(customTheme);
      applyCustomTheme(customTheme);
    } else {
      setCustomTheme(null);
      applyCustomTheme();
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: applyTheme, customTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
