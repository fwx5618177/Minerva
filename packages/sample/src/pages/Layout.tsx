import React, { useEffect, ReactNode } from "react";
import { applyTheme } from "@config/theme/config";

import type { Theme } from "@config/theme/types";

interface LayoutProps {
  children: ReactNode;
  theme?: Theme;
}

const Layout: React.FC<LayoutProps> = ({ children, theme }) => {
  // TODO: Uncomment this code to apply the theme

  // useEffect(() => {
  //   applyTheme(theme);
  // }, [theme]);

  return <div>{children}</div>;
};

export default Layout;
