"use client";

import { useLocale } from "@/src/i18n/locale-context";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border bg-muted/50 p-1">
      <button
        onClick={() => setLocale("en")}
        className={cn(
          "px-3 py-1 rounded-md text-xs font-medium transition-colors",
          locale === "en"
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLocale("zh")}
        className={cn(
          "px-3 py-1 rounded-md text-xs font-medium transition-colors",
          locale === "zh"
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Switch to Chinese"
      >
        中文
      </button>
    </div>
  );
}


