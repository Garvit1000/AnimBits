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
      {/* Subtle hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-blue-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover/bento:opacity-100 dark:bg-blue-400/20" />

      {/* Card container */}
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200/60 bg-gradient-to-br from-white to-neutral-50/50 shadow-sm transition-all duration-300 group-hover/bento:border-neutral-300/80 group-hover/bento:shadow-lg dark:border-neutral-800/60 dark:from-neutral-900 dark:to-neutral-950/50 dark:group-hover/bento:border-neutral-700/80">
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0/0.03)_1px,transparent_0)] [background-size:16px_16px] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.03)_1px,transparent_0)]" />

        {/* Plus icon in top-right corner */}
        <div className="absolute right-4 top-4 z-10 flex h-6 w-6 items-center justify-center rounded-lg border border-neutral-200/80 bg-white/90 opacity-50 backdrop-blur-sm transition-all duration-300 group-hover/bento:opacity-100 group-hover/bento:scale-110 dark:border-neutral-700/80 dark:bg-neutral-800/90">
          <Plus className="h-3.5 w-3.5 text-neutral-600 dark:text-neutral-400" />
        </div>

        {/* Header/Visual content */}
        <div className="relative flex-1">
          {header}
        </div>

        {/* Text content */}
        <div className="relative space-y-1.5 border-t border-neutral-100/50 bg-white/50 p-6 pt-4 backdrop-blur-sm dark:border-neutral-800/50 dark:bg-neutral-900/50">
          {icon}
          <div className="text-base font-semibold text-neutral-900 dark:text-white">
            {title}
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
