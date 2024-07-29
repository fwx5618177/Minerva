export type Theme = "light" | "dark";

export type ThemeConfigKey = keyof ThemeProps;

export type ThemeConfigValue = ThemeProps[ThemeConfigKey];

export type ThemeConfig = {
  [key in Theme]: ThemeProps;
};

export interface ThemeProps {
  "--primary-color": string;
  "--secondary-color": string;
  "--success-color": string;
  "--danger-color": string;
  "--warning-color": string;
  "--info-color": string;
  "--light-color": string;
  "--dark-color": string;
  "--background-color": string;
  "--foreground-color": string;
  "--border-color": string;
  "--text-gray": string;
  "--primary-gradient-start": string;
  "--primary-gradient-end": string;
  "--secondary-gradient-start": string;
  "--secondary-gradient-end": string;
  "--highlight-color": string;
  "--shadow-color": string;
  "--muted-color": string;
  "--link-color": string;
  "--link-hover-color": string;
  "--link-active-color": string;
  "--link-visited-color": string;
  "--btn-bg-color-hover": string;
  "--btn-bg-color-active": string;
  "--avatar-bg-color-info": string;
  "--avatar-bg-color-success": string;
  "--avatar-bg-color-danger": string;
  "--avatar-bg-color-warning": string;
  "--card-bg-color": string;
  "--card-foreground-color": string;
  "--card-bg-color-content": string;
  "--card-border-color": string;
  "--popover-bg-color": string;
  "--popover-foreground-color": string;
  "--radius": string;
}
