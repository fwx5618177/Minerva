import i18n from "@config/i18n";
import { Locale } from "@contexts/types";
import { useEffect, useState } from "react";

const useLocale = (initialLocale: Locale) => {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  useEffect(() => {
    i18n.changeLanguage(locale.language);
  }, [locale]);

  return [locale, setLocale] as const;
};

export default useLocale;
