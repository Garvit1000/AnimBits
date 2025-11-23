"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { AnimBitsLoader } from "./loader";

export function LoadingProvider({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        // Simulate initial page load
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const handleAnimationComplete = () => {
        setShowLoader(false);
    };

    if (!showLoader) {
        return <>{children}</>;
    }

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
                        <AnimBitsLoader
                            speed={0.5}
                            onAnimationComplete={handleAnimationComplete}
                            className="h-24 w-auto"
                        />
                    </div>
                )}
            </AnimatePresence>
            {!isLoading && children}
        </>
    );
}
