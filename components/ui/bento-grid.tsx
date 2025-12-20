"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div className={cn("group/bento relative row-span-1", className)}>
      {/* Card container */}
      <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 group-hover/bento:border-primary/20 group-hover/bento:shadow-md">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-transparent to-transparent" />

        {/* Refined dot pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] [background-size:20px_20px] opacity-20" />

        {/* Plus icon in top-right corner */}
        <div className="absolute right-4 top-4 z-10 flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-background/50 opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover/bento:opacity-100 group-hover/bento:scale-110">
          <Plus className="h-3.5 w-3.5 text-muted-foreground" />
        </div>

        {/* Header/Visual content */}
        <div className="relative flex-1">
          {header}
        </div>

        {/* Text content */}
        <div className="relative space-y-1.5 border-t border-border bg-card/50 p-6 pt-4 backdrop-blur-sm transition-colors group-hover/bento:bg-card">
          {icon}
          <div className="text-base font-semibold tracking-tight text-foreground">
            {title}
          </div>
          <div className="text-sm text-muted-foreground">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
