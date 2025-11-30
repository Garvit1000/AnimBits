"use client";
import * as React from "react";
import * as motion from "motion/react-client";
import type { Easing } from "motion/react";
import { cn } from "@/lib/utils";

export interface AnimatedToastProps {
    message: string;
    description?: string;
    type?: "default" | "success" | "error" | "info" | "warning";
    duration?: number;
    onClose?: () => void;
    className?: string;
}

export function AnimatedToast({
    message,
    description,
    type = "default",
    duration = 4000,
    onClose,
    className,
}: AnimatedToastProps) {
    const [isVisible, setIsVisible] = React.useState(true);
    const [progress, setProgress] = React.useState(100);

    React.useEffect(() => {
        const startTime = Date.now();
        const progressInterval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
            setProgress(remaining);
        }, 16);

        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onClose?.(), 300);
        }, duration);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(timer);
        };
    }, [duration, onClose]);

    const typeConfig = {
        default: {
            iconBg: "bg-zinc-100 dark:bg-zinc-800",
            iconColor: "text-zinc-900 dark:text-zinc-100",
            accentColor: "bg-zinc-400 dark:bg-zinc-600",
        },
        success: {
            iconBg: "bg-emerald-100 dark:bg-emerald-950/50",
            iconColor: "text-emerald-600 dark:text-emerald-400",
            accentColor: "bg-emerald-500 dark:bg-emerald-500",
        },
        error: {
            iconBg: "bg-red-100 dark:bg-red-950/50",
            iconColor: "text-red-600 dark:text-red-400",
            accentColor: "bg-red-500 dark:bg-red-500",
        },
        info: {
            iconBg: "bg-blue-100 dark:bg-blue-950/50",
            iconColor: "text-blue-600 dark:text-blue-400",
            accentColor: "bg-blue-500 dark:bg-blue-500",
        },
        warning: {
            iconBg: "bg-amber-100 dark:bg-amber-950/50",
            iconColor: "text-amber-600 dark:text-amber-400",
            accentColor: "bg-amber-500 dark:bg-amber-500",
        },
    };

    const config = typeConfig[type];

    return (
        <motion.div
            className={cn(
                "pointer-events-auto relative w-[356px] overflow-hidden rounded-lg shadow-lg",
                "border bg-white dark:bg-zinc-900",
                "border-zinc-200 dark:border-zinc-800",
                className
            )}
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={
                isVisible
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                    }
                    : {
                        opacity: 0,
                        y: -20,
                        scale: 0.95,
                    }
            }
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
            }}
        >
            <div className="flex items-start gap-3 p-4">
                {/* Animated Icon */}
                {type !== "default" && (
                    <motion.div
                        className={cn(
                            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                            config.iconBg
                        )}
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                            delay: 0.1,
                        }}
                    >
                        <div className={config.iconColor}>
                            {type === "success" && (
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <motion.path
                                        d="M13.5 4L6 11.5L2.5 8"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.2,
                                            ease: [0.16, 1, 0.3, 1] as Easing,
                                        }}
                                    />
                                </svg>
                            )}
                            {type === "error" && (
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <motion.path
                                        d="M12 4L4 12M4 4L12 12"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.2,
                                            ease: "easeOut" as Easing,
                                        }}
                                    />
                                </svg>
                            )}
                            {type === "info" && (
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <circle
                                        cx="8"
                                        cy="8"
                                        r="6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                    <motion.path
                                        d="M8 7V11M8 5H8.01"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.2,
                                            ease: [0.16, 1, 0.3, 1] as Easing,
                                        }}
                                    />
                                </svg>
                            )}
                            {type === "warning" && (
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path
                                        d="M8 2L14 13H2L8 2Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <motion.path
                                        d="M8 6V9M8 11H8.01"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.2,
                                            ease: [0.16, 1, 0.3, 1] as Easing,
                                        }}
                                    />
                                </svg>
                            )}
                        </div>
                    </motion.div>
                )}

                {/* Content */}
                <div className="flex-1 pt-0.5">
                    <motion.p
                        className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.3,
                            delay: 0.1,
                            ease: [0.16, 1, 0.3, 1] as Easing,
                        }}
                    >
                        {message}
                    </motion.p>
                    {description && (
                        <motion.p
                            className="mt-1 text-sm text-zinc-600 dark:text-zinc-400"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.3,
                                delay: 0.2,
                                ease: [0.16, 1, 0.3, 1] as Easing,
                            }}
                        >
                            {description}
                        </motion.p>
                    )}
                </div>

                {/* Close button */}
                <motion.button
                    onClick={() => {
                        setIsVisible(false);
                        setTimeout(() => onClose?.(), 300);
                    }}
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                            d="M9 3L3 9M3 3L9 9"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </motion.button>
            </div>

            {/* Progress Bar */}
            <div className="h-0.5 w-full bg-zinc-100 dark:bg-zinc-800">
                <motion.div
                    className={cn("h-full", config.accentColor)}
                    initial={{ width: "100%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.05, ease: "linear" as Easing }}
                />
            </div>
        </motion.div>
    );
}
