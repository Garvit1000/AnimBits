"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedLogo } from "@/components/logo"
import { GithubButton } from "@/components/ui/github-button"

export function Navbar() {
  const [stars, setStars] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

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

  const handleSearchClick = () => {
    // Trigger the search dialog using keyboard event
    const event = new KeyboardEvent('keydown', {
      key: 'k',
      metaKey: true,
      ctrlKey: true,
      bubbles: true
    });
    document.dispatchEvent(event);
    setIsOpen(false);
  }

  return (
    <nav className="border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex items-center justify-between h-16 2xl:h-20 px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 2xl:gap-3" onClick={() => setIsOpen(false)}>
            <AnimatedLogo className="w-10 h-10 2xl:w-12 2xl:h-12 text-neutral-900 dark:text-neutral-50" />
            <span className="font-semibold text-lg 2xl:text-xl">Animbits</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 2xl:gap-8">
            <Link href="/docs" className="text-sm 2xl:text-base text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors">
              Docs
            </Link>
            <Link href="/docs/animations/buttons/lift" className="text-sm 2xl:text-base text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors">
              Animations
            </Link>
            <Link href="/playground" className="text-sm 2xl:text-base text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors">
              Playground
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 2xl:gap-3">
          <button
            onClick={handleSearchClick}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm 2xl:text-base text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 border border-neutral-200 dark:border-neutral-800 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Search...</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-xs bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded">
              ⌘K
            </kbd>
          </button>

          <Link
            href="https://twitter.com/Garvit1000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-md transition-colors"
            aria-label="X (Twitter)"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>

          <div className="hidden md:block">
            <GithubButton
              repoUrl="https://github.com/Garvit1000/AnimBits"
              label="Star"
              initialStars={stars}
              targetStars={stars}
              showGithubIcon={true}
              showStarIcon={true}
              variant="default"
              size="sm"
              autoAnimate={false}
              filled={true}
            />
          </div>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link
              href="/docs"
              className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50"
              onClick={() => setIsOpen(false)}
            >
              Docs
            </Link>
            <Link
              href="/docs/animations/buttons/lift"
              className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50"
              onClick={() => setIsOpen(false)}
            >
              Animations
            </Link>
            <Link
              href="/playground"
              className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50"
              onClick={() => setIsOpen(false)}
            >
              Playground
            </Link>
            <button
              onClick={handleSearchClick}
              className="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50"
            >
              <Search className="w-4 h-4" />
              Search...
            </button>
            <div className="flex items-center gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <ThemeToggle />
              <Link
                href="https://twitter.com/Garvit1000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <GithubButton
                repoUrl="https://github.com/Garvit1000/AnimBits"
                label="Star"
                initialStars={stars}
                targetStars={stars}
                showGithubIcon={true}
                showStarIcon={true}
                variant="default"
                size="sm"
                autoAnimate={false}
                filled={true}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
