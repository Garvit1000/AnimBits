import { type CSSProperties } from "react";

export interface UseShimmerOptions {
  duration?: number;
  colors?: [string, string, string];
}

export function useShimmer(options: UseShimmerOptions = {}): CSSProperties {
  const {
    duration = 2.5,
    colors = ["transparent", "rgba(255,255,255,0.8)", "transparent"],
  } = options;

  const gradient = `linear-gradient(90deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`;

  const animationName = "shimmer";

  if (typeof document !== "undefined") {
    const styleId = "shimmer-keyframes";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `;
      document.head.appendChild(style);
    }
  }

  return {
    display: "inline-block",
    backgroundImage: gradient,
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    animation: `${animationName} ${duration}s linear infinite`,
  };
}
