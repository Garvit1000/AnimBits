"use client";

import { useState } from "react";
import { PlaygroundProvider, usePlayground } from "@/app/playground/_lib/store";
import { PlaygroundSidebar } from "@/app/playground/_components/playground-sidebar";
import { PlaygroundCanvas } from "@/app/playground/_components/playground-canvas";
import { PlaygroundControls } from "@/app/playground/_components/playground-controls";
import { CodeModal } from "@/app/playground/_components/code-modal";
import { generateCode } from "@/app/playground/_lib/code-generator";


function PlaygroundContent() {
    const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
    const { components } = usePlayground();

    const generatedCode = generateCode(components);

    return (
        <div className="flex flex-col h-screen bg-background">
            {/* Three-column layout */}
            <div className="flex flex-1 overflow-hidden">
                {/* Left Sidebar - Component Library */}
                <aside className="w-60 border-r bg-background flex flex-col overflow-hidden">
                    <div className="p-4 border-b">
                        <h2 className="text-sm font-semibold">Components</h2>
                        <p className="text-xs text-muted-foreground mt-1">
                            Select animations to preview
                        </p>
                    </div>
                    <div className="flex-1 overflow-y-auto p-2">
                        <PlaygroundSidebar />
                    </div>
                </aside>

                {/* Center Canvas - Preview Area */}
                <main className="flex-1 bg-neutral-50 dark:bg-zinc-950 overflow-hidden relative">
                    <div className="h-full flex items-center justify-center p-8">
                        <PlaygroundCanvas />
                    </div>
                </main>

                {/* Right Sidebar - Properties & Controls */}
                <aside className="w-80 border-l bg-background flex flex-col overflow-hidden">
                    <div className="p-4 border-b">
                        <h2 className="text-sm font-semibold">Properties</h2>
                        <p className="text-xs text-muted-foreground mt-1">
                            Customize your scene
                        </p>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4">
                        <PlaygroundControls
                            onShowCode={() => setIsCodeModalOpen(true)}
                        />
                    </div>
                </aside>
            </div>

            {/* Code Modal */}
            <CodeModal
                code={generatedCode}
                isOpen={isCodeModalOpen}
                onClose={() => setIsCodeModalOpen(false)}
            />
        </div>
    );
}

export function PlaygroundBuilder() {
    return (
        <PlaygroundProvider>
            <PlaygroundContent />
        </PlaygroundProvider>
    );
}
