import React from "react";
import { Avatar, LogInIcon, MailsIcon, SearchIcon } from "@minerva/lib-core";

import "@styles/app.module.scss";

const App: React.FC = () => {
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
