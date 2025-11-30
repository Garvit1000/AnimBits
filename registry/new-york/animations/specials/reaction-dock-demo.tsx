"use client";

import { ReactionDock } from "./reaction-dock";
import { Heart, ThumbsUp, Laugh, Frown, Angry, PartyPopper } from "lucide-react";

export default function ReactionDockDemo() {
    const reactions = [
        {
            icon: <ThumbsUp className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />,
            label: "Like",
            onClick: () => console.log("Like"),
        },
        {
            icon: <Heart className="h-5 w-5 text-red-500" />,
            label: "Love",
            onClick: () => console.log("Love"),
        },
        {
            icon: <Laugh className="h-5 w-5 text-amber-500" />,
            label: "Haha",
            onClick: () => console.log("Haha"),
        },
        {
            icon: <PartyPopper className="h-5 w-5 text-blue-500" />,
            label: "Celebrate",
            onClick: () => console.log("Celebrate"),
        },
        {
            icon: <Frown className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />,
            label: "Sad",
            onClick: () => console.log("Sad"),
        },
        {
            icon: <Angry className="h-5 w-5 text-orange-500" />,
            label: "Angry",
            onClick: () => console.log("Angry"),
        },
    ];

    return (
        <div className="flex min-h-[200px] items-center justify-center p-8">
            <ReactionDock items={reactions} />
        </div>
    );
}
