/**
 * AnimBits Animation Primitive Hooks
 * 
 * Component-agnostic animation hooks that work with any element via Framer Motion.
 * Use these hooks to add animations to any motion component without being locked
 * into specific component types.
 * 
 * @example
 * ```tsx
 * import { useHoverLift, useFadeIn } from "@/lib/hooks"
 * import { motion } from "framer-motion"
 * 
 * function MyComponent() {
 *   const lift = useHoverLift()
 *   const fade = useFadeIn()
 *   
 *   return (
 *     <motion.div {...lift} {...fade}>
 *       Lifts on hover and fades in
 *     </motion.div>
 *   )
 * }
 * ```
 */

// Interaction hooks
export { useHoverLift, type UseHoverLiftOptions } from "./use-hover-lift"
export { useHoverGlow, type UseHoverGlowOptions } from "./use-hover-glow"
export { usePress, type UsePressOptions } from "./use-press"

// Entrance hooks
export { useFadeIn, type UseFadeInOptions } from "./use-fade-in"
export { useScaleIn, type UseScaleInOptions } from "./use-scale-in"
export { useSlideIn, type UseSlideInOptions, type SlideDirection } from "./use-slide-in"

// Continuous hooks
export { usePulse, type UsePulseOptions } from "./use-pulse"
export { useBounce, type UseBounceOptions } from "./use-bounce"