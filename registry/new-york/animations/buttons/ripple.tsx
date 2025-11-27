"use client";
import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
interface RippleButtonProps extends Omit<HTMLMotionProps<"button">, "onClick"> {
  children: React.ReactNode;
  rippleColor?: string;
  duration?: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
interface Ripple {
  x: number;
  y: number;
  id: number;
}
export function RippleButton({
  children,
  className,
  rippleColor = "rgba(255, 255, 255, 0.6)",
  duration = 0.6,
  onClick,
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = React.useState<Ripple[]>([]);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = {
      x,
      y,
      id: Date.now(),
    };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, duration * 1000);
    onClick?.(e);
  };
  return (
    <motion.button
      ref={buttonRef}
      className={cn("relative overflow-hidden", className)}
      onClick={handleClick}
      {...props}
    >
      {children}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            backgroundColor: rippleColor,
          }}
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{
            width: 500,
            height: 500,
            opacity: 0,
            x: -250,
            y: -250,
          }}
          transition={{ duration, ease: "easeOut" }}
        />
      ))}
    </motion.button>
  );
}
