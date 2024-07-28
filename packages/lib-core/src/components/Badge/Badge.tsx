import React from "react";
import type { BadgeProps } from "./types";
import styles from "./badge.module.scss";

export const Badge: React.FC<BadgeProps> = ({ children }) => {
  return <span className={styles.badge}>{children}</span>;
};
