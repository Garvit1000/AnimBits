"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { BadgeCheck } from "lucide-react";

interface Testimonial {
    text: string;
    image: string;
    name: string;
    role: string;
    username?: string;
    timestamp?: string;
}

export const TestimonialsHorizontal = (props: {
    className?: string;
    testimonials: Testimonial[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <div className="relative overflow-hidden">
                <motion.div
                    animate={{
                        translateX: "-50%",
                    }}
                    transition={{
                        duration: props.duration || 20,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                    }}
                    className="flex gap-4 pr-4"
                >
                    {[
                        ...new Array(2).fill(0).map((_, index) => (
                            <React.Fragment key={index}>
                                {props.testimonials.map(({ text, image, name, role, username }, i) => (
                                    <div
                                        className="group relative p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 w-[350px] flex-shrink-0 bg-white dark:bg-black transition-all duration-300 hover:shadow-sm"
                                        key={i}
                                    >
                                        {/* Header with avatar and name */}
                                        <div className="flex items-start gap-3 mb-3">
                                            <Image
                                                width={40}
                                                height={40}
                                                src={image}
                                                alt={name}
                                                className="h-10 w-10 rounded-full"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-1">
                                                    <div className="font-bold text-[15px] text-neutral-900 dark:text-white truncate">
                                                        {name}
                                                    </div>
                                                    <BadgeCheck className="h-[18px] w-[18px] fill-[#1D9BF0] text-white flex-shrink-0" />
                                                </div>
                                                <div className="text-[14px] text-neutral-500 dark:text-neutral-500 truncate leading-none">
                                                    @{username || name.toLowerCase().replace(/\s+/g, '')}
                                                </div>
                                            </div>
                                            <div className="text-neutral-400">
                                                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                                            </div>
                                        </div>

                                        {/* Tweet text */}
                                        <div className="text-[15px] leading-normal text-neutral-900 dark:text-white mb-3">
                                            {text}
                                        </div>

                                        {/* Footer with role */}
                                        <div className="text-[13px] text-neutral-500 dark:text-neutral-500">
                                            {role}
                                        </div>
                                    </div>
                                ))}
                            </React.Fragment>
                        )),
                    ]}
                </motion.div>
            </div>
        </div>
    );
};
