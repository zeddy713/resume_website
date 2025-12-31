"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 px-4 sm:px-6 lg:px-8", className)}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-16 text-center">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

