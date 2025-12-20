"use client";

import { useState, useEffect } from "react";
import { X, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { codeToHtml } from "shiki";

interface CodeModalProps {
    code: string;
    isOpen: boolean;
    onClose: () => void;
}

export function CodeModal({ code, isOpen, onClose }: CodeModalProps) {
    const [copied, setCopied] = useState(false);
    const [highlightedCode, setHighlightedCode] = useState("");

    // Generate syntax highlighted HTML when modal opens or code changes
    useEffect(() => {
        if (isOpen && code) {
            // Detect current theme
            const isDark = document.documentElement.classList.contains('dark');

            codeToHtml(code, {
                lang: "tsx",
                theme: isDark ? "github-dark" : "github-light"
            }).then(html => setHighlightedCode(html));
        }
    }, [isOpen, code]);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl max-h-[80vh] bg-background border rounded-lg shadow-2xl flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-semibold">Generated Code</h2>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleCopy}
                            className="gap-2"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-4 h-4" />
                                    Copied!
                                </>
                            ) : (
                                <>
                                    <Copy className="w-4 h-4" />
                                    Copy Code
                                </>
                            )}
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={onClose}
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Code Display */}
                <div className="flex-1 overflow-auto p-6 bg-muted/30">
                    {highlightedCode ? (
                        <div
                            className="text-sm [&_pre]:bg-transparent [&_pre]:p-0"
                            dangerouslySetInnerHTML={{ __html: highlightedCode }}
                        />
                    ) : (
                        <pre className="text-sm">
                            <code>{code}</code>
                        </pre>
                    )}
                </div>

                {/* Footer */}
                <div className="p-4 border-t bg-muted/50">
                    <p className="text-xs text-muted-foreground">
                        Copy this code and paste it into your project. Make sure to install the required components from the AnimBits registry.
                    </p>
                </div>
            </div>
        </div>
    );
}
