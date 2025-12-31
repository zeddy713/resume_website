"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Timeline } from "@/components/timeline";
import { ProjectGallery } from "@/components/project-gallery";
import { SkillMatrix } from "@/components/skill-matrix";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { ToastContainer } from "@/components/toast";
import { profile } from "@/src/content/profile";
import { profileI18n } from "@/src/content/profile-i18n";
import { useLocale } from "@/src/i18n/locale-context";

interface Toast {
  id: string;
  message: string;
  type: "success" | "error";
}

export default function Home() {
  const { locale, t } = useLocale();
  const i18nContent = profileI18n[locale];
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: "success" | "error") => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // Transform education data for Timeline
  const educationItems = profile.education.map((edu) => ({
    title: edu.institution,
    subtitle: typeof edu.degree === "string" ? edu.degree : edu.degree[locale],
    location: edu.location,
    period: edu.period,
    gpa: edu.gpa,
    courses: edu.courses ? (typeof edu.courses === "object" && !Array.isArray(edu.courses) ? edu.courses[locale] : edu.courses) : undefined,
    achievements: edu.achievements ? (typeof edu.achievements === "object" && !Array.isArray(edu.achievements) ? edu.achievements[locale] : edu.achievements) : undefined,
    type: "education" as const,
  }));

  // Transform experience data for Timeline
  const experienceItems = profile.experience.map((exp) => ({
    title: exp.company,
    subtitle: typeof exp.role === "string" ? exp.role : exp.role[locale],
    location: exp.location,
    period: exp.period,
    details: typeof exp.bullets === "object" && !Array.isArray(exp.bullets) ? exp.bullets[locale] : exp.bullets,
    type: "experience" as const,
  }));

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero onCopyEmail={() => addToast(t("contact.emailCopied"), "success")} />
      
      <Section id="about" title={t("sections.about")}>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-foreground whitespace-pre-line leading-relaxed">
            {i18nContent.about || profile.about}
          </p>
        </div>
      </Section>

      <Section id="education" title={t("sections.education")}>
        <Timeline items={educationItems} />
      </Section>

      <Section id="experience" title={t("sections.experience")}>
        <Timeline items={experienceItems} />
      </Section>

      <Section id="projects" title={t("sections.projects")}>
        <ProjectGallery projects={profile.projects} locale={locale} />
      </Section>

      <Section id="skills" title={t("sections.skills")}>
        <SkillMatrix skills={profile.skills} />
      </Section>

      <Section id="contact" title={t("sections.contact")}>
        <div className="max-w-2xl mx-auto">
          <p className="text-muted-foreground mb-6 text-center">
            {t("contact.subtitle")}
          </p>
          <ContactForm
            onSuccess={(message) => addToast(message, "success")}
            onError={(message) => addToast(message, "error")}
          />
        </div>
      </Section>

      <Footer />
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </main>
  );
}
