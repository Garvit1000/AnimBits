"use client";
import React from "react";
import { motion } from "motion/react";

interface Testimonial {
    text: string;
    image: string;
    name: string;
    role: string;
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
                    className="flex gap-6 pr-6"
                >
                    {[
                        ...new Array(2).fill(0).map((_, index) => (
                            <React.Fragment key={index}>
                                {props.testimonials.map(({ text, image, name, role }, i) => (
                                    <div
                                        className="p-8 rounded-3xl border shadow-lg shadow-primary/10 w-[350px] flex-shrink-0 bg-white dark:bg-neutral-900"
                                        key={i}
                                    >
                                        <div className="text-sm leading-relaxed">{text}</div>
                                        <div className="flex items-center gap-3 mt-6">
                                            <img
                                                width={40}
                                                height={40}
                                                src={image}
                                                alt={name}
                                                className="h-10 w-10 rounded-full"
                                            />
                                            <div className="flex flex-col">
                                                <div className="font-medium tracking-tight leading-5">
                                                    {name}
                                                </div>
                                                <div className="text-sm leading-5 opacity-60 tracking-tight">
                                                    {role}
                                                </div>
                                            </div>
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
