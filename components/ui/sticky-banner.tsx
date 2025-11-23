"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const StickyBanner = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "relative z-40 flex w-full items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-4 py-2.5 text-white shadow-md",
            className
          )}
        >
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            {children}
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
            aria-label="Close banner"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
