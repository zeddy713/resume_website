"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/src/content/profile";
import { profileI18n } from "@/src/content/profile-i18n";
import { useLocale } from "@/src/i18n/locale-context";
import { cn } from "@/lib/utils";

interface HeroProps {
  onCopyEmail?: () => void;
}

export function Hero({ onCopyEmail }: HeroProps) {
  const { locale, t } = useLocale();
  const i18nContent = profileI18n[locale];
  
  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    if (onCopyEmail) {
      onCopyEmail();
    }
  };

  return (
    <section
      id="top"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full border border-border bg-muted overflow-hidden">
              <Image
                src={profile.avatar.src}
                alt={profile.avatar.alt}
                fill
                sizes="112px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {i18nContent.headline || profile.headline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <button
                onClick={copyEmail}
                className="hover:text-accent transition-colors"
              >
                {profile.email}
              </button>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>{profile.phone}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <a
              href="/resume.pdf"
              download
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-lg",
                "bg-accent text-accent-foreground font-medium",
                "hover:bg-accent/90 transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              )}
            >
              <Download className="h-4 w-4" />
              {t("hero.downloadResume")}
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-lg",
                "border border-border bg-background text-foreground font-medium",
                "hover:bg-muted transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              )}
            >
              <Mail className="h-4 w-4" />
              {t("hero.getInTouch")}
            </a>
          </motion.div>

          {/* Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
          >
            {[
              { icon: "📊", key: "dataAnalytics" },
              { icon: "🗄️", key: "dataManagement" },
              { icon: "🤖", key: "appliedML" },
            ].map((area, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-border bg-muted shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{area.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t(`focusAreas.${area.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`focusAreas.${area.key}.description`)}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

