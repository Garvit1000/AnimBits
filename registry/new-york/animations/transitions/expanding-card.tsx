"use client";

import React, { useState, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CardItem {
    id: number | string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
}

interface ExpandingCardProps {
    items: CardItem[];
    className?: string;
    columns?: 2 | 3 | 4;
    variant?: "scale-center" | "slide-up" | "rotate-scale" | "elastic" | "fade-scale";
}

export function ExpandingCard({ items, className, columns = 3, variant = "scale-center" }: ExpandingCardProps) {
    const [selectedId, setSelectedId] = useState<number | string | null>(null);
    const id = useId();

    const gridCols = {
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-4"
    }[columns];

    const getExpandTransition = () => {
        switch (variant) {
            case "scale-center":
                return { type: "spring" as const, bounce: 0.2, duration: 0.6 };
            case "slide-up":
                return { type: "spring" as const, bounce: 0.15, duration: 0.5 };
            case "rotate-scale":
                return { type: "spring" as const, bounce: 0.25, duration: 0.7 };
            case "elastic":
                return { type: "spring" as const, bounce: 0.4, duration: 0.8 };
            case "fade-scale":
                return { type: "tween" as const, duration: 0.3, ease: "easeOut" as const };
            default:
                return { type: "spring" as const, bounce: 0.2, duration: 0.6 };
        }
    };

    const getExpandInitial = () => {
        switch (variant) {
            case "slide-up":
                return { opacity: 0, y: 50 };
            case "rotate-scale":
                return { opacity: 0, scale: 0.8, rotate: -5 };
            case "fade-scale":
                return { opacity: 0, scale: 0.95 };
            default:
                return {};
        }
    };

    const getExpandAnimate = () => {
        switch (variant) {
            case "slide-up":
                return { opacity: 1, y: 0 };
            case "rotate-scale":
                return { opacity: 1, scale: 1, rotate: 0 };
            case "fade-scale":
                return { opacity: 1, scale: 1 };
            default:
                return {};
        }
    };

    return (
        <div className={cn("flex flex-col items-center justify-center min-h-[600px] w-full p-8 bg-zinc-50 dark:bg-zinc-900 rounded-xl overflow-hidden relative", className)}>
            <div className={cn("grid grid-cols-1 gap-4 w-full max-w-6xl relative z-10", gridCols)}>
                {items.map((card) => (
                    <motion.div
                        key={card.id}
                        layoutId={`${id}-card-${card.id}`}
                        onClick={() => setSelectedId(card.id)}
                        className={cn(
                            "relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-zinc-800",
                            "flex flex-col h-64 group"
                        )}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.div
                            layoutId={`${id}-image-${card.id}`}
                            className="h-40 w-full overflow-hidden"
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </motion.div>
                        <div className="p-4">
                            <motion.h3
                                layoutId={`${id}-title-${card.id}`}
                                className="text-lg font-bold text-zinc-900 dark:text-zinc-100"
                            >
                                {card.title}
                            </motion.h3>
                            <motion.p
                                layoutId={`${id}-desc-${card.id}`}
                                className="text-sm text-zinc-500 dark:text-zinc-400 mt-1"
                            >
                                {card.description}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm z-20"
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none p-4">
                            {items
                                .filter((c) => c.id === selectedId)
                                .map((card) => (
                                    <motion.div
                                        key={card.id}
                                        layoutId={`${id}-card-${card.id}`}
                                        className="w-full max-w-lg bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl pointer-events-auto relative max-h-[85vh] flex flex-col"
                                        transition={getExpandTransition()}
                                        initial={getExpandInitial()}
                                        animate={getExpandAnimate()}
                                    >
                                        <motion.button
                                            className="absolute top-4 right-4 p-2 bg-black/10 dark:bg-white/10 rounded-full text-zinc-900 dark:text-zinc-100 z-50 hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedId(null);
                                            }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1, transition: { delay: 0.2 } }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <X size={20} />
                                        </motion.button>

                                        <motion.div
                                            layoutId={`${id}-image-${card.id}`}
                                            className="h-64 w-full overflow-hidden flex-shrink-0"
                                        >
                                            <img
                                                src={card.image}
                                                alt={card.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>

                                        <div className="p-6 overflow-y-auto">
                                            <motion.h3
                                                layoutId={`${id}-title-${card.id}`}
                                                className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2"
                                            >
                                                {card.title}
                                            </motion.h3>
                                            <motion.p
                                                layoutId={`${id}-desc-${card.id}`}
                                                className="text-base text-zinc-600 dark:text-zinc-400 mb-4"
                                            >
                                                {card.description}
                                            </motion.p>

                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ delay: 0.1 }}
                                                className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed space-y-4"
                                            >
                                                <p>{card.longDescription}</p>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                        </div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
