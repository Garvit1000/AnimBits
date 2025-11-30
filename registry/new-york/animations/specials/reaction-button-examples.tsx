"use client";

import { ReactionButton } from "./reaction-button";
import { Heart, Star, ThumbsUp } from "lucide-react";

export function ReactionButtonHeart() {
    return (
        <div className="flex flex-col items-center gap-2 p-4">
            <ReactionButton
                Icon={Heart}
                size={48}
                colors={{ liked: "#ef4444", initial: "currentColor" }}
            />
            <span className="text-sm text-muted-foreground">Like</span>
        </div>
    );
}

export function ReactionButtonStar() {
    return (
        <div className="flex flex-col items-center gap-2 p-4">
            <ReactionButton
                Icon={Star}
                size={48}
                colors={{ liked: "#eab308", initial: "currentColor" }}
            />
            <span className="text-sm text-muted-foreground">Favorite</span>
        </div>
    );
}

export function ReactionButtonThumbsUp() {
    return (
        <div className="flex flex-col items-center gap-2 p-4">
            <ReactionButton
                Icon={ThumbsUp}
                size={48}
                colors={{ liked: "#3b82f6", initial: "currentColor" }}
            />
            <span className="text-sm text-muted-foreground">Approve</span>
        </div>
    );
}
