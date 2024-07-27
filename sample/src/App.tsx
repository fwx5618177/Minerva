import React, { useEffect } from "react";
import Avatar from "@components/Avatar";
import { AvatarGroup } from "@components/Avatar";
import { LogInIcon, MailsIcon, SearchIcon } from "@components/UI/icons";

import "@styles/app.module.scss";
import { ThemeProvider, useTheme } from "@contexts/ThemeContext";

const App: React.FC = () => {
  const { theme, setTheme } = useTheme();

  console.log("theme:", theme);

  const applyCustomTheme = () => {
    const customTheme = {
      "primary-color": "#58a6ff",
      "secondary-color": "#1f6feb",
      "success-color": "#56d364",
      "danger-color": "#f85149",
      "warning-color": "#d29922",
      "info-color": "#3b82f6",
      "light-color": "#0d1117",
      "dark-color": "#c9d1d9",
      "background-color": "#010409",
      "foreground-color": "#c9d1d9",
      "border-color": "#30363d",
      "text-gray": "#8b949e",
      "primary-gradient-start": "#58a6ff",
      "primary-gradient-end": "#1f6feb",
      "secondary-gradient-start": "#1f6feb",
      "secondary-gradient-end": "#58a6ff",
    };
    setTheme("custom", customTheme);
  };

  useEffect(() => {
    applyCustomTheme();
  });

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="sidebarTitle">Minerva</div>
        <div className="sidebarDescription">Material UI v5.16.4</div>
        <nav className="nav">
          <div className="navHeader">Getting started</div>
          <div className="navHeader">Components</div>
          <ul>
            <li className="navItem">All components</li>
            <li className="navItem">Inputs</li>
            <li className="navItem">Autocomplete</li>
            <li className="navItem">Button</li>
            <li className="navItem">Button Group</li>
            <li className="navItem">Checkbox</li>
            <li className="navItem">Floating Action Button</li>
            <li className="navItem">Radio Group</li>
            <li className="navItem">Rating</li>
            <li className="navItem">Select</li>
            <li className="navItem">Slider</li>
            <li className="navItem">Switch</li>
            <li className="navItem">Text Field</li>
            <li className="navItem">Transfer List</li>
            <li className="navItem">Toggle Button</li>
          </ul>
          <div className="navHeader">Data Display</div>
          <ul>
            <li className="navItem">Avatar</li>
            <li className="navItem">Badge</li>
            <li className="navItem">Chip</li>
            <li className="navItem">Divider</li>
            <li className="navItem">Icons</li>
            <li className="navItem">Material Icons</li>
            <li className="navItem">List</li>
            <li className="navItem">Table</li>
            <li className="navItem">Tooltip</li>
            <li className="navItem">Typography</li>
          </ul>
        </nav>
      </aside>
      <main className="main">
        <header className="header">
          <h1 className="headerTitle">Material UI components</h1>
          <div className="headerButtons">
            <button className="iconButton">
              <SearchIcon className="icon" />
            </button>
            <button className="iconButton">
              <MailsIcon className="icon" />
            </button>
            <Avatar src="/placeholder-user.jpg" />
          </div>
        </header>
        <section className="section">
          <div className="sectionHeader">
            <div className="iconWrapper">
              <LogInIcon className="iconLarge" />
            </div>
            <div>
              <h2 className="sectionTitle">
                Design and Development tips in your inbox. Every weekday.
              </h2>
              <p className="sectionDescription">Ads via Carbon</p>
            </div>
          </div>
        </section>
        <section className="section">
          <h2 className="sectionTitle">Inputs</h2>
          <div className="cards">{/* 卡片组件的代码 */}</div>
        </section>
      </main>
    </div>
  );
};

export default App;
