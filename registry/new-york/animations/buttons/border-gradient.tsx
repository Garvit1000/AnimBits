"use client";
import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
interface BorderGradientButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  duration?: number;
  colors?: string[];
}
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
export function BorderGradientButton({
  children,
  className,
  duration = 2,
  colors = ["#3b82f6", "#8b5cf6", "#ec4899"],
  ...props
}: BorderGradientButtonProps) {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [dimensions, setDimensions] = React.useState({
    width: 0,
    height: 0,
    radius: 0,
    perimeter: 0,
  });
  const gradientId = React.useId();
  React.useEffect(() => {
    if (!buttonRef.current) return;
    const updateDimensions = () => {
      if (buttonRef.current) {
        const styles = window.getComputedStyle(buttonRef.current);
        const width = buttonRef.current.offsetWidth;
        const height = buttonRef.current.offsetHeight;
        const borderRadius =
          parseFloat(styles.borderTopLeftRadius) ||
          parseFloat(styles.borderRadius) ||
          0;
        const maxRadius = Math.min(width, height) / 2;
        const actualRadius = Math.min(borderRadius, maxRadius);
        const straightEdges =
          2 * (width - 2 * actualRadius + (height - 2 * actualRadius));
        const curvedEdges = 2 * Math.PI * actualRadius;
        const perimeter = straightEdges + curvedEdges;
        setDimensions({
          width,
          height,
          radius: actualRadius,
          perimeter: perimeter || 1,
        });
      }
    };
    updateDimensions();
    const observer = new ResizeObserver(updateDimensions);
    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <motion.button
      ref={buttonRef}
      className={cn("relative", className)}
      {...props}
    >
      {}
      {dimensions.width > 0 && (
        <svg
          className="absolute inset-0 pointer-events-none"
          width={dimensions.width}
          height={dimensions.height}
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              {colors.map((color, i) => (
                <stop
                  key={i}
                  offset={`${(i / (colors.length - 1)) * 100}%`}
                  stopColor={color}
                />
              ))}
            </linearGradient>
          </defs>
          <motion.rect
            x="1"
            y="1"
            width={dimensions.width - 2}
            height={dimensions.height - 2}
            rx={dimensions.radius}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeDasharray={dimensions.perimeter}
            strokeDashoffset={0}
            animate={{ strokeDashoffset: [0, -dimensions.perimeter] }}
            transition={{
              duration,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{
              strokeLinecap: "round",
            }}
          />
        </svg>
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
