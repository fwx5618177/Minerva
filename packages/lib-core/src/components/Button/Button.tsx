import React from "react";
import { ButtonProps } from "./types";
import styles from "./button.module.scss";

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
