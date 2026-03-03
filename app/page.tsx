import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { CanvasText } from "@/components/ui/canvas-text";
import { ImagesBadge } from "@/components/ui/images-badge";

import { TextShimmer } from "@/registry/new-york/animations/text/shimmer";
import { RippleButton } from "@/registry/new-york/animations/buttons/ripple";
import { CardParallaxTilt } from "@/registry/new-york/animations/cards/parallax-tilt";
import { LoaderOrbit } from "@/registry/new-york/animations/loaders/orbit";
import { TestimonialsHorizontal } from "@/components/testimonials-horizontal";
import { Footer } from "@/components/footer";
import { GithubButton } from "@/components/ui/github-button";
import { CTASection } from "@/components/cta-with-rectangle";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { ScalesHeroGrid } from "@/components/scales-hero-grid";

import { ArrowRight, Heart, ChevronRight } from "lucide-react";
import * as motion from "framer-motion/client";

const testimonials = [

    {
        text: "cool lib! it would be cool to add theme change animations. added it to my list",
        image: "https://unavatar.io/twitter/orcdev",
        name: "orcdev",
        role: "Creator of 8bitcn",
    },
    {
        text: "U got great animations on animbits",
        image: "https://unavatar.io/x/divv919",
        name: "Div919",
        role: "Developer",
    },
];

async function getStarCount() {
    try {
        const res = await fetch("https://api.github.com/repos/Garvit1000/AnimBits", {
            next: { revalidate: 3600 },
        });
        const data = await res.json();
        return data.stargazers_count || 0;
    } catch {
        return 0;
    }
}

