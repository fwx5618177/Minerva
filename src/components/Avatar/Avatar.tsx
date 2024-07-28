import React from "react";

import { AvatarProps } from "./types";
import styles from "./avatar.module.scss";
import { useI18n } from "@hooks/index";

const Avatar: React.FC<AvatarProps> = ({
  src,
  text = "",
  isSquare = false,
  className = "",
  ...props
}) => {
  const { t } = useI18n();
  const showText = !src;
  const avatarClasses = `${styles.avatar} ${isSquare ? styles.avatarSquare : ""} ${className}`;

  return (
    <span className={avatarClasses} {...props}>
      {!showText && (
        <img
          alt="avatar"
          className={styles.avatarImg}
          src={src}
          draggable={false}
        />
      )}
      {showText && (
        <span className={styles.avatarText}>{text || t("avatar:default")}</span>
      )}
    </span>
  );
};

export default Avatar;
