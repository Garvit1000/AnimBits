# Contributing to Animbits

Thank you for your interest in contributing to Animbits! This guide will help you add new animations to the registry.

## Project Structure

```
animbits/
├── registry/
│   └── new-york/
│       └── animations/
│           ├── icons/          # Icon animations
│           ├── buttons/        # Button animations
│           ├── cards/          # Card animations
│           ├── lists/          # List animations
│           └── pages/          # Page transition animations
├── lib/
│   └── animation-presets.ts   # Shared animation variants
├── registry.json              # Registry configuration
└── README.md
```

## Adding a New Animation

### 1. Create the Animation Component

Create a new file in the appropriate namespace folder:

```tsx
// registry/new-york/animations/[namespace]/[animation-name].tsx
"use client"

import { motion, type Variants } from "framer-motion"
import { type ComponentProps } from "react"

const variants: Variants = {
  // Define your animation variants
}

interface AnimatedComponentProps extends ComponentProps<typeof motion.div> {
  children: React.ReactNode
  // Add custom props
}

export function YourAnimation({ children, ...props }: AnimatedComponentProps) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      {...props}
    >
      {children}
    </motion.div>
  )
}
```

### 2. Register in registry.json

Add your animation to the `items` array:

```json
{
  "name": "namespace/animation-name",
  "type": "registry:component",
  "title": "Animation Title",
  "description": "Brief description of the animation",
  "dependencies": ["framer-motion"],
  "files": [
    {
      "path": "registry/new-york/animations/namespace/animation-name.tsx",
      "type": "registry:component"
    }
  ]
}
```

### 3. Build and Test

```bash
# Build the registry
pnpm registry:build

# Test installation
npx shadcn@latest add http://localhost:3000/r/namespace/animation-name
```

## Animation Guidelines

### Best Practices

1. **Use "use client" directive**: All animation components must be client components
2. **Export named components**: Use descriptive PascalCase names
3. **Extend motion props**: Allow users to pass additional Framer Motion props
4. **Provide sensible defaults**: Make animations work out of the box
5. **Keep it simple**: Focus on one animation pattern per component
6. **Type everything**: Use TypeScript for all props and variants

### Performance

- Prefer `transform` and `opacity` for animations (GPU-accelerated)
- Avoid animating `width`, `height`, or `top/left` when possible
- Use `will-change` sparingly
- Test on lower-end devices

### Naming Conventions

- **Files**: kebab-case (e.g., `fade-in.tsx`)
- **Components**: PascalCase (e.g., `FadeInCard`)
- **Props**: camelCase (e.g., `trigger`, `delay`)
- **Namespaces**: lowercase (e.g., `icons`, `buttons`)

## Namespaces

### Current Namespaces

- `icons/` - Animations for icon elements
- `buttons/` - Button interaction animations
- `cards/` - Card component animations
- `lists/` - List and list item animations
- `pages/` - Page transition animations

### Adding a New Namespace

1. Create the folder: `registry/new-york/animations/[namespace]/`
2. Add at least 2-3 animations to the namespace
3. Update README.md with the new namespace
4. Add examples to the documentation

## Common Patterns

### Trigger-based Animations

```tsx
interface Props {
  trigger?: "hover" | "tap" | "mount"
}

const animationProps = {
  initial: "initial",
  ...(trigger === "mount" && { animate: "animate" }),
  ...(trigger === "hover" && { whileHover: "animate" }),
  ...(trigger === "tap" && { whileTap: "animate" }),
}
```

### Staggered List Animations

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}
```

### Delay Support

```tsx
interface Props {
  delay?: number
}

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay }}
/>
```

## Testing Checklist

Before submitting a PR:

- [ ] Animation works in both light and dark mode
- [ ] Component is properly typed
- [ ] Props are documented with JSDoc comments
- [ ] Animation is smooth (60fps)
- [ ] Works on mobile devices
- [ ] Registered in registry.json
- [ ] README updated if adding new namespace
- [ ] Example usage provided

## Questions?

Open an issue or discussion on GitHub!
