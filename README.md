# Animbits

A namespaced animation registry that provides reusable, production-ready motion presets for UI elements. Built on Framer Motion and compatible with the shadcn CLI.

## What is Animbits?

Animbits is a collection of pre-built animation components that you can install with a single command. No more writing repetitive Framer Motion code - just install the animation you need and apply it using a simple prop API.

## Features

-  **Namespaced Registry**: Organized by component type (icons, buttons, cards, lists, pages)
-  **One-Command Install**: Use the shadcn CLI to add animations to your project
-  **Production-Ready**: Battle-tested animations that work out of the box
-  **Simple API**: Clean prop-based interface for customization
-  **Fully Typed**: Built with TypeScript for excellent DX
-  **Framer Motion**: Powered by the industry-standard animation library

## Installation

First, ensure you have the shadcn CLI installed and configured in your project.

Then install animations using the `@animbits` namespace:

```bash
# Local development (run pnpm dev first)
npx shadcn@latest add http://localhost:3000/r/@animbits/icons/pulse
npx shadcn@latest add http://localhost:3000/r/@animbits/buttons/glow
npx shadcn@latest add http://localhost:3000/r/@animbits/cards/fade-in
```

## Available Animations

### Icons
- `@animbits/icons/pulse` - Pulsing animation with configurable triggers
- `@animbits/icons/bounce` - Bouncing animation with configurable triggers
- `@animbits/icons/rotate` - Rotating animation with configurable triggers

### Buttons
- `@animbits/buttons/press` - Press-down effect on tap
- `@animbits/buttons/glow` - Glow effect on hover
- `@animbits/buttons/lift` - Lift effect on hover

### Cards
- `@animbits/cards/hover-lift` - Lift with shadow on hover
- `@animbits/cards/fade-in` - Fade-in animation on mount
- `@animbits/cards/scale-in` - Scale-in animation on mount

### Lists
- `@animbits/lists/slide-in` - Staggered slide-in for list items
- `@animbits/lists/stagger-fade` - Staggered fade-in for list items

### Pages
- `@animbits/pages/page-transition` - Smooth page transitions
- `@animbits/pages/slide-transition` - Directional slide transitions

## Usage Examples

### Icon Animations

```tsx
import { PulseIcon } from "@/components/animations/icons/pulse"
import { Heart } from "lucide-react"

// Pulse on mount
<PulseIcon>
  <Heart />
</PulseIcon>

// Pulse on hover
<PulseIcon trigger="hover">
  <Heart />
</PulseIcon>
```

### Button Animations

```tsx
import { GlowButton } from "@/components/animations/buttons/glow"

<GlowButton className="px-4 py-2 bg-blue-500 text-white rounded">
  Click me
</GlowButton>
```

### Card Animations

```tsx
import { FadeInCard } from "@/components/animations/cards/fade-in"

<FadeInCard delay={0.2} className="p-6 border rounded-lg">
  <h3>Card Title</h3>
  <p>Card content</p>
</FadeInCard>
```

### List Animations

```tsx
import { SlideInList, SlideInItem } from "@/components/animations/lists/slide-in"

<SlideInList>
  <SlideInItem>Item 1</SlideInItem>
  <SlideInItem>Item 2</SlideInItem>
  <SlideInItem>Item 3</SlideInItem>
</SlideInList>
```

### Page Transitions

```tsx
import { PageTransition } from "@/components/animations/pages/page-transition"

export default function Page() {
  return (
    <PageTransition>
      <h1>Page Content</h1>
    </PageTransition>
  )
}
```

## Development

This registry is built using the shadcn registry template with Tailwind v4.

### Getting Started

```bash
# Install dependencies
pnpm install

# Build the registry
pnpm registry:build

# Start the dev server
pnpm dev
```

The registry will be available at `http://localhost:3000`

### Testing Locally

```bash
# In your test project
npx shadcn@latest add http://localhost:3000/r/@animbits/icons/pulse
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
