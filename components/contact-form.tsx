"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Loader2 } from "lucide-react";
import { profile } from "@/src/content/profile";
import { useLocale } from "@/src/i18n/locale-context";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  onSuccess: (message: string) => void;
  onError: (message: string) => void;
}

export function ContactForm({ onSuccess, onError }: ContactFormProps) {
  const { t } = useLocale();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t("contact.nameRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("contact.emailInvalid");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact.messageRequired");
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t("contact.messageMinLength");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    if (formEndpoint) {
      try {
        const response = await fetch(formEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `Contact from Resume Website - ${profile.name}`,
          }),
        });

        if (response.ok) {
          setFormData({ name: "", email: "", message: "" });
          onSuccess(t("contact.successMessage"));
        } else {
          throw new Error("Failed to send message");
        }
      } catch (error) {
        onError(t("contact.errorMessage"));
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Fallback to mailto
      const subject = encodeURIComponent(`Contact from Resume Website - ${profile.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setFormData({ name: "", email: "", message: "" });
      onSuccess(t("contact.openingEmail"));
      setIsSubmitting(false);
    }
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`Contact from Resume Website - ${profile.name}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}`;
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            {t("contact.nameLabel")}
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={cn(
              "w-full px-4 py-2 rounded-lg border bg-background text-foreground",
              "focus:outline-none focus:ring-2 focus:ring-accent",
              errors.name ? "border-red-500" : "border-border"
            )}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            {t("contact.emailLabel")}
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={cn(
              "w-full px-4 py-2 rounded-lg border bg-background text-foreground",
              "focus:outline-none focus:ring-2 focus:ring-accent",
              errors.email ? "border-red-500" : "border-border"
            )}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            {t("contact.messageLabel")}
          </label>
          <textarea
            id="message"
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={cn(
              "w-full px-4 py-2 rounded-lg border bg-background text-foreground",
              "focus:outline-none focus:ring-2 focus:ring-accent resize-none",
              errors.message ? "border-red-500" : "border-border"
            )}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-500">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full sm:w-auto px-6 py-3 rounded-lg font-medium",
            "bg-accent text-accent-foreground",
            "hover:bg-accent/90 transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "flex items-center justify-center gap-2"
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              {t("contact.sending")}
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              {t("contact.sendMessage")}
            </>
          )}
        </button>
      </form>

      <div className="pt-4 border-t border-border">
        <p className="text-sm text-muted-foreground mb-2">
          {t("contact.preferEmail")}
        </p>
        <button
          onClick={handleMailtoFallback}
          className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
        >
          <Mail className="h-4 w-4" />
          <span>{profile.email}</span>
        </button>
      </div>
    </div>
  );
}

