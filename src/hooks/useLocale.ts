import i18n from "@config/i18n";
import { Locale } from "@contexts/types";
import { useState } from "react";

const useLocale = (initialLocale: Locale) => {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  i18n.changeLanguage(initialLocale.language);

  return [locale, setLocale] as const;
};

export default useLocale;
