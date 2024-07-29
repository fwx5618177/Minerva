import React from "react";

import Layout from "./pages/Layout";
import Sidebar from "@components/Sidebar/Sidebar";
import Main from "@components/Main/Main";
import Header from "@components/Header/Header";

import "@styles/app.module.scss";

const App: React.FC = () => {
  return (
    <Layout theme="light">
      <Sidebar />
      <Main>
        <Header />
        <section className="section">
          <h2>About Acme Components</h2>
          <p>
            Acme Components is a collection of high-quality, customizable React
            components that can help you build modern and visually appealing web
            applications. Our components are designed with simplicity,
            flexibility, and accessibility in mind, making it easy for
            developers to integrate them into their projects.
          </p>
        </section>
        <section className="section">
          <h2>Installation</h2>
          <p>
            To get started with Acme Components, you can install the package
            using your preferred package manager:
          </p>
          <div className="code-block">
            <pre>
              <code>npm install @acme/components</code>
            </pre>
          </div>
        </section>
        <section className="section">
          <h2>Components</h2>
          <p>
            Acme Components provides a wide range of beautifully designed
            components to help you build your web applications. Here are some of
            the available components:
          </p>
          <div className="components-grid">
            <div className="component-card">
              <img src="/placeholder.svg" alt="Button" />
              <h3>Button</h3>
              <p>
                A customizable button component with various styles and sizes.
              </p>
            </div>
            <div className="component-card">
              <img src="/placeholder.svg" alt="Card" />
              <h3>Card</h3>
              <p>
                A versatile card component with header, content, and footer
                sections.
              </p>
            </div>
            <div className="component-card">
              <img src="/placeholder.svg" alt="Dropdown" />
              <h3>Dropdown</h3>
              <p>
                A customizable dropdown menu component with various interaction
                options.
              </p>
            </div>
          </div>
        </section>
      </Main>
    </Layout>
  );
};

export default App;
