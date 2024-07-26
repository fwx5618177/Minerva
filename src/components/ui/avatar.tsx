import React from "react";
import styles from "./Avatar.module.scss";

export const Avatar: React.FC = ({ children }) => {
  return <div className={styles.avatar}>{children}</div>;
};

export const AvatarImage: React.FC<{ src: string }> = ({ src }) => {
  return <img className={styles.avatarImage} src={src} alt="avatar" />;
};

export const AvatarFallback: React.FC = ({ children }) => {
  return <div className={styles.avatarFallback}>{children}</div>;
};
