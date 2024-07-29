import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  DownloadIcon,
  CodeIcon,
  LayoutGridIcon,
  AccessibilityIcon,
  ComponentIcon,
  PowerIcon,
  MountainIcon,
} from "../Icons";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";

const Sidebar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <Link to="#" className={styles.sidebar__brand}>
          <MountainIcon className={styles.icon} />
          <span>{t("lib.name")}</span>
        </Link>
      </div>
      <nav className={styles.sidebar__nav}>
        <Link to="#" className={styles.sidebar__link}>
          <HomeIcon className={styles.icon} />
          {t("menu:introduction")}
        </Link>
        <Link to="#" className={styles.sidebar__link}>
          <DownloadIcon className={styles.icon} />
          {t("menu:installation")}
        </Link>
        <Link to="#" className={styles.sidebar__link}>
          <CodeIcon className={styles.icon} />
          {t("menu:usage")}
        </Link>
        <Link to="#" className={styles.sidebar__link}>
          <LayoutGridIcon className={styles.icon} />
          Components
        </Link>
        <Link to="#" className={styles.sidebar__link}>
          <AccessibilityIcon className={styles.icon} />
          Accessibility
        </Link>
        <Link to="#" className={styles.sidebar__link}>
          <ComponentIcon className={styles.icon} />
          Customization
        </Link>
        <Link to="#" className={styles.sidebar__link}>
          <PowerIcon className={styles.icon} />
          Support
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
