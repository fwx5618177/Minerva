import React, { ReactNode } from "react";
import styles from "./index.module.scss";

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <div className={styles.mainContent}>{children}</div>;
};

export default Main;
