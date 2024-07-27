import React, { createContext, useContext, useState, ReactNode } from "react";

type Theme = "light" | "dark" | "custom";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  customTheme?: Record<string, string>; // 自定义主题
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [customTheme, setCustomTheme] = useState<Record<string, string>>({});

  const applyTheme = (theme: Theme, customTheme?: Record<string, string>) => {
    setTheme(theme);
    if (customTheme) {
      setCustomTheme(customTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: applyTheme, customTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
