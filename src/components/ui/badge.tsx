import React from "react";
import styles from "./Badge.module.scss";

export const Badge: React.FC = ({ children }) => {
  return <span className={styles.badge}>{children}</span>;
};
