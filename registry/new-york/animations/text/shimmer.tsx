"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useShimmer, type UseShimmerOptions } from "@/lib/hooks/use-shimmer"

export interface TextShimmerProps extends React.HTMLAttributes<HTMLParagraphElement>, UseShimmerOptions {
  /**
   * The text content to animate
   */
  children: string
  /**
   * HTML element to render
   * @default "p"
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
}

/**
 * A text component with a smooth gradient shimmer effect.
 * Uses pure CSS animation for 60fps performance - no lag!
 *
 * @example
 * ```tsx
 * <TextShimmer>Shimmer Text</TextShimmer>
 * ```
 *
 * @example
 * ```tsx
 * <TextShimmer
 *   duration={3}
 *   colors={["transparent", "rgba(59, 130, 246, 0.8)", "transparent"]}
 * >
 *   Custom Shimmer
 * </TextShimmer>
 * ```
 *
 * @example
 * ```tsx
 * // Use the hook directly for any element
 * import { useShimmer } from "@/lib/hooks/use-shimmer"
 * const shimmerStyle = useShimmer()
 * <h1 style={shimmerStyle}>Title</h1>
 * ```
 */
export function TextShimmer({
  children,
  className,
  duration,
  colors,
  as: Component = "p",
  ...props
}: TextShimmerProps) {
  const shimmerStyle = useShimmer({
    duration,
    colors: colors || [
      "transparent",
      "#3b82f6", // Blue-500
      "transparent",
    ],
  })

  return (
    <Component
      style={shimmerStyle}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  )
}
