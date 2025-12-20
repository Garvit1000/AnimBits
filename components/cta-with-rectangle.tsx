"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface CTAProps {
  badge?: {
    text: string
  }
  title: string
  description?: string
  action: {
    text: string
    href: string
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  }
  withGlow?: boolean
  className?: string
}

export function CTASection({
  badge,
  title,
  description,
  action,
  withGlow = true,
  className,
}: CTAProps) {
  return (
    <section className={cn("overflow-hidden bg-white dark:bg-black", className)}>
      <div className="relative mx-auto max-w-[1400px] px-4 py-24 md:py-32">
        {/* Content */}
        <div className="relative flex flex-col items-center gap-8 text-center z-10">
          {/* Badge */}
          {badge && (
            <Badge
              variant="outline"
              className="border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm"
            >
              <span className="text-neutral-700 dark:text-neutral-300 font-medium">{badge.text}</span>
            </Badge>
          )}

          {/* Title */}
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-5xl lg:text-6xl max-w-4xl">
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Button
              variant={action.variant || "default"}
              size="lg"
              className="h-12 px-8 text-base font-semibold gap-2 min-w-[200px]"
              asChild
            >
              <a href={action.href}>
                {action.text}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base font-semibold gap-2 min-w-[200px] bg-white dark:bg-neutral-900"
              asChild
            >
              <a href="https://github.com/garvit1000/animbits" target="_blank" rel="noopener noreferrer">
                Star on GitHub
                <span className="ml-1 text-neutral-500">★ 12</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
