"use client";

import * as React from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    MotionValue,
    AnimatePresence,
} from "motion/react";
import { cn } from "@/lib/utils";

interface ReactionDockProps {
    items: {
        icon: React.ReactNode;
        label: string;
        onClick?: () => void;
    }[];
    className?: string;
}

export function ReactionDock({ items, className }: ReactionDockProps) {
    const mouseX = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "mx-auto flex h-16 items-end gap-4 rounded-2xl px-4 pb-3",
                "bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-2xl",
                className
            )}
        >
            {items.map((item, i) => (
                <DockItem key={i} mouseX={mouseX} onClick={item.onClick} label={item.label}>
                    {item.icon}
                </DockItem>
            ))}
        </motion.div>
    );
}

function DockItem({
    mouseX,
    children,
    onClick,
    label,
}: {
    mouseX: MotionValue;
    children: React.ReactNode;
    onClick?: () => void;
    label: string;
}) {
    const ref = React.useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 90, 40]);
    const width = useSpring(widthSync, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const [isHovered, setHovered] = React.useState(false);
    const [hasReacted, setHasReacted] = React.useState(false);

    const handleClick = () => {
        setHasReacted(!hasReacted);
        if (onClick) onClick();
    };

    return (
        <div className="relative flex flex-col items-center">
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: 2, x: "-50%" }}
                        className="absolute -top-10 left-1/2 w-fit whitespace-nowrap rounded-full border border-zinc-200 bg-white px-2 py-0.5 text-xs text-zinc-900 shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
                    >
                        {label}
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div
                ref={ref}
                style={{ width }}
                onClick={handleClick}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="aspect-square cursor-pointer rounded-full bg-white/50 dark:bg-black/50 border border-white/40 dark:border-white/10 shadow-sm backdrop-blur-sm flex items-center justify-center hover:bg-white/80 dark:hover:bg-black/80 transition-colors relative overflow-hidden"
            >
                <AnimatePresence>
                    {hasReacted && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1.2, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 rounded-full z-0"
                        />
                    )}
                </AnimatePresence>
                <motion.div
                    className={cn(
                        "w-full h-full flex items-center justify-center relative z-20 transition-colors duration-200",
                    )}
                    whileTap={{ scale: 0.8 }}
                >
                    {React.isValidElement(children)
                        ? React.cloneElement(children as React.ReactElement<any>, {
                            fill: hasReacted ? "currentColor" : "none",
                            stroke: hasReacted ? "white" : "currentColor",
                            strokeWidth: hasReacted ? 1.5 : 2,
                            className: cn((children as React.ReactElement<any>).props.className, "transition-all duration-300")
                        })
                        : children}
                </motion.div>
            </motion.div>
        </div>
    );
}
