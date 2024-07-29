import React from "react";
import styles from "./index.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h1>Acme Components</h1>
        <p>
          A comprehensive library of beautifully designed React components for
          your web applications.
        </p>
      </div>
    </header>
  );
};

export default Header;
