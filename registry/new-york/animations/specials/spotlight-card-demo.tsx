"use client";

import { SpotlightCard } from "./spotlight-card";
import { Lock } from "lucide-react";

export default function SpotlightCardDemo() {
    return (
        <div className="flex min-h-[400px] w-full items-center justify-center bg-white dark:bg-neutral-950 p-8">
            <SpotlightCard
                className="w-full max-w-sm rounded-[24px] bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 p-8"
                spotlightColor="rgba(0, 229, 255, 0.2)"
            >
                <div className="relative z-10 flex flex-col items-start gap-4 h-full">
                    <div className="p-3 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-500 dark:text-cyan-300">
                        <Lock className="w-6 h-6" />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                            Secure Authentication
                        </h2>
                        <p className="text-neutral-500 dark:text-neutral-400">
                            Hover over this card to reveal the spotlight effect.
                            It highlights the border and content dynamically.
                        </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800 w-full">
                        <button className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors">
                            Learn more &rarr;
                        </button>
                    </div>
                </div>
            </SpotlightCard>
        </div>
    );
}
