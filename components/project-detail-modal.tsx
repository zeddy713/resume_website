"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, FileText } from "lucide-react";
import { Project } from "@/src/content/profile";
import { useLocale } from "@/src/i18n/locale-context";
import { cn } from "@/lib/utils";

interface LocalizedProject {
  id: string;
  title: string;
  role: string;
  period: string;
  location?: string;
  tags: string[];
  problem: string;
  dataset: string;
  approach: string;
  tools: string[];
  impact: string[];
  nextSteps?: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
}

interface ProjectDetailModalProps {
  project: LocalizedProject;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const { t } = useLocale();
  
  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg border border-border bg-background shadow-xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Header */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">{project.title}</h2>
              <p className="text-muted-foreground">
                {project.role} • {project.period}
                {project.location && ` • ${project.location}`}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-muted text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Problem */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t("projects.problem")}</h3>
              <p className="text-foreground">{project.problem}</p>
            </div>

            {/* Dataset */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t("projects.dataset")}</h3>
              <p className="text-foreground">{project.dataset}</p>
            </div>

            {/* Approach */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t("projects.approach")}</h3>
              <p className="text-foreground">{project.approach}</p>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t("projects.tools")}</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded text-sm font-medium bg-accent/10 text-accent border border-accent/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t("projects.impact")}</h3>
              <ul className="space-y-2">
                {project.impact.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Next Steps */}
            {project.nextSteps && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t("projects.nextSteps")}</h3>
                <p className="text-foreground">{project.nextSteps}</p>
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-accent/80"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-accent/80"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo</span>
                </a>
              )}
              {project.caseStudyUrl && (
                <a
                  href={project.caseStudyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-accent/80"
                >
                  <FileText className="h-4 w-4" />
                  <span>Case Study PDF</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

