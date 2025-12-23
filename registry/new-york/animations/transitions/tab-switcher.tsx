"use client";

import React, { useState, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
}

interface TabSwitcherProps {
    tabs: Tab[];
    defaultTab?: string;
    className?: string;
    variant?: "pill" | "underline" | "segmented";
}

export function TabSwitcher({ tabs, defaultTab, className, variant = "pill" }: TabSwitcherProps) {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);
    const id = useId();

    return (
        <div className={cn("flex flex-col items-center justify-start p-8 bg-zinc-50 dark:bg-zinc-900 rounded-xl min-h-[400px] w-full", className)}>
            <div className={cn(
                "flex items-center",
                variant === "pill" && "space-x-1 bg-white dark:bg-zinc-950 p-1.5 rounded-full shadow-sm border border-zinc-200 dark:border-zinc-800",
                variant === "underline" && "border-b border-zinc-200 dark:border-zinc-800 w-full justify-center gap-8",
                variant === "segmented" && "bg-zinc-100 dark:bg-zinc-800 p-1 rounded-lg w-full max-w-md"
            )}>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            "relative px-4 py-2 text-sm font-semibold outline-none transition-colors duration-200 z-10 flex items-center gap-2",
                            variant === "pill" && "rounded-full",
                            variant === "underline" && "rounded-t-md pb-3",
                            variant === "segmented" && "rounded-md flex-1",
                            activeTab === tab.id
                                ? "text-zinc-900 dark:text-zinc-100"
                                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                        )}
                        style={{
                            WebkitTapHighlightColor: "transparent",
                        }}
                    >
                        {activeTab === tab.id && variant === "pill" && (
                            <motion.div
                                layoutId={`${id}-bubble`}
                                className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 rounded-full -z-10 shadow-sm border border-zinc-200/50 dark:border-zinc-700/50"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {activeTab === tab.id && variant === "underline" && (
                            <motion.div
                                layoutId={`${id}-underline`}
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-900 dark:bg-zinc-100"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {activeTab === tab.id && variant === "segmented" && (
                            <motion.div
                                layoutId={`${id}-segmented`}
                                className="absolute inset-0 bg-white dark:bg-zinc-900 rounded-md -z-10 shadow-sm"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {tab.icon && <span className="w-4 h-4">{tab.icon}</span>}
                        {tab.label}
                    </button>
                ))}
            </div>

            <motion.div
                layout
                className="mt-8 w-full max-w-md bg-white dark:bg-zinc-950 rounded-2xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 overflow-hidden"
                transition={{ duration: 0.3 }}
            >
                <AnimatePresence mode="wait">
                    {tabs.map((tab) =>
                        tab.id === activeTab ? (
                            <motion.div
                                key={tab.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.2 }}
                                className="text-zinc-600 dark:text-zinc-400 text-sm"
                            >
                                {tab.content}
                            </motion.div>
                        ) : null
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
