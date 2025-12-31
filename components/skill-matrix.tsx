"use client";

import { motion } from "framer-motion";
import { SkillCategory } from "@/src/content/profile";

interface SkillMatrixProps {
  skills: SkillCategory[];
}

export function SkillMatrix({ skills }: SkillMatrixProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((category, index) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="rounded-xl border border-border bg-muted p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">{category.name}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded text-sm font-medium bg-background border border-border text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

