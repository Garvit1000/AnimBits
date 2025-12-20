"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export interface DiaTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    words: string[];
    duration?: number;
    className?: string;
}

export function DiaText({
    words,
    duration = 2000,
    className,
    ...props
}: DiaTextProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, duration);

        return () => clearInterval(interval);
    }, [words, duration]);

    return (
        <span
            className={cn("relative inline-block overflow-hidden min-w-[2ch] align-bottom text-black dark:text-white", className)}
            style={{ verticalAlign: "bottom" }}
            {...props}
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
                    transition={{
                        y: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                        filter: { duration: 0.2 },
                    }}
                    className="absolute inset-0 inline-block"
                >
                    <motion.span
                        className="inline-block bg-clip-text pb-1"
                        style={{
                            WebkitTextFillColor: "transparent",
                            backgroundImage: "linear-gradient(90deg, currentColor 50%, #2563EB 50%, #EA580C, #DB2777, #9333EA)",
                            backgroundSize: "250% 100%",
                        }}
                        initial={{
                            backgroundPosition: "100% 0%",
                        }}
                        animate={{
                            backgroundPosition: "0% 0%",
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                            delay: 0.1,
                        }}
                    >
                        {words[index]}
                    </motion.span>
                </motion.span>
            </AnimatePresence>

            {/* Spacer for layout stability */}
            <span className="invisible" aria-hidden="true">{words[index]}</span>
        </span>
    );
}
