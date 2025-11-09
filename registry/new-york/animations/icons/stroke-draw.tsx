"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useStrokeDraw, type UseStrokeDrawOptions } from "@/lib/hooks/use-stroke-draw"

export interface StrokeDrawIconProps extends Omit<React.SVGProps<SVGSVGElement>, "children">, UseStrokeDrawOptions {
    /**
     * SVG path data
     */
    pathData: string
    /**
     * Stroke color
     * @default "currentColor"
     */
    strokeColor?: string
    /**
     * Stroke width
     * @default 2
     */
    strokeWidth?: number
}

/**
 * An icon that draws itself stroke by stroke.
 * Built using the useStrokeDraw() primitive hook.
 * 
 * @example
 * ```tsx
 * <StrokeDrawIcon 
 *   pathData="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
 *   viewBox="0 0 24 24"
 * />
 * ```
 * 
 * @example
 * ```tsx
 * // Use the hook directly for any SVG path
 * import { useStrokeDraw } from "@/lib/hooks/use-stroke-draw"
 * const strokeProps = useStrokeDraw({ duration: 2 })
 * <svg><motion.path d="M..." {...strokeProps} /></svg>
 * ```
 */
export function StrokeDrawIcon({
    pathData,
    className,
    duration,
    delay,
    repeat,
    ease,
    strokeColor = "currentColor",
    strokeWidth = 2,
    ...props
}: StrokeDrawIconProps) {
    const strokeProps = useStrokeDraw({ duration, delay, repeat, ease })

    return (
        <motion.svg
            className={cn(className)}
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox={props.viewBox || "0 0 24 24"}
            width={props.width}
            height={props.height}
        >
            <motion.path d={pathData} {...strokeProps} />
        </motion.svg>
    )
}
