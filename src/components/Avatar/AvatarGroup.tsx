import React from "react";
import styles from "./avatarGroup.module.scss";
import { AvatarGroupProps } from "./types";

const AvatarGroup: React.FC<React.PropsWithChildren<AvatarGroupProps>> = ({
  count,
  className = "",
  children,
}) => {
  return (
    <div className={`${styles.avatarGroup} ${className}`}>
      {children}
      {count && <span className={styles.count}>+{count}</span>}
    </div>
  );
};

export default AvatarGroup;
