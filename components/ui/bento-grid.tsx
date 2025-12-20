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
      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-md transition-all duration-300 group-hover/bento:border-neutral-300 group-hover/bento:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 dark:group-hover/bento:border-neutral-700">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/50 via-transparent to-transparent dark:from-neutral-800/30" />

        {/* Refined dot pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0/0.02)_1px,transparent_0)] [background-size:20px_20px] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.02)_1px,transparent_0)]" />

        {/* Plus icon in top-right corner */}
        <div className="absolute right-4 top-4 z-10 flex h-7 w-7 items-center justify-center rounded-xl border border-neutral-200 bg-white/95 opacity-40 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover/bento:opacity-100 group-hover/bento:scale-110 group-hover/bento:shadow-md dark:border-neutral-700 dark:bg-neutral-800/95">
          <Plus className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
        </div>

        {/* Header/Visual content */}
        <div className="relative flex-1">
          {header}
        </div>

        {/* Text content */}
        <div className="relative space-y-1.5 border-t border-neutral-200/80 bg-gradient-to-b from-white/80 to-white/95 p-6 pt-4 backdrop-blur-sm dark:border-neutral-800/80 dark:from-neutral-900/80 dark:to-neutral-900/95">
          {icon}
          <div className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">
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
