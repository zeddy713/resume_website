"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/src/i18n/locale-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange={false}
      >
        {children}
      </ThemeProvider>
    </LocaleProvider>
  );
}


