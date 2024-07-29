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

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <Link to="#" className={styles.sidebar__brand}>
          <MountainIcon className={styles.icon} />
          <span>Acme Components</span>
        </Link>
      </div>
      <nav className={styles.sidebar__nav}>
        <Link to="#" className={styles.sidebar__link}>
          <HomeIcon className={styles.icon} />
          Introduction
        </Link>
        <Link to="#" className={styles.sidebar__link}>
          <DownloadIcon className={styles.icon} />
          Installation
        </Link>
        <Link to="#" className={styles.sidebar__link}>
          <CodeIcon className={styles.icon} />
          Usage
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
