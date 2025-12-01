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
    duration = 1.2,
    color = "#fde047",
}: TextHighlightProps) {
    return (
        <span className={cn("relative inline-block px-2 py-1", className)}>
            {/* Strong background glow */}
            <motion.span
                className="absolute inset-0 rounded-xl blur-2xl -z-20"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.6, scale: 1.3 }}
                transition={{
                    duration: duration * 0.6,
                    delay,
                    ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                    backgroundColor: color,
                }}
            />

            {/* Main background highlight */}
            <motion.span
                className="absolute inset-0 rounded-lg -z-10"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 0.5, scaleX: 1 }}
                transition={{
                    duration: duration * 0.7,
                    delay: delay + 0.1,
                    ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                    backgroundColor: color,
                    transformOrigin: "left center",
                }}
            />

            {/* Thick underline */}
            <motion.span
                className="absolute bottom-1 left-0 h-[3px] rounded-full"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{
                    duration: duration * 0.5,
                    delay: delay + 0.4,
                    ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                    backgroundColor: color,
                }}
            />

            {/* Shimmer sweep - very visible */}
            <motion.span
                className="absolute inset-0 rounded-lg -z-5"
                initial={{ 
                    x: "-100%",
                    opacity: 0
                }}
                animate={{ 
                    x: "200%",
                    opacity: [0, 1, 0]
                }}
                transition={{
                    duration: duration * 0.8,
                    delay: delay + 0.2,
                    ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                    background: `linear-gradient(90deg, transparent 0%, ${color} 50%, transparent 100%)`,
                    opacity: 0.6,
                }}
            />

            {/* Text with brightness boost */}
            <motion.span
                className="relative font-medium"
                initial={{ y: 2, opacity: 0.7 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: duration * 0.4,
                    delay: delay + 0.05,
                    ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                    filter: "brightness(1.1)",
                }}
            >
                {children}
            </motion.span>
        </span>
    );
}
