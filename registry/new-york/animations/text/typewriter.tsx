"use client";
import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
export interface TextTypewriterProps
  extends Omit<HTMLMotionProps<"p">, "children"> {
  children: string;
  delay?: number;
  speed?: number;
  cursor?: boolean;
  cursorChar?: string;
}
export function TextTypewriter({
  children,
  className,
  delay = 0,
  speed = 30,
  cursor = true,
  cursorChar = "|",
  ...props
}: TextTypewriterProps) {
  const [displayedText, setDisplayedText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isComplete, setIsComplete] = React.useState(false);
  React.useEffect(() => {
    if (currentIndex === 0) {
      const startTimeout = setTimeout(() => {
        setCurrentIndex(1);
      }, delay * 1000);
      return () => clearTimeout(startTimeout);
    }
    if (currentIndex <= children.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(children.slice(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, 1000 / speed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, children, delay, speed]);
  return (
    <motion.p className={cn(className)} {...props}>
      {displayedText}
      {cursor && !isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="inline-block"
        >
          {cursorChar}
        </motion.span>
      )}
    </motion.p>
  );
}
