import { useTranslation } from "react-i18next";
import "@config/i18n";

const useI18n = () => {
  const { t, i18n } = useTranslation();

  return { t, i18n };
};

export default useI18n;
