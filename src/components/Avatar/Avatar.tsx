import React from "react";
import type {
  AvatarProps,
  AvatarFallbackProps,
  AvatarImageProps,
} from "./types";
import styles from "./avatar.module.scss";

export const Avatar: React.FC<AvatarProps> = ({ children }) => {
  return <div className={styles.avatar}>{children}</div>;
};

export const AvatarImage: React.FC<AvatarImageProps> = ({ src }) => {
  return <img className={styles.avatarImage} src={src} alt="avatar" />;
};

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({ children }) => {
  return <div className={styles.avatarFallback}>{children}</div>;
};
