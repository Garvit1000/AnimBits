"use client"

import { Button } from "@/components/ui/button"
import { GithubButton } from "@/components/ui/github-button"
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
  stars?: number
  withGlow?: boolean
  className?: string
}

export function CTASection({
  badge,
  title,
  description,
  action,
  stars = 0,
  className,
}: CTAProps) {
  return (
    <section className={cn("relative overflow-hidden bg-white dark:bg-black py-24 md:py-32", className)}>
      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1000px] px-4 z-10">
        {/* Content */}
        <div className="relative flex flex-col items-center gap-8 text-center bg-transparent border-none rounded-none shadow-none">
          {/* Minimal Enterprise Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white/50 px-3 py-1 text-xs font-medium uppercase tracking-widest text-neutral-900 transition-colors dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-400 dark:bg-neutral-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-neutral-500 dark:bg-neutral-400"></span>
              </span>
              {badge.text}
            </div>
          )}

          {/* Title */}
          <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white md:text-6xl lg:text-7xl">
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full">
            <Button
              variant={action.variant || "default"}
              size="lg"
              className="h-14 px-8 text-base font-semibold gap-2 w-full sm:w-auto min-w-[200px] rounded-xl shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-all duration-300"
              asChild
            >
              <a href={action.href}>
                {action.text}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <div className="w-full sm:w-auto group">
              <GithubButton
                repoUrl="https://github.com/Garvit1000/AnimBits"
                label="Star on GitHub"
                targetStars={stars}
                showGithubIcon={true}
                showStarIcon={true}
                variant="outline"
                size="lg"
                autoAnimate={true}
                filled={true}
                className="h-14 px-8 text-base font-semibold w-full min-w-[200px] rounded-xl border-neutral-200 dark:border-white/10 dark:bg-black/50 dark:hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
