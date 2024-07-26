import React from "react";
import styles from "./App.module.scss";
import { Avatar, AvatarImage, AvatarFallback } from "@components/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { LogInIcon, MailsIcon, SearchIcon } from "@components/ui/icons";

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarTitle}>Minerva</div>
        <div className={styles.sidebarDescription}>Minerva UI v5.16.4</div>
        <nav className={styles.nav}>
          <div className={styles.navHeader}>Getting started</div>
          <div className={styles.navHeader}>Components</div>
          <ul>
            <li className={styles.navItem}>All components</li>
            <li className={styles.navItem}>Inputs</li>
            <li className={styles.navItem}>Autocomplete</li>
            <li className={styles.navItem}>Button</li>
            <li className={styles.navItem}>Button Group</li>
            <li className={styles.navItem}>Checkbox</li>
            <li className={styles.navItem}>Floating Action Button</li>
            <li className={styles.navItem}>Radio Group</li>
            <li className={styles.navItem}>Rating</li>
            <li className={styles.navItem}>Select</li>
            <li className={styles.navItem}>Slider</li>
            <li className={styles.navItem}>Switch</li>
            <li className={styles.navItem}>Text Field</li>
            <li className={styles.navItem}>Transfer List</li>
            <li className={styles.navItem}>Toggle Button</li>
          </ul>
          <div className={styles.navHeader}>Data Display</div>
          <ul>
            <li className={styles.navItem}>Avatar</li>
            <li className={styles.navItem}>Badge</li>
            <li className={styles.navItem}>Chip</li>
            <li className={styles.navItem}>Divider</li>
            <li className={styles.navItem}>Icons</li>
            <li className={styles.navItem}>Minerva Icons</li>
            <li className={styles.navItem}>List</li>
            <li className={styles.navItem}>Table</li>
            <li className={styles.navItem}>Tooltip</li>
            <li className={styles.navItem}>Typography</li>
          </ul>
        </nav>
      </aside>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>Minerva UI components</h1>
          <div className={styles.headerButtons}>
            <button className={styles.iconButton}>
              <SearchIcon className={styles.icon} />
            </button>
            <button className={styles.iconButton}>
              <MailsIcon className={styles.icon} />
            </button>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.iconWrapper}>
              <LogInIcon className={styles.iconLarge} />
            </div>
            <div>
              <h2 className={styles.sectionTitle}>
                Design and Development tips in your inbox. Every weekday.
              </h2>
              <p className={styles.sectionDescription}>Ads via Carbon</p>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Inputs</h2>
          <div className={styles.cards}>
            <Card className={styles.card}>
              <CardHeader>
                <CardTitle className={styles.cardTitle}>Autocomplete</CardTitle>
                <CardDescription className={styles.cardDescription}>
                  No guidelines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className={styles.cardContent} />
              </CardContent>
            </Card>
            <Card className={styles.card}>
              <CardHeader>
                <CardTitle className={styles.cardTitle}>Button</CardTitle>
                <Badge className={styles.badge}>MD2</Badge>
              </CardHeader>
              <CardContent>
                <div className={styles.cardContent} />
              </CardContent>
            </Card>
            <Card className={styles.card}>
              <CardHeader>
                <CardTitle className={styles.cardTitle}>Button Group</CardTitle>
                <CardDescription className={styles.cardDescription}>
                  No guidelines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className={styles.cardContent} />
              </CardContent>
            </Card>
            <Card className={styles.card}>
              <CardHeader>
                <CardTitle className={styles.cardTitle}>Checkbox</CardTitle>
                <Badge className={styles.badge}>MD2</Badge>
              </CardHeader>
              <CardContent>
                <div className={styles.cardContent} />
              </CardContent>
            </Card>
            <Card className={styles.card}>
              <CardHeader>
                <CardTitle className={styles.cardTitle}>
                  Floating Action Button
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={styles.cardContent} />
              </CardContent>
            </Card>
            <Card className={styles.card}>
              <CardHeader>
                <CardTitle className={styles.cardTitle}>Radio Group</CardTitle>
                <Badge className={styles.badge}>MD2</Badge>
              </CardHeader>
              <CardContent>
                <div className={styles.cardContent} />
              </CardContent>
            </Card>
            <Card className={styles.card}>
              <CardHeader>
                <CardTitle className={styles.cardTitle}>Rating</CardTitle>
                <CardDescription className={styles.cardDescription}>
                  No guidelines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className={styles.cardContent} />
              </CardContent>
            </Card>
            <Card className={styles.card}>
              <CardHeader>
                <CardTitle className={styles.cardTitle}>Select</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={styles.cardContent} />
              </CardContent>
            </Card>
            <Card className={styles.card}>
              <CardHeader>
                <CardTitle className={styles.cardTitle}>Slider</CardTitle>
                <Badge className={styles.badge}>MD2</Badge>
              </CardHeader>
              <CardContent>
                <div className={styles.cardContent} />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
