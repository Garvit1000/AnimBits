# Animation Primitive Hooks

Component-agnostic animation hooks that work with any HTML element via Framer Motion.

## Philosophy

These hooks are **primitives** - they work with any element, not just buttons or cards. Categories in the registry are organizational namespaces for examples, not restrictions.

## Usage

Import and apply to any motion component:

```tsx
import { useHoverLift } from "@/lib/hooks"
import { motion } from "framer-motion"

function MyComponent() {
  const liftProps = useHoverLift({ liftDistance: 12 })
  return <motion.div {...liftProps}>Content</motion.div>
}
```

## Available Hooks

### Interaction Hooks
- `useHoverLift()` - Lift element on hover with optional shadow
- `useHoverGlow()` - Add glow effect on hover
- `usePress()` - Press-down feedback on tap

### Entrance Hooks
- `useFadeIn()` - Fade in animation
- `useScaleIn()` - Scale in animation
- `useSlideIn()` - Slide in from any direction

### Continuous Hooks
- `usePulse()` - Continuous pulsing animation
- `useBounce()` - Bounce animation

## Composing Animations

You can combine multiple hooks using the spread operator:

```tsx
import { useHoverLift, useHoverGlow } from "@/lib/hooks"

function FancyButton() {
  const lift = useHoverLift()
  const glow = useHoverGlow({ glowColor: "rgba(168, 85, 247, 0.5)" })
  
  const combined = {
    ...lift,
    whileHover: {
      ...lift.whileHover,
      ...glow.whileHover,
    }
  }
  
  return <motion.button {...combined}>Lift + Glow</motion.button>
}
```

## TypeScript

All hooks export their options interface:

```tsx
import { useHoverLift, type UseHoverLiftOptions } from "@/lib/hooks"

const options: UseHoverLiftOptions = {
  liftDistance: 12,
  addShadow: true,
  duration: 0.3
}

const props = useHoverLift(options)