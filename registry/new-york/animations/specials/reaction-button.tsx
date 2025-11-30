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
    const [showBurst, setShowBurst] = React.useState(false);

    const handleClick = () => {
        const newState = !liked;
        setLiked(newState);
        onToggle?.(newState);

        if (newState) {
            setShowBurst(true);
            setTimeout(() => setShowBurst(false), 1000);
        }
    };

    const MotionIcon = motion(Icon);

    return (
        <div className={cn("relative inline-flex items-center justify-center", className)} style={{ width: size, height: size }}>
            <MotionIcon
                size={size}
                onClick={handleClick}
                className="cursor-pointer z-10 relative"
                initial={false}
                animate={{
                    scale: liked ? [1, 0.8, 1.3, 1] : 1, // Squish -> Pop -> Settle
                    fill: liked ? colors.liked : "transparent",
                    stroke: liked ? colors.liked : colors.initial,
                }}
                transition={{
                    duration: 0.4,
                    times: [0, 0.15, 0.4, 1],
                    ease: "easeInOut",
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
                            scale: [0, 1.5, 0],
                            opacity: [0, 1, 0],
                            rotate: [0, 45]
                        }}
                        transition={{ duration: 0.6, delay: 0.1 }}
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
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
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
                        transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                    />
                </div>
            )}

            {/* Particle burst */}
            {showBurst && (
                <div className="absolute inset-0 pointer-events-none">
                    {/* Lines Burst */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                        const radian = (angle * Math.PI) / 180;
                        const distance = size * 0.7;
                        const x = Math.cos(radian) * distance;
                        const y = Math.sin(radian) * distance;

                        return (
                            <motion.div
                                key={`line-${angle}`}
                                className="absolute top-1/2 left-1/2"
                                style={{
                                    width: size * 0.15,
                                    height: size * 0.15,
                                    color: colors.liked,
                                }}
                                initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                                animate={{
                                    x,
                                    y,
                                    scale: [0, 1, 0],
                                    opacity: [1, 1, 0],
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut" as Easing,
                                    delay: Math.random() * 0.1, // Randomize delay for organic feel
                                }}
                            >
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                            </motion.div>
                        );
                    })}

                    {/* Circle Burst */}
                    {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => {
                        const radian = (angle * Math.PI) / 180;
                        const distance = size * 0.6;
                        const x = Math.cos(radian) * distance;
                        const y = Math.sin(radian) * distance;

                        return (
                            <motion.div
                                key={`circle-${angle}`}
                                className="absolute top-1/2 left-1/2 rounded-full"
                                style={{
                                    width: size * 0.1,
                                    height: size * 0.1,
                                    backgroundColor: colors.liked,
                                }}
                                initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                                animate={{
                                    x,
                                    y,
                                    scale: [0, 1, 0],
                                    opacity: [1, 1, 0],
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut" as Easing,
                                    delay: 0.1 + Math.random() * 0.1,
                                }}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}
