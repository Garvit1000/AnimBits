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
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:gap-6 xl:gap-8 md:auto-rows-[18rem] md:grid-cols-3",
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
      <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-neutral-200/60 bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 dark:border-white/5 dark:bg-neutral-900/40 dark:hover:bg-neutral-900/80 group-hover/bento:-translate-y-1.5 group-hover/bento:border-neutral-300 dark:group-hover/bento:border-white/20">

        {/* Header/Visual content */}
        <div className="relative flex-1 bg-neutral-50/30 dark:bg-black/20 overflow-hidden">
          {header}
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-1.5 z-10 p-6 sm:p-8 border-t border-neutral-100 dark:border-white/5 transition-colors group-hover/bento:bg-neutral-50/50 dark:group-hover/bento:bg-black/20">
          {icon}
          <div className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {title}
          </div>
          <div className="text-sm font-medium leading-relaxed text-neutral-500 dark:text-neutral-400">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
