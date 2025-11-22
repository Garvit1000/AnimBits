"use client";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useHoverGlow } from "@/lib/use-hover-glow";
interface GlowButtonProps extends Omit<HTMLMotionProps<"button">, "animate"> {
  children: React.ReactNode;
  glowColor?: string;
  intensity?: number;
}
export function GlowButton({
  children,
  glowColor = "rgba(59, 130, 246, 0.5)",
  intensity = 20,
  ...props
}: GlowButtonProps) {
  const glowProps = useHoverGlow({
    glowColor,
    glowBlur: intensity,
  });
  return (
    <motion.button {...glowProps} {...props}>
      {children}
    </motion.button>
  );
}
