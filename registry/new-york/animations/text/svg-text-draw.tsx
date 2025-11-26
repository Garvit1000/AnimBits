"use client";
import * as React from "react";
import { motion, SVGMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SvgTextDrawProps extends Omit<SVGMotionProps<SVGSVGElement>, "children"> {
    children: string;
    delay?: number;
    speed?: number;
    className?: string;
}

// Simple letter path definitions (lowercase letters)
const letterPaths: Record<string, string> = {
    a: "M 10 30 Q 10 10, 25 10 Q 40 10, 40 25 Q 40 40, 25 40 Q 15 40, 10 35 M 40 10 L 40 40",
    b: "M 10 0 L 10 40 M 10 20 Q 10 10, 20 10 Q 30 10, 30 25 Q 30 40, 20 40 Q 10 40, 10 35",
    c: "M 35 15 Q 30 10, 20 10 Q 10 10, 10 25 Q 10 40, 20 40 Q 30 40, 35 35",
    d: "M 40 0 L 40 40 M 40 10 Q 40 10, 25 10 Q 10 10, 10 25 Q 10 40, 25 40 Q 40 40, 40 35",
    e: "M 35 25 L 10 25 Q 10 10, 25 10 Q 40 10, 40 25 Q 40 40, 25 40 Q 10 40, 10 35",
    f: "M 30 5 Q 25 0, 20 0 M 20 0 L 20 40 M 10 15 L 30 15",
    g: "M 40 10 Q 40 10, 25 10 Q 10 10, 10 25 Q 10 40, 25 40 Q 40 40, 40 30 L 40 45 Q 40 50, 25 50",
    h: "M 10 0 L 10 40 M 10 20 Q 10 10, 20 10 Q 30 10, 30 20 L 30 40",
    i: "M 20 5 L 20 8 M 20 15 L 20 40",
    j: "M 25 5 L 25 8 M 25 15 L 25 40 Q 25 50, 15 50",
    k: "M 10 0 L 10 40 M 30 15 L 10 25 L 30 40",
    l: "M 20 0 L 20 40",
    m: "M 10 40 L 10 10 Q 10 10, 17 10 Q 24 10, 24 17 L 24 40 M 24 10 Q 24 10, 31 10 Q 38 10, 38 17 L 38 40",
    n: "M 10 40 L 10 10 Q 10 10, 20 10 Q 30 10, 30 20 L 30 40",
    o: "M 25 10 Q 10 10, 10 25 Q 10 40, 25 40 Q 40 40, 40 25 Q 40 10, 25 10",
    p: "M 10 50 L 10 10 Q 10 10, 20 10 Q 30 10, 30 25 Q 30 40, 20 40 Q 10 40, 10 35",
    q: "M 40 10 Q 40 10, 25 10 Q 10 10, 10 25 Q 10 40, 25 40 Q 40 40, 40 35 L 40 50",
    r: "M 10 40 L 10 10 Q 10 10, 20 10 Q 30 10, 30 15",
    s: "M 35 15 Q 30 10, 20 10 Q 10 10, 10 17 Q 10 25, 30 25 Q 40 25, 40 33 Q 40 40, 20 40 Q 10 40, 10 35",
    t: "M 20 5 L 20 35 Q 20 40, 25 40 M 10 15 L 30 15",
    u: "M 10 10 L 10 30 Q 10 40, 20 40 Q 30 40, 30 30 L 30 10",
    v: "M 10 10 L 20 40 L 30 10",
    w: "M 10 10 L 15 40 L 25 10 L 30 40 L 35 10",
    x: "M 10 10 L 30 40 M 30 10 L 10 40",
    y: "M 10 10 L 20 30 L 30 10 M 20 30 L 20 45 Q 20 50, 10 50",
    z: "M 10 10 L 30 10 L 10 40 L 30 40",
    " ": "",
};

const letterWidth = 50; // Width allocated for each letter

export function SvgTextDraw({
    children,
    className,
    delay = 0,
    speed = 1,
    ...props
}: SvgTextDrawProps) {
    // Convert children to string and lowercase
    const text = String(children).toLowerCase();
    const totalWidth = text.length * letterWidth;

    const calc = (x: number) => x * speed;

    return (
        <motion.svg
            className={cn("h-12", className)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${totalWidth} 60`}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            {...props}
        >
            <title>{children}</title>
            {text.split("").map((char, index) => {
                const path = letterPaths[char] || "";
                if (!path) return null;

                const xOffset = index * letterWidth;
                const charDelay = delay + index * 0.15 * speed;

                return (
                    <motion.path
                        key={`${char}-${index}`}
                        d={path}
                        transform={`translate(${xOffset}, 0)`}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                            pathLength: {
                                duration: calc(0.5),
                                ease: "easeInOut",
                                delay: calc(charDelay),
                            },
                            opacity: {
                                duration: calc(0.3),
                                delay: calc(charDelay),
                            },
                        }}
                    />
                );
            })}
        </motion.svg>
    );
}
