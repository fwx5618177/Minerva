import React from "react";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>{t("lib.name")}</h1>
        <p>{t("lib.description")}</p>
      </div>
    </header>
  );
};

export default Header;
