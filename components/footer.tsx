"use client";

import { Linkedin, Github, ExternalLink } from "lucide-react";
import { profile } from "@/src/content/profile";
import { useLocale } from "@/src/i18n/locale-context";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  github: Github,
  tableau: ExternalLink,
};

export function Footer() {
  const { t } = useLocale();
  
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">{t("footer.quickLinks")}</h3>
            <nav className="space-y-2">
              {[
                { label: t("nav.about"), href: "#about" },
                { label: t("nav.experience"), href: "#experience" },
                { label: t("nav.projects"), href: "#projects" },
                { label: t("nav.contact"), href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(link.href.substring(1));
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">{t("footer.connect")}</h3>
            <div className="space-y-2">
              {profile.social.map((social) => {
                const Icon = iconMap[social.icon] || ExternalLink;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">{t("footer.contact")}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{profile.email}</p>
              <p>{profile.phone}</p>
              <p>{profile.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {profile.name}. {t("footer.rightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}

