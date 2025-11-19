import { type MotionProps, type Easing } from "framer-motion";

export interface UseHoverGlowOptions {
  /**
   * Glow color (CSS color value)
   * @default "rgba(59, 130, 246, 0.5)" - Blue glow
   */
  glowColor?: string;

  /**
   * Glow blur radius (in pixels)
   * @default 20
   */
  glowBlur?: number;

  /**
   * Glow spread (in pixels)
   * @default 5
   */
  glowSpread?: number;

  /**
   * Animation duration (in seconds)
   * @default 0.3
   */
  duration?: number;

  /**
   * Animation easing
   * @default "easeOut"
   */
  ease?: Easing | Easing[];

  /**
   * Scale on hover (1 = no scale)
   * @default 1.02
   */
  scale?: number;

  /**
   * Whether to add inner glow
   * @default false
   */
  innerGlow?: boolean;
}

/**
 * Component-agnostic hover glow animation hook
 *
 * Returns MotionProps that can be spread onto any motion component
 * to add a glow effect on hover.
 *
 * @example
 * ```tsx
 * import { useHoverGlow } from "@/lib/hooks"
 * import { motion } from "framer-motion"
 *
 * function MyButton() {
 *   const glowProps = useHoverGlow({
 *     glowColor: "rgba(168, 85, 247, 0.5)"
 *   })
 *   return (
 *     <motion.button {...glowProps}>
 *       Hover me
 *     </motion.button>
 *   )
 * }
 * ```
 */
export function useHoverGlow(options: UseHoverGlowOptions = {}): MotionProps {
  const {
    glowColor = "rgba(59, 130, 246, 0.5)",
    glowBlur = 20,
    glowSpread = 5,
    duration = 0.3,
    ease = "easeOut",
    scale = 1.02,
    innerGlow = false,
  } = options;

  const baseShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
  const glowShadow = `0 0 ${glowBlur}px ${glowSpread}px ${glowColor}`;
  const innerGlowShadow = innerGlow
    ? `inset 0 0 ${glowBlur / 2}px ${glowColor}`
    : "";

  const hoverShadow = innerGlow
    ? `${baseShadow}, ${glowShadow}, ${innerGlowShadow}`
    : `${baseShadow}, ${glowShadow}`;

  return {
    initial: {
      scale: 1,
      boxShadow: baseShadow,
    },
    whileHover: {
      scale,
      boxShadow: hoverShadow,
    },
    transition: {
      duration,
      ease,
    },
  };
}
