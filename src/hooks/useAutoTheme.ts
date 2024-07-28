import { useEffect, useState } from "react";
import { applyThemeStyles } from "@utils/applyThemeStyles";
import { Theme } from "@contexts/types";

const useAutoTheme = (initialTheme: Theme) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const themeManager = async (theme: Theme) => {
    if (theme === "auto") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
        const match = e.matches ? "dark" : "light";
        setTheme(match);
      };
      mediaQuery.addEventListener("change", handleChange);
      setTheme(mediaQuery.matches ? "dark" : "light");

      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      await applyThemeStyles(theme);
    }
  };

  useEffect(() => {
    themeManager(theme);
  }, [theme]);

  return [theme, setTheme] as const;
};

export default useAutoTheme;
