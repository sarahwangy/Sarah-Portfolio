"use client";

import { useLang } from "./LanguageProvider";

export function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="fixed right-6 top-6 z-50 flex overflow-hidden rounded-full border border-slate-700 text-xs font-semibold">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 transition-colors duration-200 ${
          lang === "en"
            ? "bg-brand-accent text-brand-bg"
            : "bg-transparent text-brand-text-muted hover:text-brand-text"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("zh")}
        className={`px-3 py-1.5 transition-colors duration-200 ${
          lang === "zh"
            ? "bg-brand-accent text-brand-bg"
            : "bg-transparent text-brand-text-muted hover:text-brand-text"
        }`}
      >
        中
      </button>
    </div>
  );
}
