"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface CardFrostedGlassProps extends Omit<HTMLMotionProps<"div">, "children"> {
    /**
     * Card content
     */
    children: React.ReactNode
    /**
     * Animation duration in seconds
     * @default 0.5
     */
    duration?: number
    /**
     * Blur amount in pixels
     * @default 12
     */
    blurAmount?: number
}

/**
 * A card with frosted glass effect that reveals on hover.
 * 
 * @example
 * ```tsx
 * <CardFrostedGlass className="p-6 bg-white/10 rounded-lg">
 *   <h3>Glass Card</h3>
 *   <p>Hover to reveal</p>
 * </CardFrostedGlass>
 * ```
 * 
 * @example
 * ```tsx
 * <CardFrostedGlass blurAmount={20} duration={0.8}>
 *   <h3>Heavy Blur</h3>
 * </CardFrostedGlass>
 * ```
 */
export function CardFrostedGlass({
    children,
    className,
    duration = 0.5,
    blurAmount = 12,
    ...props
}: CardFrostedGlassProps) {
    const [isHovered, setIsHovered] = React.useState(false)

    return (
        <motion.div
            className={cn("relative overflow-hidden backdrop-blur-sm", className)}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            {...props}
        >
            <motion.div
                className="absolute inset-0"
                style={{
                    backdropFilter: `blur(${blurAmount}px)`,
                    WebkitBackdropFilter: `blur(${blurAmount}px)`,
                }}
                animate={{
                    opacity: isHovered ? 0 : 1,
                }}
                transition={{ duration }}
            />
            <div className="relative z-10">{children}</div>
        </motion.div>
    )
}
