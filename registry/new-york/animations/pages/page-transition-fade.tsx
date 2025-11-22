"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
export interface PageTransitionFadeProps {
  children: React.ReactNode;
  duration?: number;
  ease?: string;
}
export function PageTransitionFade({
  children,
  duration = 0.3,
  ease = "ease-in-out",
}: PageTransitionFadeProps) {
  const pathname = usePathname();
  React.useEffect(() => {
    if (typeof document === "undefined" || !document.startViewTransition) {
      return;
    }
    document.documentElement.style.setProperty(
      "--page-transition-duration",
      `${duration}s`,
    );
    document.documentElement.style.setProperty("--page-transition-ease", ease);
  }, [pathname, duration, ease]);
  return <>{children}</>;
}
