import React from "react";
import type {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
} from "./types";
import styles from "./card.module.scss";

export const Card: React.FC<CardProps> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
  return <div className={styles.cardHeader}>{children}</div>;
};

export const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return <h3 className={styles.cardTitle}>{children}</h3>;
};

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
}) => {
  return <p className={styles.cardDescription}>{children}</p>;
};

export const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return <div className={styles.cardContent}>{children}</div>;
};
