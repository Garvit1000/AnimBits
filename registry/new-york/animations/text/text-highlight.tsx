"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface TextHighlightProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    color?: string;
}

export function TextHighlight({
    children,
    className,
    delay = 0,
    duration = 0.6,
    color = "#fde047",
}: TextHighlightProps) {
    return (
        <span className={cn("relative inline-block pb-1", className)}>
            {/* Simple marker underline */}
            <motion.span
                className="absolute bottom-0 left-0 right-0 h-[8px] rounded-sm"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                    duration,
                    delay,
                    ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                    backgroundColor: color,
                    transformOrigin: "left",
                }}
            />

            {/* Text */}
            <span className="relative">
                {children}
            </span>
        </span>
    );
}
