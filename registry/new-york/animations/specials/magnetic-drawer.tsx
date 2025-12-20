"use client";

import { cn } from "@/lib/utils";
import {
    motion,
    useMotionValue,
    useTransform,
    PanInfo,
    animate,
    AnimatePresence,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

interface MagneticDrawerProps {
    children: React.ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    snapPoints?: number[]; // Values between 0 and 1, e.g., [0.5, 1]
    className?: string;
}

export function MagneticDrawer({
    children,
    open,
    onOpenChange,
    snapPoints = [0.5, 0.9],
    className,
}: MagneticDrawerProps) {
    const [mounted, setMounted] = useState(false);
    const [drawerHeight, setDrawerHeight] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const y = useMotionValue(0);

    useEffect(() => {
        setMounted(true);
        if (typeof window !== "undefined") {
            setDrawerHeight(window.innerHeight);
            const handleResize = () => setDrawerHeight(window.innerHeight);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        if (open) {
            const initialSnap = snapPoints[0];
            const targetY = drawerHeight * (1 - initialSnap);
            animate(y, targetY, { type: "spring", damping: 30, stiffness: 300 });
            document.body.style.overflow = "hidden";
        } else {
            animate(y, drawerHeight, { type: "spring", damping: 30, stiffness: 300 });
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [open, drawerHeight, snapPoints]);

    const handleDragEnd = (_: any, info: PanInfo) => {
        const velocity = info.velocity.y;
        const currentY = y.get();
        const currentOpenedHeight = drawerHeight - currentY;
        const currentRatio = currentOpenedHeight / drawerHeight;

        let bestSnap = snapPoints[0];
        let minDiff = Infinity;

        if (velocity > 500 || currentRatio < 0.1) {
            onOpenChange(false);
            return;
        }

        for (const point of snapPoints) {
            const diff = Math.abs(currentRatio - point);
            if (diff < minDiff) {
                minDiff = diff;
                bestSnap = point;
            }
        }

        if (velocity < -500) {
            const nextSnap = snapPoints.find(p => p > currentRatio);
            if (nextSnap) bestSnap = nextSnap;
        } else if (velocity > 500) {
            const prevSnap = [...snapPoints].reverse().find(p => p < currentRatio);
            if (prevSnap) bestSnap = prevSnap;
        }

        const targetY = drawerHeight * (1 - bestSnap);
        animate(y, targetY, { type: "spring", damping: 30, stiffness: 300 });
    };

    const backdropOpacity = useTransform(y, [drawerHeight, 0], [0, 0.5]);
    const pointerEvents = useTransform(y, (latest) => latest >= drawerHeight ? "none" : "auto");

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        className="fixed inset-0 z-[99]"
                        style={{ backgroundColor: "black", opacity: backdropOpacity, pointerEvents }}
                        onClick={() => onOpenChange(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        ref={containerRef}
                        className={cn(
                            "fixed bottom-0 left-0 right-0 z-[100] flex flex-col rounded-t-[20px] bg-white shadow-2xl outline-none dark:bg-neutral-900",
                            className
                        )}
                        style={{ y, height: drawerHeight, touchAction: "none" }}
                        initial={{ y: drawerHeight }}
                        drag="y"
                        dragConstraints={{ top: 0, bottom: drawerHeight }}
                        dragElastic={0.05}
                        dragMomentum={false}
                        onDragEnd={handleDragEnd}
                    >
                        <div className="flex w-full items-center justify-center p-4">
                            <div className="h-1.5 w-12 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                        </div>
                        <button
                            onClick={() => onOpenChange(false)}
                            className="absolute right-4 top-4 rounded-full p-2 text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        <div className="flex-1 overflow-y-auto px-4 pb-10">
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
