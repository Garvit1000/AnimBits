# Theme Toggle Transitions

Production-ready theme toggle animations using the View Transitions API. These animations create smooth, visually appealing transitions when switching between light and dark themes.

## Features

- ✨ **5 Animation Variants** - Circular, Slide Top, Slide Bottom, Slide Left, Slide Right
- 🎯 **View Transitions API** - Native browser support for smooth page transitions
- 📱 **Responsive** - Works seamlessly across all screen sizes
- ♿ **Accessible** - Respects `prefers-reduced-motion`
- 🔄 **Fallback Support** - Gracefully degrades in unsupported browsers
- 🎨 **Framework Agnostic** - Works with any theme management solution

## Browser Support

The View Transitions API is supported in:
- Chrome 111+
- Edge 111+
- Opera 97+

For unsupported browsers, transitions fall back to instant theme changes.

## Installation

```bash
npx shadcn add @animbits/transitions/theme-toggle-circular
npx shadcn add @animbits/transitions/theme-toggle-slide-top
npx shadcn add @animbits/transitions/theme-toggle-slide-bottom
npx shadcn add @animbits/transitions/theme-toggle-slide-left
npx shadcn add @animbits/transitions/theme-toggle-slide-right
```

## Usage

### 1. Circular Ripple (Default)

Expands from the click position in a circular motion.

```tsx
import { ThemeToggleCircular } from "@/components/ui/theme-toggle-circular"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <ThemeToggleCircular
      onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Button variant="ghost" size="icon">
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </ThemeToggleCircular>
  )
}
```

### 2. Slide from Top

Theme slides down from the top edge.

```tsx
import { ThemeToggleSlideTop } from "@/components/ui/theme-toggle-slide-top"

<ThemeToggleSlideTop onToggle={toggleTheme}>
  <Button>Toggle Theme</Button>
</ThemeToggleSlideTop>
```

### 3. Slide from Bottom

Theme slides up from the bottom edge.

```tsx
import { ThemeToggleSlideBottom } from "@/components/ui/theme-toggle-slide-bottom"

<ThemeToggleSlideBottom onToggle={toggleTheme}>
  <Button>Toggle Theme</Button>
</ThemeToggleSlideBottom>
```

### 4. Slide from Left

Theme slides in from the left edge.

```tsx
import { ThemeToggleSlideLeft } from "@/components/ui/theme-toggle-slide-left"

<ThemeToggleSlideLeft onToggle={toggleTheme}>
  <Button>Toggle Theme</Button>
</ThemeToggleSlideLeft>
```

### 5. Slide from Right

Theme slides in from the right edge.

```tsx
import { ThemeToggleSlideRight } from "@/components/ui/theme-toggle-slide-right"

<ThemeToggleSlideRight onToggle={toggleTheme}>
  <Button>Toggle Theme</Button>
</ThemeToggleSlideRight>
```

## Integration Examples

### With next-themes

```tsx
"use client"

import { useTheme } from "next-themes"
import { ThemeToggleCircular } from "@/components/ui/theme-toggle-circular"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  
  return (
    <ThemeToggleCircular onToggle={toggleTheme}>
      <button className="p-2 rounded-md hover:bg-accent">
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </ThemeToggleCircular>
  )
}
```

### With Custom Theme Context

```tsx
import { useContext } from "react"
import { ThemeContext } from "@/context/theme"
import { ThemeToggleSlideBottom } from "@/components/ui/theme-toggle-slide-bottom"

export function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext)
  
  return (
    <ThemeToggleSlideBottom 
      onToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      theme={theme}
    >
      <Switch checked={theme === 'dark'} />
    </ThemeToggleSlideBottom>
  )
}
```

### In Navigation Bar

```tsx
import { ThemeToggleCircular } from "@/components/ui/theme-toggle-circular"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <Logo />
      <div className="flex items-center gap-4">
        <NavLinks />
        <ThemeToggleCircular onToggle={toggleTheme}>
          <ThemeIcon />
        </ThemeToggleCircular>
      </div>
    </nav>
  )
}
```

## Customization

### Animation Duration

Modify the animation duration in `globals.css`:

```css
::view-transition-group(root) {
  animation-duration: 0.3s; /* Faster */
  /* or */
  animation-duration: 0.8s; /* Slower */
}
```

### Custom Easing

Change the easing function:

```css
::view-transition-group(root) {
  animation-timing-function: ease-in-out;
  /* or */
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### Circular Origin Position

For the circular variant, you can customize where the circle starts:

```tsx
// Start from center instead of click position
document.documentElement.style.setProperty('--x', '50%')
document.documentElement.style.setProperty('--y', '50%')
```

## API Reference

### Common Props

All theme toggle components share these props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | The trigger element (button, icon, etc.) |
| `onToggle` | `() => void` | - | Callback when theme should toggle |
| `theme` | `"light" \| "dark"` | - | Current theme (optional) |
| `className` | `string` | - | Additional CSS classes |

## Performance

- ✅ Hardware accelerated using GPU
- ✅ No JavaScript animation loop (pure CSS)
- ✅ Minimal bundle size impact (~1KB per variant)
- ✅ No dependencies beyond React

## Accessibility

- Respects `prefers-reduced-motion` setting
- Compatible with screen readers
- Keyboard navigation support through child elements
- No accessibility barriers

## Troubleshooting

### Transition not working

1. Check browser support (Chrome 111+, Edge 111+)
2. Ensure CSS is properly imported in `globals.css`
3. Verify `document.startViewTransition` is available

### Flash of wrong theme

Ensure theme is set before hydration:

```tsx
// In your root layout
<html suppressHydrationWarning>
  <body className={theme}>
    {children}
  </body>
</html>
```

### Animation feels janky

- Reduce animation duration
- Simplify theme color palette
- Check for heavy re-renders during transition

## Examples

See the [showcase page](../../../../../../app/page.tsx) for live examples of all variants.

## Contributing

Found a bug or have a feature request? Please open an issue on [GitHub](https://github.com/yourusername/animbits).

## License

MIT