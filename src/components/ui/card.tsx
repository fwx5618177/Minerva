import React from "react";
import styles from "./Card.module.scss";

export const Card: React.FC = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export const CardHeader: React.FC = ({ children }) => {
  return <div className={styles.cardHeader}>{children}</div>;
};

export const CardTitle: React.FC = ({ children }) => {
  return <h3 className={styles.cardTitle}>{children}</h3>;
};

export const CardDescription: React.FC = ({ children }) => {
  return <p className={styles.cardDescription}>{children}</p>;
};

export const CardContent: React.FC = ({ children }) => {
  return <div className={styles.cardContent}>{children}</div>;
};
