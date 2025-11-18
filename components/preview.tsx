"use client"

import * as React from "react"
import { RotateCcw, Copy, Check } from "lucide-react"

interface PreviewProps {
  children: React.ReactNode
  code?: string
  className?: string
  showCopy?: boolean
  background?: "default" | "grid" | "dots" | "gradient"
}

export function Preview({
  children,
  code,
  className = "",
  showCopy = true,
  background = "default",
}: PreviewProps) {
  const [activeTab, setActiveTab] = React.useState<"preview" | "code">("preview")
  const [copied, setCopied] = React.useState(false)
  const [key, setKey] = React.useState(0)

  const handleCopy = async () => {
    if (!code) return
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleReplay = () => {
    setKey(prev => prev + 1)
  }

  const backgroundStyles = {
    default: "bg-background",
    grid: "bg-background bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem]",
    dots: "bg-background bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] bg-[size:1rem_1rem]",
    gradient: "bg-gradient-to-br from-background via-muted/30 to-background",
  }

  return (
    <div className="group relative my-6 overflow-hidden rounded-lg border">
      {/* Header */}
      <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-3">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab("preview")}
            className={`relative inline-flex h-8 items-center justify-center rounded-md px-3 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
              activeTab === "preview"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:bg-background/60 hover:text-foreground"
            }`}
          >
            Preview
          </button>
          {code && (
            <button
              onClick={() => setActiveTab("code")}
              className={`relative inline-flex h-8 items-center justify-center rounded-md px-3 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                activeTab === "code"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-background/60 hover:text-foreground"
              }`}
            >
              Code
            </button>
          )}
        </div>
        
        <div className="flex items-center gap-1">
          {activeTab === "preview" && (
            <button
              onClick={handleReplay}
              className="inline-flex h-8 items-center justify-center gap-2 rounded-md px-3 text-sm font-medium text-muted-foreground ring-offset-background transition-colors hover:bg-background/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              title="Replay animation"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Replay</span>
            </button>
          )}
          
          {code && showCopy && activeTab === "code" && (
            <button
              onClick={handleCopy}
              className="inline-flex h-8 items-center justify-center gap-2 rounded-md px-3 text-sm font-medium text-muted-foreground ring-offset-background transition-colors hover:bg-background/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Copy</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      {activeTab === "preview" ? (
        <div
          className={`flex min-h-[350px] w-full items-center justify-center p-10 ${backgroundStyles[background]} ${className}`}
        >
          <div key={key} className="w-full flex items-center justify-center">
            {children}
          </div>
        </div>
      ) : (
        <div className="max-h-[500px] overflow-auto">
          <pre className="p-6">
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">{code}</code>
          </pre>
        </div>
      )}
    </div>
  )
}

export function PreviewGrid({
  children,
  cols = 2,
}: {
  children: React.ReactNode
  cols?: 1 | 2 | 3 | 4
}) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={`grid gap-4 ${gridCols[cols]}`}>
      {children}
    </div>
  )
}