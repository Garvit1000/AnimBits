"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform, useAnimation, PanInfo, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface SwipeableStackProps {
    children: React.ReactNode[];
    className?: string;
    onSwipeRight?: (index: number) => void;
    onSwipeLeft?: (index: number) => void;
}

export function SwipeableStack({ children, className, onSwipeRight, onSwipeLeft }: SwipeableStackProps) {
    const [cards, setCards] = useState(React.Children.toArray(children));
    const [history, setHistory] = useState<React.ReactNode[]>([]);

    const activeCard = cards[cards.length - 1];

    const removeCard = (direction: "left" | "right") => {
        const removed = cards.pop();
        if (removed) {
            setHistory([...history, removed]);
            const index = cards.length;
            if (direction === "right" && onSwipeRight) onSwipeRight(index);
            if (direction === "left" && onSwipeLeft) onSwipeLeft(index);
            setCards([...cards]);
        }
    };

    return (
        <div className={cn("relative h-full w-full flex items-center justify-center", className)}>
            <AnimatePresence>
                {cards.map((child, index) => {
                    const isFront = index === cards.length - 1;
                    return (
                        <Card
                            key={index}
                            index={index}
                            isFront={isFront}
                            drag={isFront}
                            total={cards.length}
                            onRemove={removeCard}
                        >
                            {child}
                        </Card>
                    );
                })}
            </AnimatePresence>
            {cards.length === 0 && (
                <div className="text-center text-neutral-500">
                    No more items
                    <button
                        onClick={() => {
                            setCards(React.Children.toArray(children));
                            setHistory([]);
                        }}
                        className="mt-4 block mx-auto text-blue-500 hover:underline"
                    >
                        Reset
                    </button>
                </div>
            )}
        </div>
    );
}

function Card({
    children,
    index,
    isFront,
    drag,
    total,
    onRemove
}: {
    children: React.ReactNode;
    index: number;
    isFront: boolean;
    drag: boolean;
    total: number;
    onRemove: (dir: "left" | "right") => void;
}) {
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-25, 25]);
    const opacity = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);

    // Stacking logic
    const reverseIndex = total - 1 - index;
    const scale = 1 - reverseIndex * 0.05;
    const y = reverseIndex * 15;
    const zIndex = total - reverseIndex;

    const controls = useAnimation();

    const handleDragEnd = async (_: any, info: PanInfo) => {
        if (info.offset.x > 100) {
            await controls.start({ x: 500, opacity: 0 });
            onRemove("right");
        } else if (info.offset.x < -100) {
            await controls.start({ x: -500, opacity: 0 });
            onRemove("left");
        } else {
            controls.start({ x: 0 });
        }
    };

    return (
        <motion.div
            style={{
                x,
                rotate,
                scale: isFront ? 1 : scale,
                y: isFront ? 0 : y,
                zIndex,
            }}
            initial={{ scale, y }}
            animate={controls}
            drag={drag ? "x" : false}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.7}
            onDragEnd={handleDragEnd}
            className="absolute left-0 right-0 top-0 bottom-0 mx-auto cursor-grab active:cursor-grabbing origin-bottom"
            whileDrag={{ scale: 1.05 }}
        >
            <div className="h-full w-full rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden">
                {children}
            </div>
        </motion.div>
    );
}
