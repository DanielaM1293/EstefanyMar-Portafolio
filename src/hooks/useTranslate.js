import { useCallback } from "react";
import { translations } from "../i18n/translations";

export function useTranslate(lang) {
  return useCallback(
    (key) => translations[lang]?.[key] || key,
    [lang]
  );
}
