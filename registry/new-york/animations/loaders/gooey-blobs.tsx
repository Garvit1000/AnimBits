"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface LoaderGooeyBlobsProps extends Omit<HTMLMotionProps<"div">, "children"> {
  /**
   * Size of each blob in pixels
   * @default 20
   */
  size?: number
  /**
   * Color of the blobs
   * @default "currentColor"
   */
  color?: string
  /**
   * Animation duration in seconds
   * @default 1.5
   */
  duration?: number
}

/**
 * A gooey blobs loader with merging effect.
 * 
 * @example
 * ```tsx
 * <LoaderGooeyBlobs />
 * ```
 * 
 * @example
 * ```tsx
 * <LoaderGooeyBlobs size={30} color="#3b82f6" duration={2} />
 * ```
 */
export function LoaderGooeyBlobs({
  className,
  size = 20,
  color = "currentColor",
  duration = 1.5,
  ...props
}: LoaderGooeyBlobsProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg width="0" height="0">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="gooey"
            />
            <feBlend in="SourceGraphic" in2="gooey" />
          </filter>
        </defs>
      </svg>
      <div style={{ filter: "url(#gooey)" } as React.CSSProperties} className="flex gap-1">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
            }}
            animate={{
              x: [0, 15, 0, -15, 0],
              scale: [1, 1.2, 1, 1.2, 1],
            }}
            transition={{
              duration,
              ease: "easeInOut",
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  )
}
