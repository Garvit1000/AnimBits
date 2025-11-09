/**
 * AnimBits Animation Primitive Hooks
 *
 * Component-agnostic animation hooks that work with any element via Framer Motion.
 * Use these hooks to add animations to any motion component without being locked
 * into specific component types.
 */

// Interaction hooks (Framer Motion based)
export { useHoverLift, type UseHoverLiftOptions } from "./use-hover-lift"
export { useHoverGlow, type UseHoverGlowOptions } from "./use-hover-glow"
export { usePress, type UsePressOptions } from "./use-press"
export { useMagnetic, type UseMagneticOptions } from "./use-magnetic"
export { useParallaxTilt, type UseParallaxTiltOptions } from "./use-parallax-tilt"

// Entrance hooks (Framer Motion based)
export { useFadeIn, type UseFadeInOptions } from "./use-fade-in"
export { useScaleIn, type UseScaleInOptions } from "./use-scale-in"
export { useSlideIn, type UseSlideInOptions, type SlideDirection } from "./use-slide-in"

// Continuous hooks (Framer Motion based)
export { usePulse, type UsePulseOptions } from "./use-pulse"
export { useBounce, type UseBounceOptions } from "./use-bounce"

// Text animation hooks (CSS based for performance)
export { useShimmer, type UseShimmerOptions } from "./use-shimmer"
export { useScramble, type UseScrambleOptions } from "./use-scramble"
export { useWordCarousel, type UseWordCarouselOptions } from "./use-word-carousel"

// SVG animation hooks
export { useStrokeDraw, type UseStrokeDrawOptions } from "./use-stroke-draw"
