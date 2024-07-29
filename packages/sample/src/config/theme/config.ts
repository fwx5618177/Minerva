import { Theme, ThemeConfig } from "./types";

export const themes: ThemeConfig = {
  light: {
    "--primary-color": "#667eea",
    "--secondary-color": "#42e695",
    "--success-color": "#28a745",
    "--danger-color": "#dc3545",
    "--warning-color": "#ffc107",
    "--info-color": "#17a2b8",
    "--light-color": "#1a202c",
    "--dark-color": "#f8f9fa",
    "--background-color": "#ffffff",
    "--foreground-color": "#1a202c",
    "--border-color": "#2d3748",
    "--text-gray": "#a0aec0",
    "--primary-gradient-start": "#6a11cb",
    "--primary-gradient-end": "#2575fc",
    "--secondary-gradient-start": "#42e695",
    "--secondary-gradient-end": "#3bb2b8",
    "--highlight-color": "#ffeb3b",
    "--shadow-color": "rgba(0, 0, 0, 0.2)",
    "--muted-color": "#6c757d",
    "--link-color": "#007bff",
    "--link-hover-color": "#0056b3",
    "--link-active-color": "#0056b3",
    "--link-visited-color": "#4a90e2",
    "--btn-bg-color-hover": "darken(#667eea, 10%)",
    "--btn-bg-color-active": "darken(#667eea, 20%)",
    "--avatar-bg-color-info": "#17a2b8",
    "--avatar-bg-color-success": "#28a745",
    "--avatar-bg-color-danger": "#dc3545",
    "--avatar-bg-color-warning": "#ffc107",
    "--card-bg-color": "#ffffff",
    "--card-foreground-color": "#1a202c",
    "--card-bg-color-content": "lighten(#ffffff, 10%)",
    "--card-border-color": "#2d3748",
    "--popover-bg-color": "#ffffff",
    "--popover-foreground-color": "#1a202c",
    "--radius": "0.25rem",
  },
  dark: {
    "--primary-color": "#4a90e2",
    "--secondary-color": "#50e3c2",
    "--success-color": "#7ed321",
    "--danger-color": "#d0021b",
    "--warning-color": "#f5a623",
    "--info-color": "#4a90e2",
    "--light-color": "#f7f7f7",
    "--dark-color": "#4a4a4a",
    "--background-color": "#333333",
    "--foreground-color": "#e1e1e1",
    "--border-color": "#e1e1e1",
    "--text-gray": "#9b9b9b",
    "--primary-gradient-start": "#6a11cb",
    "--primary-gradient-end": "#2575fc",
    "--secondary-gradient-start": "#42e695",
    "--secondary-gradient-end": "#3bb2b8",
    "--highlight-color": "#ffeb3b",
    "--shadow-color": "rgba(0, 0, 0, 0.2)",
    "--muted-color": "#6c757d",
    "--link-color": "#007bff",
    "--link-hover-color": "#0056b3",
    "--link-active-color": "#0056b3",
    "--link-visited-color": "#4a90e2",
    "--btn-bg-color-hover": "darken(#4a90e2, 10%)",
    "--btn-bg-color-active": "darken(#4a90e2, 20%)",
    "--avatar-bg-color-info": "#4a90e2",
    "--avatar-bg-color-success": "#7ed321",
    "--avatar-bg-color-danger": "#d0021b",
    "--avatar-bg-color-warning": "#f5a623",
    "--card-bg-color": "#333333",
    "--card-foreground-color": "#e1e1e1",
    "--card-bg-color-content": "lighten(#333333, 10%)",
    "--card-border-color": "#e1e1e1",
    "--popover-bg-color": "#333333",
    "--popover-foreground-color": "#e1e1e1",
    "--radius": "0.25rem",
  },
};

export function applyTheme(themeName?: Theme) {
  if (!themeName) {
    // 自动切换颜色
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        Object.entries(themes.dark).forEach(([key, value]) => {
          document.documentElement.style.setProperty(key, value);
        });
      } else {
        Object.entries(themes.light).forEach(([key, value]) => {
          document.documentElement.style.setProperty(key, value);
        });
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    // 初始化时的主题设置
    if (mediaQuery.matches) {
      Object.entries(themes.dark).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    } else {
      Object.entries(themes.light).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    }
    return;
  }

  const theme = themes[themeName];
  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
}
