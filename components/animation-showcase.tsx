"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check, RotateCcw } from "lucide-react"

interface AnimationShowcaseProps {
    title: string
    description: string
    preview: React.ReactNode
    codeSnippet: string
    variant?: "card" | "full" | "minimal"
}

export function AnimationShowcase({
    title,
    description,
    preview,
    codeSnippet,
    variant = "card"
}: AnimationShowcaseProps) {
    const [copied, setCopied] = useState(false)
    const [key, setKey] = useState(0)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(codeSnippet)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleReplay = () => {
        setKey(prev => prev + 1)
    }

    if (variant === "full") {
        return (
            <div className="group relative overflow-hidden rounded-lg border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
                <div className="p-6 space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
                    </div>
                    
                    <div className="relative flex min-h-[200px] w-full items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
                        <div key={key} className="w-full h-full flex items-center justify-center">
                            {preview}
                        </div>
                        <Button
                            onClick={handleReplay}
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <RotateCcw className="h-3.5 w-3.5" />
                        </Button>
                    </div>

                    <Button
                        onClick={handleCopy}
                        variant="outline"
                        className="w-full gap-2"
                        size="sm"
                    >
                        {copied ? (
                            <>
                                <Check className="h-4 w-4" />
                                Copied
                            </>
                        ) : (
                            <>
                                <Copy className="h-4 w-4" />
                                Copy Code
                            </>
                        )}
                    </Button>
                </div>
            </div>
        )
    }

    if (variant === "minimal") {
        return (
            <div className="group relative overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
                <div className="p-4 space-y-3">
                    <div>
                        <h3 className="text-base font-semibold">{title}</h3>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400">{description}</p>
                    </div>
                    
                    <div className="relative flex h-24 w-full items-center justify-center">
                        <div key={key}>
                            {preview}
                        </div>
                        <Button
                            onClick={handleReplay}
                            variant="ghost"
                            size="icon"
                            className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <RotateCcw className="h-3 w-3" />
                        </Button>
                    </div>

                    <Button
                        onClick={handleCopy}
                        variant="ghost"
                        className="w-full gap-2 h-8"
                        size="sm"
                    >
                        {copied ? (
                            <>
                                <Check className="h-3 w-3" />
                                Copied
                            </>
                        ) : (
                            <>
                                <Copy className="h-3 w-3" />
                                Copy
                            </>
                        )}
                    </Button>
                </div>
            </div>
        )
    }

    // Default card variant
    return (
        <div className="group relative overflow-hidden rounded-lg border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
            <div className="p-5 space-y-4">
                <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
                </div>
                
                <div className="relative flex h-32 w-full items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
                    <div key={key}>
                        {preview}
                    </div>
                    <Button
                        onClick={handleReplay}
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <RotateCcw className="h-3.5 w-3.5" />
                    </Button>
                </div>

                <Button
                    onClick={handleCopy}
                    variant="outline"
                    className="w-full gap-2"
                    size="sm"
                >
                    {copied ? (
                        <>
                            <Check className="h-4 w-4" />
                            Copied
                        </>
                    ) : (
                        <>
                            <Copy className="h-4 w-4" />
                            Copy
                        </>
                    )}
                </Button>
            </div>
        </div>
    )
}
