import { type Variants, type Transition } from "framer-motion"

/**
 * Comprehensive animation presets for AnimBits
 * These can be imported and used across different animation components
 */

// ============================================
// ENTRANCE ANIMATIONS
// ============================================

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const slideInVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const slideDownVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

export const blurInVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { opacity: 1, filter: "blur(0px)" },
}

// ============================================
// CONTINUOUS ANIMATIONS (LOOPING)
// ============================================

export const pulseVariants: Variants = {
  initial: { scale: 1, opacity: 1 },
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
  },
}

export const bounceContinuousVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
  },
}

export const spinVariants: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
  },
}

export const heartbeatVariants: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.15, 1, 1.15, 1, 1, 1, 1],
  },
}

// ============================================
// ONE-SHOT ANIMATIONS (TRIGGERED)
// ============================================

export const bounceVariants: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.2, 0.9, 1.1, 1],
  },
}

export const wiggleVariants: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: [0, -10, 10, -10, 10, 0],
  },
}

export const shakeVariants: Variants = {
  initial: { x: 0 },
  animate: {
    x: [0, -10, 10, -10, 10, 0],
  },
}

export const popVariants: Variants = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: [0, 1.2, 1],
    opacity: [0, 1, 1],
  },
}

export const rotateVariants: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
  },
}

// ============================================
// HOVER/INTERACTIVE EFFECTS
// ============================================

export const liftVariants: Variants = {
  initial: { y: 0 },
  hover: { y: -8 },
}

export const glowVariants: Variants = {
  initial: {
    boxShadow: "0 0 0 rgba(0,0,0,0)",
  },
  hover: {
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
  },
}

export const pressVariants: Variants = {
  initial: { scale: 1 },
  tap: { scale: 0.95 },
}

export const tiltVariants: Variants = {
  initial: { rotateX: 0, rotateY: 0 },
}

// ============================================
// STAGGER CONFIGURATIONS
// ============================================

export const staggerConfig = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
}

export const cascadeConfig = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

export const staggerFastConfig = {
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
    },
  },
}

// ============================================
// LIST ITEM VARIANTS
// ============================================

export const listItemFadeVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const listItemSlideVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

export const listItemScaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

// ============================================
// PAGE TRANSITIONS
// ============================================

export const pageFadeVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const pageSlideVariants: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
}

export const pageScaleVariants: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.05 },
}

// ============================================
// TRANSITION PRESETS
// ============================================

export const transitions = {
  smooth: { duration: 0.3, ease: "easeInOut" } as Transition,
  quick: { duration: 0.15, ease: "easeOut" } as Transition,
  slow: { duration: 0.5, ease: "easeInOut" } as Transition,
  spring: { type: "spring", stiffness: 300, damping: 30 } as Transition,
  bouncy: { type: "spring", stiffness: 400, damping: 10 } as Transition,
  continuous: (duration: number = 1) => ({
    duration,
    ease: "linear",
    repeat: Infinity,
  } as Transition),
} as const

// ============================================
// HELPER FUNCTIONS
// ============================================

export const createContinuousTransition = (
  duration: number = 1,
  ease: string = "linear"
): Transition => ({
  duration,
  ease,
  repeat: Infinity,
})

export const createDelayedTransition = (
  delay: number,
  duration: number = 0.3
): Transition => ({
  delay,
  duration,
  ease: "easeOut",
})

export const createStaggerTransition = (
  staggerDelay: number = 0.1,
  delayChildren: number = 0
): Transition => ({
  staggerChildren: staggerDelay,
  delayChildren,
})
