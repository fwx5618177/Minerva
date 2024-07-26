import React from "react";
import Button from "@components/Button";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>Minerva Component Library</h1>
      <Button
        label="Click Me"
        onClick={() => {
          console.log(
            t("common:farewell"),
            t("buttons:save"),
            t("index:click"),
          );
        }}
      />
    </div>
  );
};

export default App;
