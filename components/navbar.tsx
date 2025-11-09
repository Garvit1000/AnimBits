"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedLogo } from "@/components/logo"
import { GithubButton } from "@/components/ui/github-button"

export function Navbar() {
  const [stars, setStars] = useState(0)

  useEffect(() => {
    fetch("https://api.github.com/repos/Garvit1000/AnimBits")
      .then(res => res.json())
      .then(data => {
        if (data.stargazers_count) {
          setStars(data.stargazers_count)
        }
      })
      .catch(() => {
        setStars(0)
      })
  }, [])

  return (
    <nav className="border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <AnimatedLogo className="w-8 h-8 text-neutral-900 dark:text-neutral-50" />
            <span className="font-semibold text-lg">Animbits</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="/docs" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors">
              Docs
            </Link>
            <Link href="/animations" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors">
              Animations
            </Link>
            <Link href="/examples" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors">
              Examples
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <GithubButton 
            repoUrl="https://github.com/Garvit1000/AnimBits"
            label="Star"
            targetStars={stars}
            showGithubIcon={true}
            showStarIcon={true}
            variant="default"
            size="sm"
            autoAnimate={true}
            filled={true}
          />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
