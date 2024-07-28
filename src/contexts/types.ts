export interface ThemeProps {
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
  "highlight-color": string;
  "shadow-color": string;
  "muted-color": string;
  "link-color": string;
  "link-hover-color": string;
  "link-active-color": string;
  "link-visited-color": string;
}

export interface ComponentThemeProps {
  "btn-bg-color-success": string;
  "btn-bg-color-danger": string;
  "btn-bg-color-warning": string;
  "btn-bg-color-info": string;
  "btn-bg-color-hover": string;
  "btn-bg-color-active": string;

  "avatar-bg-color-info": string;
  "avatar-bg-color-success": string;
  "avatar-bg-color-danger": string;
  "avatar-bg-color-warning": string;

  "card-bg-color": string;
  "card-bg-color-content": string;
  "card-border-color": string;
}

export type ComponentTheme = Partial<ComponentThemeProps> & ThemeProps;

export type SupportTheme = "github-dark";

export type DefaultTheme = "light" | "dark";

export type CustomBilingualTheme = {
  [key in DefaultTheme]: ComponentTheme;
};

export type ThemeMap = {
  [key in keyof ComponentTheme]: ComponentTheme[key];
};

export type ConfigProviderThemeProps =
  | "auto"
  | CustomBilingualTheme
  | SupportTheme
  | ThemeMap
  | DefaultTheme;

export type Theme = ConfigProviderThemeProps;

export type Locale = {
  language?: string;
};

export interface ConfigContextProps {
  theme?: ConfigProviderThemeProps;
  locale?: Locale;
}

export interface ConfigContextProviderProps extends ConfigContextProps {
  children: React.ReactNode;
}
