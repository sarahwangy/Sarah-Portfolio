"use client";

import { createContext, useContext, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof t.en;
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: t.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <LangContext.Provider value={{ lang, setLang, t: t[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
