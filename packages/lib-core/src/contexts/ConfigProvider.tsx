import React, { createContext, useContext } from "react";
import { ConfigContextProps, ConfigContextProviderProps } from "./types";
import useAutoTheme from "@hooks/useAutoTheme";
import useLocale from "@hooks/useLocale";

export const ConfigContext = createContext<ConfigContextProps | undefined>(
  undefined,
);

export const useConfig = (): ConfigContextProps => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }
  return context;
};

export const ConfigProvider: React.FC<ConfigContextProviderProps> = ({
  theme = "auto",
  locale = {
    language: "zh",
  },
  children,
}) => {
  const [currentTheme] = useAutoTheme(theme);
  const [currentLocale] = useLocale(locale);

  return (
    <ConfigContext.Provider
      value={{
        theme: currentTheme,
        locale: currentLocale,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
