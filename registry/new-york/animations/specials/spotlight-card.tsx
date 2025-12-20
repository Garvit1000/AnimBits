"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
    spotlightSize?: number;
    hoverScale?: number;
}

export function SpotlightCard({
    children,
    className,
    spotlightColor = "rgba(255, 255, 255, 0.25)",
    spotlightSize = 350,
    hoverScale = 1.05,
}: SpotlightCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(-spotlightSize);
    const mouseY = useMotionValue(-spotlightSize);

    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const handleMouseLeave = () => {
        // Leave logic
    };

    const spotlightGradient = useMotionTemplate`
    radial-gradient(
      ${spotlightSize}px circle at ${smoothMouseX}px ${smoothMouseY}px,
      ${spotlightColor},
      transparent 80%
    )
  `;

    return (
        <motion.div
            ref={cardRef}
            className={cn(
                "group relative overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900 shadow-sm",
                className
            )}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{
                scale: hoverScale,
                rotate: 0,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <motion.div
                className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: spotlightGradient }}
            />
            <motion.div
                className="pointer-events-none absolute inset-0 z-20 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    borderWidth: 2,
                    borderStyle: "solid",
                    borderColor: spotlightColor, // Dynamic border color matching spotlight
                    maskImage: spotlightGradient,
                    WebkitMaskImage: spotlightGradient,
                }}
            />
            <div
                className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />
            <div className="relative z-10 h-full w-full transition-transform duration-300 group-hover:translate-y-[-2px]">
                {children}
            </div>
        </motion.div>
    );
}
