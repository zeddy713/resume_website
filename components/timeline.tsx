"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { useLocale } from "@/src/i18n/locale-context";
import { cn } from "@/lib/utils";

interface TimelineItem {
  title: string;
  subtitle: string;
  location: string;
  period: string;
  details?: string[];
  gpa?: string;
  courses?: string[];
  achievements?: string[];
  type: "education" | "experience";
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  const { t } = useLocale();
  
  return (
    <div className="relative">
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "relative flex items-start gap-6",
              "md:flex-row md:items-center",
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            )}
          >
            {/* Timeline dot */}
            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-background bg-accent">
              {item.type === "education" ? (
                <GraduationCap className="h-4 w-4 text-accent-foreground" />
              ) : (
                <Briefcase className="h-4 w-4 text-accent-foreground" />
              )}
            </div>

            {/* Content card */}
            <div
              className={cn(
                "flex-1 rounded-xl border border-border bg-muted p-6 shadow-sm",
                "md:w-5/12",
                index % 2 === 0 ? "md:ml-auto" : "md:mr-auto",
                "hover:shadow-md transition-shadow"
              )}
            >
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.subtitle}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{item.period}</span>
                  </div>
                  {item.gpa && (
                    <span className="font-medium text-accent">{t("timeline.gpa")} {item.gpa}</span>
                  )}
                </div>
                {item.courses && (
                  <div className="pt-2">
                    <p className="text-xs font-medium text-muted-foreground mb-1">
                      {t("timeline.keyCourses")}
                    </p>
                    <p className="text-sm text-foreground">{item.courses.join(", ")}</p>
                  </div>
                )}
                {item.achievements && (
                  <div className="pt-2">
                    <p className="text-xs font-medium text-muted-foreground mb-1">
                      {t("timeline.achievement")}
                    </p>
                    <p className="text-sm text-foreground">{item.achievements.join(", ")}</p>
                  </div>
                )}
                {item.details && (
                  <ul className="mt-4 space-y-2">
                    {item.details.map((detail, idx) => {
                      const hasLabel = detail.includes(":");
                      const [label, ...restParts] = detail.split(":");
                      const rest = restParts.join(":").trim();

                      return (
                        <li
                          key={idx}
                          className="text-sm text-foreground flex items-start gap-2"
                        >
                          <span className="text-accent mt-1">•</span>
                          <span>
                            {hasLabel ? (
                              <>
                                <span className="font-semibold">{label}:</span>{" "}
                                {rest}
                              </>
                            ) : (
                              detail
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

