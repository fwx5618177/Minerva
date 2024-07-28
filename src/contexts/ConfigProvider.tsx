import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

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

const useThemeHook = (
  initialTheme: Theme,
  initialCustomTheme?: CustomThemeProps,
) => {
  const [theme, setThemeState] = useState<Theme>(initialTheme);
  const [customTheme, setCustomThemeState] = useState<CustomThemeProps | null>(
    initialCustomTheme || null,
  );

  const setTheme = (newTheme: Theme, customTheme?: CustomThemeProps) => {
    setThemeState(newTheme);
    if (customTheme) {
      setCustomThemeState(customTheme);
      applyCustomTheme(customTheme);
    } else {
      setCustomThemeState(null);
      applyCustomTheme();
    }
  };

  useEffect(() => {
    if (theme === "custom" && customTheme) {
      applyCustomTheme(customTheme);
    } else {
      applyCustomTheme();
    }
  }, [theme, customTheme]);

  return { theme, setTheme, customTheme };
};

export const ThemeProvider: React.FC<{
  children: ReactNode;
  initialTheme?: Theme;
  customTheme?: CustomThemeProps;
}> = ({ children, initialTheme = "light", customTheme = null }) => {
  const themeContextValue = useThemeHook(initialTheme, customTheme);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
