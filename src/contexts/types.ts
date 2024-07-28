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
}

export type SupportTheme = "github-dark";

export type DefaultTheme = "light" | "dark";

export type CustomBilingualTheme = {
  [key in DefaultTheme]: ThemeProps;
};

export type ThemeMap = {
  [key in keyof ThemeProps]: ThemeProps[key];
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
