"use client";

import { ReactionButton } from "./reaction-button";
import { Heart, Star, ThumbsUp, Bookmark } from "lucide-react";

export default function ReactionButtonDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-12 p-8">
            {/* Heart (Classic) */}
            <div className="flex flex-col items-center gap-2">
                <ReactionButton
                    Icon={Heart}
                    size={48}
                    colors={{ liked: "#ef4444", initial: "currentColor" }}
                />
                <span className="text-sm text-muted-foreground">Like</span>
            </div>

            {/* Star (Favorite) */}
            <div className="flex flex-col items-center gap-2">
                <ReactionButton
                    Icon={Star}
                    size={48}
                    colors={{ liked: "#eab308", initial: "currentColor" }}
                />
                <span className="text-sm text-muted-foreground">Favorite</span>
            </div>

            {/* ThumbsUp (Approve) */}
            <div className="flex flex-col items-center gap-2">
                <ReactionButton
                    Icon={ThumbsUp}
                    size={48}
                    colors={{ liked: "#3b82f6", initial: "currentColor" }}
                />
                <span className="text-sm text-muted-foreground">Approve</span>
            </div>

            {/* Bookmark (Save) */}
            <div className="flex flex-col items-center gap-2">
                <ReactionButton
                    Icon={Bookmark}
                    size={48}
                    colors={{ liked: "#10b981", initial: "currentColor" }}
                />
                <span className="text-sm text-muted-foreground">Save</span>
            </div>
        </div>
    );
}
