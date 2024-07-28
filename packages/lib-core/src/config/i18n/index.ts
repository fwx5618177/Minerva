import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en";
import fr from "./fr";

const resources = {
  en,
  fr,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  ns: ["index"],
  defaultNS: "index",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
