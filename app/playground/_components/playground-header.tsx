"use client";

import { ArrowLeft, Share2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PlaygroundHeader() {
    return (
        <header className="h-14 border-b bg-background flex items-center justify-between px-4">
            <div className="flex items-center gap-4">
                <Link href="/">
                    <Button variant="ghost" size="sm" className="gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </Button>
                </Link>
                <div className="h-6 w-px bg-border" />
                <h1 className="text-sm font-medium">New Project</h1>
            </div>

            <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Open in v0
                </Button>
                <Button size="sm">Create Project</Button>
            </div>
        </header>
    );
}
