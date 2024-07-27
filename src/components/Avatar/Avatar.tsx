import React from "react";
import { AvatarProps } from "./types";
import styles from "./avatar.module.scss";

const Avatar: React.FC<AvatarProps> = ({
  src,
  text = "",
  isSquare = false,
  className = "",
  ...props
}) => {
  const showText = !src;
  const radius = isSquare ? "0.25rem" : "50%";
  const avatarClasses = `${styles.avatar} ${className}`;

  return (
    <span className={avatarClasses} style={{ borderRadius: radius }} {...props}>
      {!showText && (
        <img
          alt="avatar"
          className={styles.avatarImg}
          src={src}
          draggable={false}
        />
      )}
      {showText && <span className={styles.avatarText}>{text}</span>}
    </span>
  );
};

export default Avatar;
