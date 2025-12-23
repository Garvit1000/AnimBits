"use client";

import React, { useState, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Grid, List } from "lucide-react";

export interface ListGridItem {
    id: string | number;
    title: string;
    subtitle: string;
    status: string;
    avatar?: string;
}

interface ListGridProps {
    items: ListGridItem[];
    className?: string;
    views?: Array<"grid" | "list" | "compact" | "card">;
    variant?: "smooth" | "stagger" | "scale-fade" | "crossfade";
}

export function ListGrid({ items, className, views = ["grid", "list"], variant = "smooth" }: ListGridProps) {
    const [view, setView] = useState<"grid" | "list" | "compact" | "card">(views[0]);
    const id = useId();

    const getItemTransition = (index: number) => {
        switch (variant) {
            case "smooth":
                return { type: "spring" as const, bounce: 0.2, duration: 0.6 };
            case "stagger":
                return { type: "spring" as const, bounce: 0.2, duration: 0.6, delay: index * 0.05 };
            case "scale-fade":
                return { type: "spring" as const, bounce: 0.15, duration: 0.5 };
            case "crossfade":
                return { type: "tween" as const, duration: 0.3 };
            default:
                return { type: "spring" as const, bounce: 0.2, duration: 0.6 };
        }
    };

    const getItemInitial = () => {
        switch (variant) {
            case "scale-fade":
                return { opacity: 0, scale: 0.9 };
            case "crossfade":
                return { opacity: 0 };
            default:
                return { opacity: 0, scale: 0.9 };
        }
    };

    const getItemAnimate = () => {
        switch (variant) {
            case "scale-fade":
                return { opacity: 1, scale: 1 };
            case "crossfade":
                return { opacity: 1 };
            default:
                return { opacity: 1, scale: 1 };
        }
    };

    return (
        <div className={cn("flex flex-col items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-900 rounded-xl min-h-[400px] w-full", className)}>
            <div className="w-full max-w-md">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        Items
                    </h3>
                    <div className="flex bg-white dark:bg-zinc-800 rounded-lg p-1 border border-zinc-200 dark:border-zinc-700">
                        <button
                            onClick={() => setView("grid")}
                            className={cn(
                                "p-2 rounded-md transition-colors relative",
                                view === "grid"
                                    ? "text-zinc-900 dark:text-zinc-100"
                                    : "text-zinc-400 hover:text-zinc-600"
                            )}
                        >
                            {view === "grid" && (
                                <motion.div
                                    layoutId={`${id}-bg`}
                                    className="absolute inset-0 bg-zinc-100 dark:bg-zinc-700 rounded-md -z-10 shadow-sm"
                                    transition={{ duration: 0.2 }}
                                />
                            )}
                            <Grid size={16} />
                        </button>
                        <button
                            onClick={() => setView("list")}
                            className={cn(
                                "p-2 rounded-md transition-colors relative",
                                view === "list"
                                    ? "text-zinc-900 dark:text-zinc-100"
                                    : "text-zinc-400 hover:text-zinc-600"
                            )}
                        >
                            {view === "list" && (
                                <motion.div
                                    layoutId={`${id}-bg`}
                                    className="absolute inset-0 bg-zinc-100 dark:bg-zinc-700 rounded-md -z-10 shadow-sm"
                                    transition={{ duration: 0.2 }}
                                />
                            )}
                            <List size={16} />
                        </button>
                    </div>
                </div>

                <motion.div
                    layout
                    className={cn(
                        "grid gap-4",
                        view === "grid" ? "grid-cols-2" : "grid-cols-1"
                    )}
                >
                    <AnimatePresence>
                        {items.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={getItemInitial()}
                                animate={getItemAnimate()}
                                exit={getItemInitial()}
                                transition={getItemTransition(index)}
                                className={cn(
                                    "bg-white dark:bg-zinc-800 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md transition-shadow cursor-default",
                                    view === "list" && "flex items-center justify-between"
                                )}
                            >
                                <div className="flex items-center gap-3">
                                    {item.avatar ? (
                                        <img
                                            src={item.avatar}
                                            alt={item.title}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-500">
                                            {item.title.substring(0, 2).toUpperCase()}
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {view === "list" && (
                                    <span
                                        className={cn(
                                            "px-2 py-1 rounded-full text-xs font-medium",
                                            item.status === "Active" &&
                                            "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
                                            item.status === "Pending" &&
                                            "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
                                            item.status === "Archived" &&
                                            "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
                                        )}
                                    >
                                        {item.status}
                                    </span>
                                )}

                                {view === "grid" && (
                                    <div className="mt-4 flex justify-between items-center">
                                        <span
                                            className={cn(
                                                "px-2 py-1 rounded-full text-xs font-medium",
                                                item.status === "Active" &&
                                                "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
                                                item.status === "Pending" &&
                                                "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
                                                item.status === "Archived" &&
                                                "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
                                            )}
                                        >
                                            {item.status}
                                        </span>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
