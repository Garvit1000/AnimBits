"use client";

import { SwipeableStack } from "./swipeable-stack";
import { MapPin, X, Heart } from "lucide-react";

// Dummy Data with Images
const PROFILES = [
    {
        id: 1,
        name: "Elara",
        age: 24,
        role: "Digital Artist",
        location: "Tokyo, Japan",
        image: "https://images.unsplash.com/photo-1620067925093-801122ac1408?q=80&w=1000&auto=format&fit=crop" // Cyberpunk vibe
    },
    {
        id: 2,
        name: "Liam",
        age: 28,
        role: "Architect",
        location: "Berlin, Germany",
        image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1000&auto=format&fit=crop" // Modern architecture / person
    },
    {
        id: 3,
        name: "Sofia",
        age: 22,
        role: "Model",
        location: "Paris, France",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" // Portrait
    },
    {
        id: 4,
        name: "Noah",
        age: 26,
        role: "Photographer",
        location: "New York, USA",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop" // Portrait
    }
];

export default function SwipeableStackDemo() {
    return (
        <div className="flex h-[600px] w-full items-center justify-center bg-neutral-100 p-4 dark:bg-neutral-950">
            <div className="relative h-[500px] w-[320px]">
                <SwipeableStack
                    onSwipeRight={(idx) => console.log("Liked", idx)}
                    onSwipeLeft={(idx) => console.log("Passed", idx)}
                >
                    {PROFILES.map((profile) => (
                        <ProfileCard key={profile.id} profile={profile} />
                    ))}
                </SwipeableStack>

                {/* Control Buttons (Visual Only) */}
                <div className="absolute -bottom-24 left-0 right-0 flex justify-center gap-6">
                    <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-rose-500 shadow-lg transition-transform hover:scale-110 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                        <X className="h-6 w-6" />
                    </button>
                    <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-emerald-500 shadow-lg transition-transform hover:scale-110 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                        <Heart className="h-6 w-6 fill-current" />
                    </button>
                </div>
            </div>
        </div>
    );
}

function ProfileCard({ profile }: { profile: typeof PROFILES[0] }) {
    return (
        <div className="relative h-full w-full select-none">
            {/* Image */}
            <img
                src={profile.image}
                alt={profile.name}
                className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                draggable={false}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-baseline gap-2 mb-1">
                    <h2 className="text-3xl font-bold">{profile.name}</h2>
                    <span className="text-xl font-medium opacity-90">{profile.age}</span>
                </div>
                <p className="text-sm font-medium opacity-90 mb-3">{profile.role}</p>

                <div className="flex items-center gap-1.5 text-xs font-semibold bg-white/20 w-fit px-2.5 py-1 rounded-full backdrop-blur-sm">
                    <MapPin className="w-3 h-3" />
                    {profile.location}
                </div>
            </div>
        </div>
    );
}
