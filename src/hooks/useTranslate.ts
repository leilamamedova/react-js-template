import { useState, useEffect } from "react";

import i18n from "i18next";
import { useTranslation } from "react-i18next";

import { IUseTranslate } from "hooks/interfaces";

const useTranslate = (): IUseTranslate => {
  const { t } = useTranslation();
  const [lang, setLang] = useState<string>("");

  const translate = (key: string): string => t(key);

  const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);
    setLang(lang);
    localStorage.setItem("lang", lang);
    window.location.reload();
  };

  useEffect(() => {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "en");
      setLang("en");
    }
  }, []);

  return { lang, translate, changeLanguage };
};

export default useTranslate;

useTranslate.displayName = "useTranslate";
