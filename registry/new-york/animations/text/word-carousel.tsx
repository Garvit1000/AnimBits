"use client";
import * as React from "react";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  useWordCarousel,
  type UseWordCarouselOptions,
} from "@/lib/hooks/use-word-carousel";
export interface TextWordCarouselProps
  extends Omit<HTMLMotionProps<"span">, "children">,
    UseWordCarouselOptions {
  duration?: number;
}
export function TextWordCarousel({
  words,
  interval,
  className,
  duration = 0.3,
  ...props
}: TextWordCarouselProps) {
  const { currentWord, key } = useWordCarousel({ words, interval });
  return (
    <span className={cn("inline-block relative", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration }}
          className="inline-block"
          {...props}
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
