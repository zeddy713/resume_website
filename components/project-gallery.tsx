"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ExternalLink, Github, FileText } from "lucide-react";
import { Project } from "@/src/content/profile";
import { useLocale } from "@/src/i18n/locale-context";
import { cn } from "@/lib/utils";
import { ProjectDetailModal } from "./project-detail-modal";

interface ProjectGalleryProps {
  projects: Project[];
  locale: "en" | "zh";
}

export function ProjectGallery({ projects, locale }: ProjectGalleryProps) {
  const { t } = useLocale();
  
  // Transform projects to use locale-specific content
  const localizedProjects = projects.map((project) => ({
    ...project,
    title: typeof project.title === "string" ? project.title : project.title[locale],
    role: typeof project.role === "string" ? project.role : project.role[locale],
    problem: typeof project.problem === "string" ? project.problem : project.problem[locale],
    dataset: typeof project.dataset === "string" ? project.dataset : project.dataset[locale],
    approach: typeof project.approach === "string" ? project.approach : project.approach[locale],
    impact: typeof project.impact === "object" && !Array.isArray(project.impact) ? project.impact[locale] : project.impact,
    nextSteps: project.nextSteps ? (typeof project.nextSteps === "string" ? project.nextSteps : project.nextSteps[locale]) : undefined,
  }));
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [projects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return localizedProjects.filter((project) => {
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tools.some((tool) => tool.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => project.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [localizedProjects, searchQuery, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder={t("projects.searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Filter className="h-4 w-4" />
            {t("projects.filterByTags")}
          </span>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={cn(
                "px-3 py-1 rounded-full text-sm font-medium transition-colors",
                selectedTags.includes(tag)
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {tag}
            </button>
          ))}
          {selectedTags.length > 0 && (
            <button
              onClick={() => setSelectedTags([])}
              className="px-3 py-1 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {t("projects.clearFilters")}
            </button>
          )}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground">
        {t("projects.showing")} {filteredProjects.length} {t("projects.of")} {localizedProjects.length} {t("projects.projects")}
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group rounded-xl border border-border bg-muted p-6 shadow-sm hover:border-accent/50 hover:shadow-md transition-all cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.role} • {project.period}
                </p>
              </div>

              <p className="text-sm text-foreground line-clamp-2">{project.problem}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded text-xs font-medium bg-background border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="px-2 py-1 rounded text-xs font-medium text-muted-foreground">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="text-sm font-medium text-accent hover:text-accent/80 flex items-center gap-1"
                >
                  {t("projects.viewDetails")}
                </button>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {project.caseStudyUrl && (
                  <a
                    href={project.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <FileText className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p>{t("projects.noProjectsFound")}</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedTags([]);
            }}
            className="mt-2 text-accent hover:text-accent/80"
          >
            {t("projects.clearFilters")}
          </button>
        </div>
      )}

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

