"use client";

import * as React from "react";
import { motion } from "motion/react";
import type { Easing } from "motion/react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface ReactionButtonProps {
    Icon: LucideIcon;
    size?: number;
    colors?: {
        initial?: string;
        liked?: string;
    };
    isLiked?: boolean;
    onToggle?: (isLiked: boolean) => void;
    className?: string;
}

export function ReactionButton({
    Icon,
    size = 24,
    colors = {
        initial: "currentColor",
        liked: "#ef4444",
    },
    isLiked = false,
    onToggle,
    className,
}: ReactionButtonProps) {
    const [liked, setLiked] = React.useState(isLiked);

    const handleClick = () => {
        const newState = !liked;
        setLiked(newState);
        onToggle?.(newState);
    };

    const MotionIcon = motion(Icon);

    return (
        <div className={cn("relative inline-flex items-center justify-center", className)} style={{ width: size, height: size }}>
            <MotionIcon
                size={size}
                onClick={handleClick}
                className="cursor-pointer z-10 relative"
                initial={false}
                whileTap={{ scale: 0.8 }}
                animate={{
                    scale: liked ? [0.8, 1.2, 1] : 1, // Subtle pop
                    fill: liked ? colors.liked : "transparent",
                    stroke: liked ? colors.liked : colors.initial,
                }}
                transition={{
                    duration: 0.3,
                    times: [0, 0.4, 1],
                    ease: "easeOut",
                }}
            />

            {/* Sparkle effects when liked */}
            {liked && (
                <div className="absolute inset-0 pointer-events-none">
                    {/* Center sparkle (Cross) */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ scale: 0, opacity: 0, rotate: 0 }}
                        animate={{
                            scale: [0, 1.2, 0],
                            opacity: [0, 1, 0],
                            rotate: [0, 45]
                        }}
                        transition={{ duration: 0.4 }}
                    >
                        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                            <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" />
                        </svg>
                    </motion.div>

                    {/* Top-left sparkle (Dot) */}
                    <motion.div
                        className="absolute top-0 left-0 rounded-full bg-white"
                        style={{ width: size * 0.1, height: size * 0.1 }}
                        initial={{ scale: 0, opacity: 0, x: size * 0.2, y: size * 0.2 }}
                        animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            x: -size * 0.3,
                            y: -size * 0.3
                        }}
                        transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
                    />

                    {/* Top-right sparkle (Dot) */}
                    <motion.div
                        className="absolute top-0 right-0 rounded-full bg-white"
                        style={{ width: size * 0.1, height: size * 0.1 }}
                        initial={{ scale: 0, opacity: 0, x: -size * 0.2, y: size * 0.2 }}
                        animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            x: size * 0.3,
                            y: -size * 0.3
                        }}
                        transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                    />
                </div>
            )}
        </div>
    );
}
