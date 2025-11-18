"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import Link, { LinkProps } from "next/link"

export interface PageTransitionLinkProps extends Omit<LinkProps, "onClick"> {
  children: React.ReactNode
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Click handler callback (called after transition starts)
   */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

/**
 * Navigation link component with View Transitions API support.
 * Provides smooth page transitions when navigating between routes.
 *
 * @example
 * ```tsx
 * import { PageTransitionLink } from "@/components/animations/pages/page-transition-link"
 *
 * export function Navigation() {
 *   return (
 *     <nav className="flex gap-4">
 *       <PageTransitionLink href="/" className="hover:text-blue-600">
 *         Home
 *       </PageTransitionLink>
 *       <PageTransitionLink href="/about" className="hover:text-blue-600">
 *         About
 *       </PageTransitionLink>
 *     </nav>
 *   )
 * }
 * ```
 *
 * @example With custom onClick handler
 * ```tsx
 * <PageTransitionLink
 *   href="/destination"
 *   onClick={(e) => console.log('Navigation started')}
 *   className="inline-flex h-11 items-center gap-2 rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white"
 * >
 *   Navigate
 * </PageTransitionLink>
 * ```
 */
export function PageTransitionLink({
  href,
  children,
  className,
  onClick,
  ...props
}: PageTransitionLinkProps) {
  const router = useRouter()

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent default navigation
    e.preventDefault()

    // Call custom onClick if provided
    onClick?.(e)

    // Check if View Transitions API is supported
    if (typeof document === "undefined" || !document.startViewTransition) {
      // Fallback to instant navigation
      router.push(href.toString())
      return
    }

    // Perform transition
    const transition = document.startViewTransition(() => {
      router.push(href.toString())
    })

    // Wait for transition to be ready
    await transition.ready
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
}
