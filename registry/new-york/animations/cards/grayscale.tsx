"use client"

import * as React from "react"
import * as motion from "framer-motion/client"
import type { HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface CardGrayscaleProps extends Omit<HTMLMotionProps<"div">, "children"> {
    /**
     * Card content
     */
    children: React.ReactNode
    /**
     * Animation duration in seconds
     * @default 0.5
     */
    duration?: number
}

/**
 * A card with grayscale to color transition effect on hover.
 * Perfect for image galleries and portfolio showcases.
 * 
 * @example
 * ```tsx
 * <CardGrayscale className="rounded-lg overflow-hidden">
 *   <img src="/photo.jpg" alt="Photo" className="w-full h-full object-cover" />
 * </CardGrayscale>
 * ```
 * 
 * @example
 * ```tsx
 * <CardGrayscale duration={0.8}>
 *   <img src="/photo.jpg" alt="Photo" />
 * </CardGrayscale>
 * ```
 */
export function CardGrayscale({
    children,
    className,
    duration = 0.5,
    ...props
}: CardGrayscaleProps) {
    const [isHovered, setIsHovered] = React.useState(false)

    return (
        <motion.div
            className={cn("relative overflow-hidden", className)}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={{
                filter: isHovered ? "grayscale(0%)" : "grayscale(100%)"
            }}
            transition={{ duration }}
            {...props}
        >
            {children}
        </motion.div>
    )
}
