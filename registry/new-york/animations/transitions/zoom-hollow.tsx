"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export interface ZoomHollowTextProps {
    words: string[];
    className?: string;
    duration?: number;
    interval?: number;
    strokeWidth?: number;
    fillColor?: string;
    strokeColor?: string;
}

export function ZoomHollowText({
    words,
    className,
    duration = 0.8,
    interval = 2500,
    strokeWidth = 2,
    fillColor = "transparent",
    strokeColor = "currentColor",
}: ZoomHollowTextProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % words.length);
        }, interval);

        return () => clearInterval(timer);
    }, [words.length, interval]);

    return (
        <div className={cn("relative inline-block", className)}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{
                        scale: 0.5,
                        opacity: 0,
                        filter: "blur(10px)"
                    }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        filter: "blur(0px)"
                    }}
                    exit={{
                        scale: 1.5,
                        opacity: 0,
                        filter: "blur(10px)"
                    }}
                    transition={{
                        duration,
                        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth effect
                    }}
                    className="relative"
                    style={{
                        WebkitTextStroke: `${strokeWidth}px ${strokeColor}`,
                        WebkitTextFillColor: fillColor,
                        paintOrder: "stroke fill",
                    }}
                >
                    {words[currentIndex]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
