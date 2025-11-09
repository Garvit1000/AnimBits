"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check, RotateCcw } from "lucide-react"

interface AnimationCardProps {
    title: string
    description: string
    preview: React.ReactNode
    codeSnippet: string
}

export function AnimationCard({
    title,
    description,
    preview,
    codeSnippet
}: AnimationCardProps) {
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

    return (
        <Card className="overflow-hidden border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
            <CardHeader>
                <CardTitle className="text-lg">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Preview Area */}
                <div className="relative flex h-32 w-full items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
                    <div key={key}>
                        {preview}
                    </div>
                    <Button
                        onClick={handleReplay}
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-7 w-7"
                    >
                        <RotateCcw className="h-3.5 w-3.5" />
                    </Button>
                </div>

            </CardContent>

            <CardFooter>
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
            </CardFooter>
        </Card>
    )
}
