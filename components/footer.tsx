import Link from "next/link"
import { AnimatedLogo } from "@/components/logo"
import { Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-white dark:bg-black text-neutral-600 dark:text-neutral-400 overflow-hidden pt-20 border-t border-neutral-200 dark:border-white/5 transition-colors duration-300">

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 xl:gap-8 pb-32">
          {/* Logo and Description */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="mb-6 inline-flex items-center gap-3">
                <AnimatedLogo className="h-8 w-8 text-neutral-900 dark:text-neutral-200" />
                <span className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight">AnimBits</span>
              </Link>
              <p className="mb-6 max-w-sm text-sm leading-relaxed text-neutral-400">
                Beautiful, production-ready animations and components for React and Next.js.
                Copy, paste, and customize easily. We provide the tools so you can focus on building.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-3 sm:grid-cols-4 lg:gap-8">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-neutral-900 dark:text-white">Product</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/docs/animations" className="transition-colors hover:text-neutral-900 dark:hover:text-white">Animations</Link></li>
                <li><Link href="/docs/animations/buttons/lift" className="transition-colors hover:text-neutral-900 dark:hover:text-white">Components</Link></li>
                <li><Link href="/docs/hooks" className="transition-colors hover:text-neutral-900 dark:hover:text-white">Hooks</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-neutral-900 dark:text-white">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/docs" className="transition-colors hover:text-neutral-900 dark:hover:text-white">Documentation</Link></li>
                <li><Link href="/showcase" className="transition-colors hover:text-neutral-900 dark:hover:text-white">Showcase</Link></li>
                <li><Link href="https://github.com/Garvit1000/AnimBits/issues" className="transition-colors hover:text-neutral-900 dark:hover:text-white">Submit Issue</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-neutral-900 dark:text-white">Community</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="https://github.com/Garvit1000/AnimBits" target="_blank" className="transition-colors hover:text-neutral-900 dark:hover:text-white">Source Code</Link></li>
                <li><Link href="https://opensource.org/licenses/MIT" target="_blank" className="transition-colors hover:text-neutral-900 dark:hover:text-white">MIT License</Link></li>
                <li><Link href="https://github.com/Garvit1000/AnimBits/pulls" target="_blank" className="transition-colors hover:text-neutral-900 dark:hover:text-white">Contribute</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-neutral-900 dark:text-white">Connect</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="https://github.com/Garvit1000" target="_blank" className="inline-flex items-center gap-2 transition-colors hover:text-neutral-900 dark:hover:text-white">
                    <Github className="h-4 w-4" /> Garvit Joshi
                  </Link>
                </li>
                <li>
                  <Link href="https://x.com/Garvit1000" target="_blank" className="inline-flex items-center gap-2 transition-colors hover:text-neutral-900 dark:hover:text-white">
                    <Twitter className="h-4 w-4" /> Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 pb-24 text-sm sm:flex-row">
          <div className="flex items-center gap-2 text-xs font-medium tracking-wide">
            <span>© {new Date().getFullYear()} AnimBits. Made with love for the React community.</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium opacity-70">
            <Link href="https://animbits.dev" className="transition-colors hover:text-neutral-900 dark:hover:text-white">animbits.dev</Link>
          </div>
        </div>

        {/* Massive Background Text */}
        <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 text-[18vw] font-black text-neutral-900/[0.03] dark:text-white/10 tracking-tighter whitespace-nowrap pointer-events-none select-none z-0">
          AnimBits
        </div>
      </div>
    </footer>
  )
}
