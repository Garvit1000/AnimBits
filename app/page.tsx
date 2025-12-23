import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TextBlurIn } from "@/registry/new-york/animations/text/blur-in";

import { TextShimmer } from "@/registry/new-york/animations/text/shimmer";
import { RippleButton } from "@/registry/new-york/animations/buttons/ripple";
import { CardParallaxTilt } from "@/registry/new-york/animations/cards/parallax-tilt";
import { LoaderOrbit } from "@/registry/new-york/animations/loaders/orbit";
import { HeartbeatIcon } from "@/registry/new-york/animations/icons/heartbeat";

import { TestimonialsHorizontal } from "@/components/testimonials-horizontal";
import { Footer } from "@/components/footer";
import { GithubButton } from "@/components/ui/github-button";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { CTASection } from "@/components/cta-with-rectangle";

import { ArrowRight, Sparkles, Heart, ChevronRight } from "lucide-react";
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
                    Now Available: Hooks — structured, reusable motion for your UI.
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                </span>
            </StickyBanner>
            <Navbar />

            {/* Hero Section */}
            <section className="relative w-full overflow-hidden bg-white dark:bg-neutral-950">
                {/* Subtle dot pattern background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0/0.05)_1px,transparent_0)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.05)_1px,transparent_0)]" />

                <div className="container relative z-10 mx-auto px-4 py-20 md:py-28 lg:py-36 2xl:py-44">
                    <div className="mx-auto max-w-5xl 2xl:max-w-7xl text-center">
                        {/* Badge */}
                        <motion.div
                            className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50/80 px-3 py-1 text-sm font-medium text-neutral-800 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-200"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Sparkles className="h-3.5 w-3.5 text-neutral-600 dark:text-neutral-400" />
                            <span>Production-ready animations</span>
                            <ArrowRight className="h-3.5 w-3.5 text-neutral-600 dark:text-neutral-400" />
                        </motion.div>

                        {/* Main Heading */}
                        <motion.div
                            className="mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="flex flex-col items-center">
                                {/* Mobile version - two lines */}
                                <div className="block sm:hidden">
                                    <TextBlurIn
                                        className="text-[2rem] font-bold leading-tight tracking-tight text-neutral-900 dark:text-white text-center px-4"
                                        by="character"
                                        staggerDelay={0.02}
                                        duration={1.2}
                                        delay={0.3}
                                    >
                                        The Foundation for
                                    </TextBlurIn>
                                    <TextBlurIn
                                        className="text-[2rem] font-bold leading-tight tracking-tight text-neutral-900 dark:text-white text-center px-4"
                                        by="character"
                                        staggerDelay={0.02}
                                        duration={1.2}
                                        delay={0.5}
                                    >
                                        Interactive UI
                                    </TextBlurIn>
                                </div>
                                {/* Desktop version - single line */}
                                <TextBlurIn
                                    className="hidden sm:block text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white text-center"
                                    by="character"
                                    staggerDelay={0.02}
                                    duration={1.2}
                                    delay={0.3}
                                >
                                    The Foundation for Interactive UI
                                </TextBlurIn>
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.div
                            className="mx-auto mb-12 max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg 2xl:text-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p>
                                A curated suite of animations, hooks, and components. Designed to make your applications feel alive. Copy, paste, and ship premium interfaces.
                            </p>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            className="mb-16 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Link href="/docs/installation" className="w-full sm:w-auto">
                                <motion.button
                                    className="w-full sm:w-auto inline-flex h-11 2xl:h-12 items-center justify-center gap-2 rounded-lg bg-neutral-900 px-6 2xl:px-8 text-sm 2xl:text-base font-semibold text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
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
                                    className="w-full h-11 2xl:h-12 rounded-lg px-6 2xl:px-8 text-sm 2xl:text-base font-semibold"
                                />
                            </div>
                        </motion.div>

                        {/* Tech Stack with Devicon Icons */}
                        <motion.div
                            className="flex flex-wrap items-center justify-center gap-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
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
                </div>
            </section>



            {/* Animation Categories */}
            <section className="relative bg-white pt-4 pb-24 2xl:pb-32 dark:bg-neutral-950">
                <div className="container mx-auto px-4">

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
                                            className="text-4xl font-bold bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-300 dark:to-white bg-clip-text"
                                            colors={[
                                                "transparent",
                                                "rgba(59, 130, 246, 0.9)",
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
                                        <div className="flex items-center gap-8">
                                            <div className="flex flex-col items-center gap-3">
                                                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/40 dark:to-red-900/40 shadow-lg">
                                                    <HeartbeatIcon className="text-red-500">
                                                        <Heart className="h-10 w-10 fill-current" />
                                                    </HeartbeatIcon>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center gap-3">
                                                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/40 shadow-lg">
                                                    <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-blue-500 border-t-transparent" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center gap-3">
                                                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/40 dark:to-purple-900/40 shadow-lg">
                                                    <div className="h-10 w-10 animate-pulse rounded-full bg-purple-500" />
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
                                            className="w-full max-w-xs"
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
                                            <CardParallaxTilt className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-md dark:border-neutral-800 dark:bg-neutral-900">
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
                                        <RippleButton className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-shadow">
                                            Click Me
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

                                        {/* Toggle button */}
                                        <motion.div
                                            className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 shadow-xl"
                                            animate={{
                                                rotate: [0, 360]
                                            }}
                                            transition={{
                                                duration: 6,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                        >
                                            <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                            </svg>
                                        </motion.div>
                                        <motion.div
                                            className="relative z-10 text-xs font-medium"
                                            animate={{
                                                color: [
                                                    "rgb(255, 255, 255)",
                                                    "rgb(64, 64, 64)",
                                                    "rgb(255, 255, 255)",
                                                    "rgb(64, 64, 64)",
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
                                            Smooth theme transitions
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
                                        <div className="relative h-36 w-48">
                                            <motion.div
                                                className="absolute inset-0 rounded-xl border-2 border-neutral-200 bg-white p-4 shadow-xl dark:border-neutral-700 dark:bg-neutral-800"
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
                                                className="absolute inset-0 rounded-xl border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-blue-100 p-4 shadow-xl dark:border-blue-700 dark:from-blue-950 dark:to-blue-900"
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
                                        <div className="w-full max-w-[220px] rounded-xl border-2 border-neutral-200 bg-neutral-50 p-4 font-mono text-xs dark:border-neutral-700 dark:bg-neutral-800">
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
            <section className="bg-neutral-50 py-20 dark:bg-neutral-900/50">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="mb-16 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="mb-3 text-3xl font-bold text-neutral-900 dark:text-white md:text-4xl">
                            Loved by Developers
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
            <section className="relative overflow-hidden bg-white dark:bg-neutral-950 py-20 md:py-28">
                <div className="container mx-auto px-4">
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

                    <div className="mx-auto max-w-5xl space-y-8">
                        {/* YouTube Video */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
                                <div className="relative aspect-video">
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
                                <div className="p-6 md:p-8">
                                    <div className="mb-3 flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
                                        <span className="flex items-center gap-1.5">
                                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg>
                                            YouTube
                                        </span>
                                        <span>•</span>
                                        <span>Reviewing YOUR Open Source Projects</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
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
                            className="group block"
                        >
                            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
                                <div className="grid md:grid-cols-2 gap-0">
                                    <div className="relative aspect-video md:aspect-auto overflow-hidden bg-white dark:bg-neutral-900">
                                        <Image
                                            src="/animbits.png"
                                            alt="AnimBits - Featured on Kachibito"
                                            width={1200}
                                            height={630}
                                            className="h-full w-full object-contain p-8 transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col justify-center">
                                        <div className="mb-3 flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
                                            <span className="flex items-center gap-1.5">
                                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                                </svg>
                                                Blog Post
                                            </span>
                                            <span>•</span>
                                            <span>Kachibito</span>
                                        </div>
                                        <h3 className="mb-3 text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
                            </div>
                        </motion.a>
                    </div>
                </div>
            </section>

            <section className="py-20">
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

            <Footer />
        </div>
    );
}