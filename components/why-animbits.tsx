"use client";

import { motion } from "motion/react";
import { ArrowRight, Layers, MousePointer2, Component, CheckCircle2 } from "lucide-react";


const features = [
    {
        title: "Motion Hooks, Not Just Components",
        description: "Don't replace your buttons. Enhance them. Use our hooks like useHoverGlow or useHoverlift to add magic to the UI you already have.",
        icon: Component,
    },
    {
        title: "Micro-Interactions First",
        description: "We focus on the subtle details the button press, the list stagger, the text reveal that make a product feel premium, not just flashy hero sections.",
        icon: MousePointer2,
    },
    {
        title: "Production Ready Code",
        description: "Accessible, typed, and performant. We don't just ship demos; we ship code that handles edge cases and respects reduced motion preferences.",
        icon: CheckCircle2,
    },
    {
        title: "The 'Glue' for Shadcn",
        description: "Designed to blend perfectly with standard UI patterns. No conflicting styles or heavy overrides. It just works with your existing system.",
        icon: Layers,
    },
];

export function WhyAnimBits() {
    return (
        <section className="py-24 bg-white dark:bg-neutral-950">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Header Section */}
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="sticky top-24"
                        >
                            <h2 className="mb-6 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-5xl">
                                Why AnimBits?
                            </h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                                We give you the precision tools to build your own unique interfaces, treating animation as a core experience.
                            </p>
                            <p className="text-lg font-medium text-neutral-900 dark:text-white mb-8">
                                Enhance your existing UI. Don&apos;t replace it.
                            </p>
                            <div className="h-1 w-20 bg-neutral-900 dark:bg-white rounded-full" />
                        </motion.div>
                    </div>

                    {/* Feature List */}
                    <div className="lg:w-2/3">
                        <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-800 border-t border-b border-neutral-200 dark:border-neutral-800">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group py-8 md:py-10 flex flex-col md:flex-row gap-6 md:items-start cursor-default transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900/50 px-4 -mx-4 rounded-xl"
                                >
                                    <div className="flex-shrink-0 pt-1">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                            <feature.icon className="h-6 w-6" />
                                        </div>
                                    </div>

                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base md:text-lg">
                                            {feature.description}
                                        </p>
                                    </div>

                                    <div className="flex-shrink-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 self-center">
                                        <ArrowRight className="h-6 w-6 text-blue-500" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
