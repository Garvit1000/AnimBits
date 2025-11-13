
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
    default: "bg-slate-50 dark:bg-slate-950/50",
    grid: "bg-slate-50 dark:bg-slate-950/50 bg-[linear-gradient(to_right,rgb(148_163_184_/_0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184_/_0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgb(148_163_184_/_0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184_/_0.05)_1px,transparent_1px)] bg-[size:24px_24px]",
    dots: "bg-slate-50 dark:bg-slate-950/50 bg-[radial-gradient(rgb(148_163_184_/_0.15)_1px,transparent_1px)] dark:bg-[radial-gradient(rgb(148_163_184_/_0.05)_1px,transparent_1px)] bg-[size:16px_16px]",
    gradient: "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950",
  }

  return (
    <div className="not-prose relative my-6 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 px-4">
        <div className="flex h-12 items-center gap-2">
          <button
            onClick={() => setActiveTab("preview")}
            className={`relative h-10 rounded-lg px-4 text-sm font-medium transition-all ${
              activeTab === "preview"
                ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
            }`}
          >
            Preview
          </button>
          {code && (
            <button
              onClick={() => setActiveTab("code")}
              className={`relative h-10 rounded-lg px-4 text-sm font-medium transition-all ${
                activeTab === "code"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
              }`}
            >
              Code
            </button>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          {activeTab === "preview" && (
            <button
              onClick={handleReplay}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm"
              title="Replay animation"
            >
              <RotateCcw className="h-4 w-4" />
              <span className="hidden sm:inline">Replay</span>
            </button>
          )}
          
          {code && showCopy && activeTab === "code" && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span className="hidden sm:inline">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
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
          className={`flex min-h-[350px] items-center justify-center p-10 ${backgroundStyles[background]} ${className}`}
        >
          <div key={key}>
            {children}
          </div>
        </div>
      ) : (
        <div className="max-h-[500px] overflow-auto bg-slate-50 dark:bg-slate-950">
          <pre className="p-6 text-sm leading-relaxed">
            <code className="text-slate-800 dark:text-slate-200 font-mono">{code}</code>
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
    <div className={`not-prose grid gap-4 ${gridCols[cols]}`}>
      {children}
    </div>
  )
}