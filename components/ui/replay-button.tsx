"use client"

import { RotateCcw } from "lucide-react"
import { Button } from "./button"
import { cn } from "@/lib/utils"

interface ReplayButtonProps {
  onReplay: () => void
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
}

export function ReplayButton({ onReplay, className, size = "icon" }: ReplayButtonProps) {
  return (
    <Button
      variant="outline"
      size={size}
      onClick={onReplay}
      className={cn(
        "absolute right-2 top-2 h-8 w-8 rounded-full opacity-60 hover:opacity-100 transition-opacity",
        className
      )}
      aria-label="Replay animation"
    >
      <RotateCcw className="h-4 w-4" />
    </Button>
  )
}