export default async function Home() {
    const stars = await getStarCount();
    return (
        <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden">
            <StickyBanner>
                <span className="flex items-center gap-1 text-xs md:text-sm font-medium">
                    New: Interactive Playground Unlocking 90+ Production-Ready Animations
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                </span>
            </StickyBanner>
            <Navbar />

            {/* Hero Section */}
            <section className="relative w-full overflow-hidden bg-white dark:bg-black">
                {/* Subtle dot pattern background only */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0/0.05)_1px,transparent_0)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.03)_1px,transparent_0)]" />

                <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 lg:py-40">
                    <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            {/* Interactive Badge */}
                            <motion.div
                                className="mb-10 flex justify-center lg:justify-start"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50/50 px-4 py-1.5 shadow-sm transition-colors hover:bg-neutral-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
                                    <ImagesBadge
                                        text="New Premium Components"
                                        images={[
                                            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
                                            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
                                            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop"
                                        ]}
                                    />
                                </div>
                            </motion.div>

                            {/* Main Heading */}
                            <motion.div
                                className="mb-8 flex flex-col items-center lg:items-start justify-center lg:justify-start text-center lg:text-left"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h1 className="text-5xl tracking-tight font-bold text-neutral-900 dark:text-white sm:text-6xl lg:text-7xl mb-6">
                                    The Foundation for <br className="hidden sm:block lg:hidden" />
                                    <CanvasText
                                        text="Interactive UI"
                                        className="bg-clip-text text-transparent px-2 -ml-2 lg:ml-0"
                                        colors={["#38bdf8", "#818cf8", "#c084fc"]}
                                        curveIntensity={30}
                                        lineWidth={2.5}
                                        lineGap={4}
                                    />
                                </h1>
                                <LayoutTextFlip
                                    text="Build Amazing"
                                    words={["Landing Pages", "Dashboards", "Web Apps", "Interfaces"]}
                                    className="text-2xl sm:text-3xl font-semibold text-neutral-600 dark:text-neutral-300 mt-4 tracking-tight"
                                />
                            </motion.div>

                            {/* Description */}
                            <motion.div
                                className="mx-auto lg:mx-0 mb-12 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <p className="font-medium">
                                    A curated suite of animations, hooks, and components. Designed to make your applications feel <strong className="text-neutral-900 dark:text-white">alive</strong>. Copy, paste, and ship premium interfaces.
                                </p>
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                className="mb-16 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <Link href="/docs/installation" className="w-full sm:w-auto">
                                    <motion.button
                                        className="w-full sm:w-auto inline-flex h-10 2xl:h-12 items-center justify-center gap-2 rounded-xl bg-neutral-900 px-6 2xl:px-8 text-sm 2xl:text-base font-semibold text-white shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] transition-all hover:bg-neutral-800 hover:shadow-[0_0_60px_-15px_rgba(0,0,0,0.7)] hover:-translate-y-0.5 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 dark:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] ring-1 ring-black/5 dark:ring-white/10"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Getting Started
                                        <ArrowRight className="h-4 w-4" />
                                    </motion.button>
                                </Link>
                                <div className="w-full sm:w-auto">
                                    <GithubButton
                                        repoUrl="https://github.com/Garvit1000/AnimBits"
                                        label="Star on GitHub"
                                        targetStars={stars}
                                        showGithubIcon={true}
                                        showStarIcon={true}
                                        variant="outline"
                                        size="lg"
                                        autoAnimate={true}
                                        filled={true}
                                        className="w-full h-10 2xl:h-12 rounded-lg px-6 2xl:px-8 text-sm 2xl:text-base font-semibold"
                                    />
                                </div>
                            </motion.div>

                            {/* Tech Stack with Devicon Icons */}
                            <motion.div
                                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <motion.a
                                    href="https://nextjs.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Image
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                                        alt="Next.js"
                                        width={28}
                                        height={28}
                                        className="h-6 w-6 2xl:h-7 2xl:w-7 dark:invert"
                                    />
                                    <span className="text-sm 2xl:text-base font-medium">Next.js</span>
                                </motion.a>

                                <motion.a
                                    href="https://react.dev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Image
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                                        alt="React"
                                        width={24}
                                        height={24}
                                        className="h-6 w-6"
                                    />
                                    <span className="text-sm font-medium">React</span>
                                </motion.a>

                                <motion.a
                                    href="https://tailwindcss.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Image
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                                        alt="Tailwind CSS"
                                        width={24}
                                        height={24}
                                        className="h-6 w-6"
                                    />
                                    <span className="text-sm font-medium">Tailwind</span>
                                </motion.a>

                                <motion.a
                                    href="https://www.framer.com/motion"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Image
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
                                        alt="Framer Motion"
                                        width={28}
                                        height={28}
                                        className="h-6 w-6 2xl:h-7 2xl:w-7 dark:invert"
                                    />
                                    <span className="text-sm font-medium">Framer Motion</span>
                                </motion.a>

                                <motion.a
                                    href="https://www.typescriptlang.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Image
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                                        alt="TypeScript"
                                        width={24}
                                        height={24}
                                        className="h-6 w-6"
                                    />
                                    <span className="text-sm font-medium">TypeScript</span>
                                </motion.a>
                            </motion.div>
                        </div>
                        {/* Right Column: Scales Image */}
                        <motion.div
                            className="flex w-full items-center justify-center lg:justify-end"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="w-full max-w-[650px] overflow-visible">
                                <ScalesHeroGrid />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>



            {/* Animation Categories */}
            <section className="relative w-full overflow-hidden bg-white pt-16 pb-24 2xl:pb-32 dark:bg-black">
                <div className="container relative z-10 mx-auto px-4">

                    <motion.div
                        className="mb-14 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white md:text-5xl">
                            Crafted with{" "}
                            <span className="relative inline-block">
                                <CanvasText
                                    text="Precision"
                                    className="bg-clip-text text-transparent px-2 relative z-10"
                                    colors={["#3b82f6", "#60a5fa", "#93c5fd"]}
                                    curveIntensity={30}
                                    lineWidth={2.5}
                                    lineGap={4}
                                />
                            </span>
                        </h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            Explore our comprehensive collection of meticulously designed components and animations.
                        </p>
                    </motion.div>

                    <BentoGrid className="mx-auto max-w-7xl 2xl:max-w-\[1400px\]">
                        {/* Text */}
                        <Link
                            href="/docs/animations/text/shimmer"
                            className="group/item block h-full w-full"
                        >
                            <BentoGridItem
                                title="Text"
                                description="Shimmer, Scramble, and more"
                                header={
                                    <div className="flex h-full min-h-[6rem] w-full flex-col items-center justify-center gap-3 p-6">
                                        <TextShimmer
                                            className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-900 dark:from-white dark:via-neutral-400 dark:to-white bg-clip-text"
                                            colors={[
                                                "transparent",
                                                "rgba(59, 130, 246, 0.8)",
                                                "transparent",
                                            ]}
                                            duration={2.5}
                                        >
                                            Shimmer
                                        </TextShimmer>
                                        <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                                            Animated text effects
                                        </div>
                                    </div>
                                }
                                className="h-full"
                            />
                        </Link>

                        {/* Icons */}
                        <Link
                            href="/docs/animations/icons/heartbeat"
                            className="group/item block h-full w-full"
                        >
                            <BentoGridItem
                                title="Icons"
                                description="Heartbeat, Pulse, Spin"
                                header={
                                    <div className="flex h-full min-h-[6rem] w-full items-center justify-center p-6">
                                        <div className="flex flex-wrap items-center justify-center gap-6 p-4">
                                            <div className="flex flex-col items-center gap-3 transition-transform hover:-translate-y-1">
                                                <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl sm:rounded-3xl bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30">
                                                    <div className="text-red-500 animate-pulse">
                                                        <Heart className="h-8 w-8 sm:h-10 sm:w-10 fill-current" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center gap-3 transition-transform hover:-translate-y-1">
                                                <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl sm:rounded-3xl bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30">
                                                    <div className="h-8 w-8 sm:h-10 sm:w-10 animate-spin rounded-full border-[3px] border-blue-500 border-t-transparent" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center gap-3 transition-transform hover:-translate-y-1">
                                                <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl sm:rounded-3xl bg-purple-50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/30">
                                                    <div className="h-8 w-8 sm:h-10 sm:w-10 animate-pulse rounded-full bg-purple-500" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                className="h-full"
                            />
                        </Link>

                        {/* Lists */}
                        <Link
                            href="/docs/animations/lists/stagger-fade"
                            className="group/item block h-full w-full"
                        >
                            <BentoGridItem
                                title="Lists"
                                description="Staggered animations"
                                header={
                                    <div className="flex h-full w-full items-center justify-center p-6">
                                        <div className="w-full max-w-[160px] space-y-2">
                                            {[
                                                { song: "Midnight Dreams", artist: "Luna Bay", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop" },
                                                { song: "Neon Lights", artist: "The Synthwave", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop" },
                                                { song: "Ocean Waves", artist: "Coastal Vibes", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&h=100&fit=crop" }
                                            ].map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="flex items-center gap-2 rounded-lg bg-neutral-100 p-2 dark:bg-neutral-800"
                                                    animate={{
                                                        opacity: [0, 1, 1, 0],
                                                        x: [-20, 0, 0, -20]
                                                    }}
                                                    transition={{
                                                        duration: 2.5,
                                                        delay: i * 0.25,
                                                        repeat: Infinity,
                                                        repeatDelay: 1,
                                                        ease: "easeInOut"
                                                    }}
                                                >
                                                    <Image
                                                        src={item.image}
                                                        alt={item.song}
                                                        width={32}
                                                        height={32}
                                                        className="h-8 w-8 flex-shrink-0 rounded object-cover"
                                                    />
                                                    <div className="flex-1 min-w-0">
                                                        <div className="text-[11px] font-medium text-neutral-900 dark:text-white truncate">
                                                            {item.song}
                                                        </div>
                                                        <div className="text-[9px] text-neutral-500 dark:text-neutral-400">
                                                            {item.artist}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                }
                                className="h-full"
                            />
                        </Link>

                        {/* Cards */}
                        <Link
                            href="/docs/animations/cards/parallax-tilt"
                            className="group/item block h-full w-full md:col-span-2 md:row-span-2"
                        >
                            <BentoGridItem
                                title="Cards"
                                description="3D Tilt, Hover effects"
                                header={
                                    <div className="flex h-full min-h-[6rem] w-full items-center justify-center p-4" style={{ perspective: "1000px" }}>
                                        <motion.div
                                            className="w-full max-w-sm sm:max-w-md"
                                            animate={{
                                                rotateY: [0, 180, 180, 360]
                                            }}
                                            transition={{
                                                duration: 6,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                times: [0, 0.3, 0.7, 1]
                                            }}
                                            style={{ transformStyle: "preserve-3d" }}
                                        >
                                            <CardParallaxTilt className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl dark:border-white/10 dark:bg-neutral-900">
                                                <Image
                                                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                                                    alt="Beautiful mountain landscape"
                                                    width={400}
                                                    height={300}
                                                    className="h-48 w-full object-cover"
                                                />
                                                <div className="p-4">
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                                                                Mountain View
                                                            </div>
                                                            <div className="text-xs text-neutral-500 dark:text-neutral-400">
                                                                Premium Landscape
                                                            </div>
                                                        </div>
                                                        <span className="rounded-full bg-blue-600 px-2 py-1 text-xs font-semibold text-white">
                                                            New
                                                        </span>
                                                    </div>
                                                </div>
                                            </CardParallaxTilt>
                                        </motion.div>
                                    </div>
                                }
                                className="h-full"
                            />
                        </Link>

                        {/* Buttons */}
                        <Link
                            href="/docs/animations/buttons/ripple"
                            className="group/item block h-full w-full"
                        >
                            <BentoGridItem
                                title="Buttons"
                                description="Ripple, Magnetic, and more"
                                header={
                                    <div className="flex h-full min-h-[6rem] w-full flex-col items-center justify-center gap-3 p-6">
                                        <RippleButton className="rounded-2xl border border-white/20 bg-gradient-to-b from-blue-500 to-blue-600 px-8 py-3.5 font-semibold text-white shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.7)] transition-all ring-1 ring-blue-500/50 hover:scale-105 active:scale-95">
                                            Interactive Button
                                        </RippleButton>
                                        <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                                            Interactive button effects
                                        </div>
                                    </div>
                                }
                                className="h-full"
                            />
                        </Link>

                        {/* Transitions */}
                        <Link
                            href="/docs/transitions/theme-toggle-circular"
                            className="group/item block h-full w-full"
                        >
                            <BentoGridItem
                                title="Transitions"
                                description="Theme toggles and more"
                                header={
                                    <div className="flex h-full min-h-[6rem] w-full flex-col items-center justify-center gap-3 p-6 overflow-hidden relative">
                                        {/* Base background */}
                                        <div className="absolute inset-0 bg-black" />

                                        {/* Animated overlay that wipes vertically */}
                                        <motion.div
                                            className="absolute inset-0 bg-white"
                                            animate={{
                                                y: ["-100%", "0%", "100%", "0%", "-100%"]
                                            }}
                                            transition={{
                                                duration: 6,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                times: [0, 0.25, 0.5, 0.75, 1]
                                            }}
                                        />

                                        {/* Glowing base */}
                                        <motion.div
                                            className="absolute z-0 h-24 w-24 rounded-full bg-blue-500/20 blur-xl"
                                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                        />
                                        {/* Box toggle */}
                                        <motion.div
                                            className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl"
                                            animate={{
                                                rotate: [0, 90, 180, 270, 360],
                                                borderRadius: ["1rem", "1.5rem", "1rem", "1.5rem", "1rem"]
                                            }}
                                            transition={{
                                                duration: 6,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                            </svg>
                                        </motion.div>
                                        <motion.div
                                            className="relative z-10 mt-2 text-sm font-semibold tracking-wide"
                                            animate={{
                                                color: [
                                                    "rgb(255, 255, 255)",
                                                    "rgb(38, 38, 38)",
                                                    "rgb(255, 255, 255)",
                                                    "rgb(38, 38, 38)",
                                                    "rgb(255, 255, 255)"
                                                ]
                                            }}
                                            transition={{
                                                duration: 6,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                times: [0, 0.25, 0.5, 0.75, 1]
                                            }}
                                        >
                                            Smooth Transitions
                                        </motion.div>
                                    </div>
                                }
                                className="h-full"
                            />
                        </Link>

                        {/* Loaders */}
                        <Link
                            href="/docs/animations/loaders/orbit"
                            className="group/item block h-full w-full"
                        >
                            <BentoGridItem
                                title="Loaders"
                                description="Orbit, Gooey, Morphing"
                                header={
                                    <div className="flex h-full min-h-[6rem] w-full items-center justify-center gap-8 p-6">
                                        <div className="flex flex-col items-center gap-2">
                                            <LoaderOrbit
                                                size={50}
                                                particleCount={4}
                                                color="#8b5cf6"
                                                particleSize={8}
                                            />
                                        </div>
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
                                        </div>
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="flex gap-1">
                                                <div className="h-3 w-3 animate-bounce rounded-full bg-pink-500" style={{ animationDelay: '0s' }} />
                                                <div className="h-3 w-3 animate-bounce rounded-full bg-pink-500" style={{ animationDelay: '0.1s' }} />
                                                <div className="h-3 w-3 animate-bounce rounded-full bg-pink-500" style={{ animationDelay: '0.2s' }} />
                                            </div>
                                        </div>
                                    </div>
                                }
                                className="h-full"
                            />
                        </Link>

                        {/* Pages */}
                        <Link
                            href="/docs/animations/pages/page-transition-fade"
                            className="group/item block h-full w-full"
                        >
                            <BentoGridItem
                                title="Pages"
                                description="Smooth page transitions"
                                header={
                                    <div className="flex h-full min-h-[6rem] w-full items-center justify-center p-6">
                                        <div className="relative h-40 w-56 transform perspective-[1000px] hover:scale-105 transition-transform duration-300">
                                            <motion.div
                                                className="absolute inset-0 rounded-2xl border border-neutral-200 bg-white p-5 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
                                                initial={{ opacity: 1, scale: 1, y: 0 }}
                                                animate={{
                                                    opacity: [1, 0, 0, 1],
                                                    scale: [1, 0.95, 0.95, 1],
                                                    y: [0, -10, -10, 0]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    repeatDelay: 1,
                                                    times: [0, 0.3, 0.7, 1]
                                                }}
                                            >
                                                <div className="mb-2 h-3 w-3/4 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                                                <div className="mb-2 h-2 w-full rounded-full bg-neutral-200 dark:bg-neutral-700" />
                                                <div className="mb-2 h-2 w-5/6 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                                                <div className="h-2 w-2/3 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                                            </motion.div>
                                            <motion.div
                                                className="absolute inset-0 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/50 to-blue-100/50 p-5 shadow-2xl dark:border-blue-900/40 dark:from-blue-950/20 dark:to-blue-900/20"
                                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                                animate={{
                                                    opacity: [0, 1, 1, 0],
                                                    scale: [0.95, 1, 1, 0.95],
                                                    y: [10, 0, 0, 10]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    repeatDelay: 1,
                                                    times: [0, 0.3, 0.7, 1]
                                                }}
                                            >
                                                <div className="mb-2 h-3 w-3/4 rounded-full bg-blue-300 dark:bg-blue-700" />
                                                <div className="mb-2 h-2 w-full rounded-full bg-blue-200 dark:bg-blue-800" />
                                                <div className="mb-2 h-2 w-5/6 rounded-full bg-blue-200 dark:bg-blue-800" />
                                                <div className="h-2 w-2/3 rounded-full bg-blue-200 dark:bg-blue-800" />
                                            </motion.div>
                                        </div>
                                    </div>
                                }
                                className="h-full"
                            />
                        </Link>

                        {/* Hooks */}
                        <Link
                            href="/docs/hooks/hover-glow"
                            className="group/item block h-full w-full"
                        >
                            <BentoGridItem
                                title="Hooks"
                                description="Reusable animation hooks"
                                header={
                                    <div className="flex h-full min-h-[6rem] w-full items-center justify-center p-6">
                                        <div className="w-full max-w-[260px] rounded-2xl border border-neutral-200/50 bg-neutral-900 p-5 font-mono text-sm shadow-2xl dark:border-white/10 dark:bg-black text-neutral-300">
                                            {/* Mac Window Dots */}
                                            <div className="mb-4 flex gap-2">
                                                <div className="h-3 w-3 rounded-full bg-red-500/80 shadow-sm" />
                                                <div className="h-3 w-3 rounded-full bg-amber-500/80 shadow-sm" />
                                                <div className="h-3 w-3 rounded-full bg-green-500/80 shadow-sm" />
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-purple-600 dark:text-purple-400">import</span>
                                                    <span className="text-neutral-900 dark:text-white">{'{'}</span>
                                                    <span className="text-blue-600 dark:text-blue-400">useHover</span>
                                                    <span className="text-neutral-900 dark:text-white">{'}'}</span>
                                                </div>
                                                <div className="h-px bg-neutral-200 dark:bg-neutral-700" />
                                                <div className="flex items-center gap-2">
                                                    <span className="text-purple-600 dark:text-purple-400">const</span>
                                                    <span className="text-neutral-900 dark:text-white">hover</span>
                                                    <span className="text-neutral-500">=</span>
                                                    <span className="text-blue-600 dark:text-blue-400">useHover()</span>
                                                    <motion.span
                                                        className="inline-block h-3 w-1.5 bg-blue-500"
                                                        animate={{ opacity: [1, 0, 1] }}
                                                        transition={{ duration: 1, repeat: Infinity }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                className="h-full"
                            />
                        </Link>
                    </BentoGrid>
                </div>
            </section>



            {/* Testimonials Section */}
            <section className="relative overflow-hidden bg-neutral-50 py-24 dark:bg-black">
                <div className="container relative z-10 mx-auto px-4">
                    <motion.div
                        className="mb-16 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="mb-3 text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white md:text-5xl">
                            Loved by{" "}
                            <CanvasText
                                text="Developers"
                                className="bg-clip-text text-transparent px-2"
                                colors={["#10b981", "#34d399", "#6ee7b7"]}
                                curveIntensity={40}
                                lineWidth={3}
                                lineGap={4}
                            />
                        </h2>
                        <p className="text-base text-neutral-600 dark:text-neutral-400">
                            See what developers are saying about AnimBits
                        </p>
                    </motion.div>

                    <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] max-w-7xl mx-auto">
                        <TestimonialsHorizontal testimonials={testimonials} duration={30} />
                    </div>
                </div>
            </section>

            {/* Featured Video Section */}
            <section className="relative overflow-hidden bg-white dark:bg-neutral-950 py-24 md:py-32 border-t border-neutral-200 dark:border-white/5">
                <div className="container relative z-10 mx-auto px-4">
                    <motion.div
                        className="mx-auto mb-16 max-w-3xl text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white md:text-4xl">
                            Featured
                        </h2>
                        <p className="text-base text-neutral-600 dark:text-neutral-400">
                            See AnimBits in action and featured coverage
                        </p>
                    </motion.div>

                    <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {/* YouTube Video */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="lg:col-span-3 h-full"
                        >
                            <div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-neutral-200/60 bg-white shadow-2xl dark:border-white/10 dark:bg-neutral-900/40">
                                <div className="relative flex-1 aspect-video lg:aspect-auto min-h-[300px]">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/D2mzsmNXEm8?si=GcpmHztd4IP2v42F&start=2227"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                        className="absolute inset-0"
                                    />
                                </div>
                                <div className="p-8 border-t border-neutral-100 dark:border-white/5 bg-neutral-50/30 dark:bg-black/20">
                                    <div className="mb-3 flex items-center gap-3 text-sm font-semibold tracking-wide text-neutral-500 dark:text-neutral-400">
                                        <span className="flex items-center gap-1.5 text-red-600 dark:text-red-500">
                                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg>
                                            YouTube
                                        </span>
                                        <span className="text-neutral-300 dark:text-neutral-700">•</span>
                                        <span>Reviewing YOUR Open Source Projects</span>
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                                        AnimBits Featured on YouTube
                                    </h3>
                                </div>
                            </div>
                        </motion.div>

                        {/* Blog Post Card */}
                        <motion.a
                            href="https://kachibito.net/useful-resource/animbits"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="group block lg:col-span-2 h-full"
                        >
                            <div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-neutral-200/60 bg-white shadow-2xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-black/5 dark:border-white/10 dark:bg-neutral-900/40 dark:hover:border-white/20">
                                <div className="relative flex-1 aspect-video lg:aspect-auto min-h-[300px] overflow-hidden bg-neutral-50/30 dark:bg-black/20">
                                    <Image
                                        src="/animbits.png"
                                        alt="AnimBits - Featured on Kachibito"
                                        fill
                                        className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-8 border-t border-neutral-100 dark:border-white/5 bg-neutral-50/50 dark:bg-black/20 flex flex-col justify-center">
                                    <div className="mb-3 flex items-center gap-3 text-sm font-semibold tracking-wide text-neutral-500 dark:text-neutral-400">
                                        <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-500">
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                            </svg>
                                            Blog Post
                                        </span>
                                        <span className="text-neutral-300 dark:text-neutral-700">•</span>
                                        <span>Kachibito</span>
                                    </div>
                                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        Featured on Kachibito
                                    </h3>
                                    <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                                        Read about AnimBits on Kachibito, a popular Japanese web design and development resource blog.
                                    </p>
                                    <div className="flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                                        Read Article
                                        <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    </div>
                </div>
            </section>

            <div className="relative z-10 bg-white dark:bg-black w-full pb-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-b border-black/5 dark:border-white/10">
                <section className="pt-10">
                    <CTASection
                        badge={{
                            text: "Ready to get started?",
                        }}
                        title="Build your next project with AnimBits"
                        description="Join thousands of developers building beautiful, animated interfaces with AnimBits."
                        action={{
                            text: "Get Started",
                            href: "/docs/installation",
                            variant: "default",
                        }}
                        stars={stars}
                    />
                </section>
            </div>

            {/* Sticky Reveal Footer Wrapper */}
            <div className="relative h-[650px] md:h-[500px]" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
                <div className="fixed bottom-0 left-0 w-full h-[650px] md:h-[500px]">
                    <Footer />
                </div>
            </div>
        </div>
    );
}