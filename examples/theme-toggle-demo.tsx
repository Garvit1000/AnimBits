"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggleCircular } from "@/registry/new-york/animations/transitions/theme-toggle-circular"
import { ThemeToggleSlideTop } from "@/registry/new-york/animations/transitions/theme-toggle-slide-top"
import { ThemeToggleSlideBottom } from "@/registry/new-york/animations/transitions/theme-toggle-slide-bottom"
import { ThemeToggleSlideLeft } from "@/registry/new-york/animations/transitions/theme-toggle-slide-left"
import { ThemeToggleSlideRight } from "@/registry/new-york/animations/transitions/theme-toggle-slide-right"

/**
 * Demo showcasing all theme toggle transition variants.
 * Each variant uses the View Transitions API for smooth theme switching.
 */
export default function ThemeToggleDemo() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light")

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark")
  }

  const ThemeIcon = () => (
    <>
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </>
  )

  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Theme Toggle Transitions</h1>
        <p className="text-muted-foreground">
          Click any button to switch themes with beautiful animations
        </p>
        <p className="text-sm text-muted-foreground">
          Current theme: <span className="font-semibold">{theme}</span>
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Circular Ripple */}
        <Card>
          <CardHeader>
            <CardTitle>Circular Ripple</CardTitle>
            <CardDescription>
              Expands from click position like a ripple in water
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ThemeToggleCircular onToggle={toggleTheme} theme={theme}>
              <Button variant="outline" size="icon" className="relative h-12 w-12">
                <ThemeIcon />
              </Button>
            </ThemeToggleCircular>
          </CardContent>
        </Card>

        {/* Slide from Top */}
        <Card>
          <CardHeader>
            <CardTitle>Slide from Top</CardTitle>
            <CardDescription>
              New theme slides down from the top edge
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ThemeToggleSlideTop onToggle={toggleTheme} theme={theme}>
              <Button variant="outline" size="icon" className="relative h-12 w-12">
                <ThemeIcon />
              </Button>
            </ThemeToggleSlideTop>
          </CardContent>
        </Card>

        {/* Slide from Bottom */}
        <Card>
          <CardHeader>
            <CardTitle>Slide from Bottom</CardTitle>
            <CardDescription>
              New theme slides up from the bottom edge
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ThemeToggleSlideBottom onToggle={toggleTheme} theme={theme}>
              <Button variant="outline" size="icon" className="relative h-12 w-12">
                <ThemeIcon />
              </Button>
            </ThemeToggleSlideBottom>
          </CardContent>
        </Card>

        {/* Slide from Left */}
        <Card>
          <CardHeader>
            <CardTitle>Slide from Left</CardTitle>
            <CardDescription>
              New theme slides in from the left edge
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ThemeToggleSlideLeft onToggle={toggleTheme} theme={theme}>
              <Button variant="outline" size="icon" className="relative h-12 w-12">
                <ThemeIcon />
              </Button>
            </ThemeToggleSlideLeft>
          </CardContent>
        </Card>

        {/* Slide from Right */}
        <Card>
          <CardHeader>
            <CardTitle>Slide from Right</CardTitle>
            <CardDescription>
              New theme slides in from the right edge
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ThemeToggleSlideRight onToggle={toggleTheme} theme={theme}>
              <Button variant="outline" size="icon" className="relative h-12 w-12">
                <ThemeIcon />
              </Button>
            </ThemeToggleSlideRight>
          </CardContent>
        </Card>

        {/* Custom Example */}
        <Card>
          <CardHeader>
            <CardTitle>Custom Trigger</CardTitle>
            <CardDescription>
              Works with any clickable element
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ThemeToggleCircular onToggle={toggleTheme} theme={theme}>
              <div className="cursor-pointer rounded-lg border-2 border-primary bg-primary/10 p-4 transition-colors hover:bg-primary/20">
                <p className="text-sm font-semibold">Click to Toggle</p>
                <p className="text-xs text-muted-foreground">Circular animation</p>
              </div>
            </ThemeToggleCircular>
          </CardContent>
        </Card>
      </div>

      {/* Browser Support Notice */}
      <Card className="border-2 border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>ℹ️</span> Browser Support
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm">
            Theme toggle transitions use the View Transitions API, supported in:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>Chrome 111+</li>
            <li>Edge 111+</li>
            <li>Opera 97+</li>
          </ul>
          <p className="text-sm text-muted-foreground">
            On unsupported browsers, themes switch instantly without animation.
          </p>
        </CardContent>
      </Card>

      {/* Code Example */}
      <Card>
        <CardHeader>
          <CardTitle>Usage Example</CardTitle>
          <CardDescription>
            How to implement theme toggle with circular animation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="rounded-lg bg-muted p-4 overflow-x-auto">
            <code className="text-sm">{`import { ThemeToggleCircular } from "@/components/ui/theme-toggle-circular"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <ThemeToggleCircular
      onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Button variant="ghost" size="icon">
        <Sun className="dark:hidden" />
        <Moon className="hidden dark:block" />
      </Button>
    </ThemeToggleCircular>
  )
}`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>
  )
}