import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { CodeBlockWithCopy } from "@/components/ui/code-block-with-copy";
import { TextShimmer } from "@/registry/new-york/animations/text/shimmer";
import { RippleButton } from "@/registry/new-york/animations/buttons/ripple";
import { CardParallaxTilt } from "@/registry/new-york/animations/cards/parallax-tilt";
import { LoaderOrbit } from "@/registry/new-york/animations/loaders/orbit";
import { LoaderMorphing } from "@/registry/new-york/animations/loaders/morphing";
import { HeartbeatIcon } from "@/registry/new-york/animations/icons/heartbeat";
import { StaggerFadeList } from "@/registry/new-york/animations/lists/stagger-fade";

import { ThemeToggleCircular } from "@/registry/new-york/animations/transitions/theme-toggle-circular";
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";
import { TestimonialsHorizontal } from "@/components/testimonials-horizontal";
import { Footer } from "@/components/footer";
import { GithubButton } from "@/components/ui/github-button";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { CTASection } from "@/components/cta-with-rectangle";

import { ArrowRight, Sparkles, Heart, ChevronRight } from "lucide-react";
import * as motion from "framer-motion/client";

const testimonials = [
    {
        text: "AnimBits saved me hours of development time. The animations are smooth and production-ready!",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
        name: "Sarah Chen",
        role: "Frontend Developer",
    },
    {
        text: "The best animation library for React. Easy to use and looks amazing!",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",
        name: "Mike Johnson",
        role: "UI/UX Designer",
    },
    {
        text: "Copy-paste simplicity with professional results. Highly recommended!",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jasmine",
        name: "Emily Rodriguez",
        role: "Product Manager",
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
        <div className="min-h-screen bg-white dark:bg-neutral-950">
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
                    <div className="mx-auto max-w-4xl 2xl:max-w-5xl text-center">
                        {/* Badge */}
                        <motion.div
                            className="mb-8 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm relative bg-neutral-50 dark:bg-neutral-900"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, rgb(59 130 246) 0%, rgb(229 231 235) 30%, rgb(229 231 235) 100%)",
                                backgroundOrigin: "border-box",
                                backgroundClip: "padding-box, border-box",
                                border: "1px solid transparent",
                            }}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="absolute inset-0 rounded-full bg-neutral-50 dark:bg-neutral-900 m-[1px]" />
                            <Sparkles className="h-3.5 w-3.5 text-blue-600 relative z-10" />
                            <span className="font-medium text-neutral-700 dark:text-neutral-300 relative z-10">
                                Production-ready animations
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.div
                            className="mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white md:text-5xl lg:text-6xl 2xl:text-7xl">
                                The Foundation for Your
                            </h1>
                            <div className="flex justify-center">
                                <ContainerTextFlip
                                    words={[
                                        "Animation System",
                                        "Design System",
                                        "Component Library",
                                    ]}
                                    className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl"
                                    textClassName="font-bold"
                                />
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.div
                            className="mx-auto mb-10 max-w-2xl 2xl:max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg 2xl:text-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="mb-4">
                                A set of beautifully designed animations that you can install
                                with one command.
                            </p>
                            <p className="mb-4">
                                Stop writing repetitive Motion code.Open Source. Open Code.
                            </p>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            className="mb-16 flex flex-wrap items-center justify-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Link href="/docs/installation">
                                <motion.button
                                    className="inline-flex h-11 2xl:h-12 items-center gap-2 rounded-lg bg-neutral-900 px-6 2xl:px-8 text-sm 2xl:text-base font-semibold text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Getting Started
                                    <ArrowRight className="h-4 w-4" />
                                </motion.button>
                            </Link>
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
                                className="h-11 2xl:h-12 rounded-lg px-6 2xl:px-8 text-sm 2xl:text-base font-semibold"
                            />
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
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                                    alt="Next.js"
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
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                                    alt="React"
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
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                                    alt="Tailwind CSS"
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
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
                                    alt="Framer Motion"
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
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                                    alt="TypeScript"
                                    className="h-6 w-6"
                                />
                                <span className="text-sm font-medium">TypeScript</span>
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Animation Categories */}
            <section className="relative bg-white py-24 2xl:py-32 dark:bg-neutral-950">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="mb-20 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-4 inline-block rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 dark:border-neutral-800 dark:bg-neutral-900">
                            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                Production Ready
                            </span>
                        </div>
                        <h2 className="mb-4 text-4xl font-bold text-neutral-900 dark:text-white md:text-5xl">
                            Animation Categories
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
                            Explore our collection of production-ready animations
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
                                    <div className="flex h-full min-h-[6rem] w-full items-center justify-center">
                                        <TextShimmer
                                            className="text-3xl font-bold"
                                            colors={[
                                                "transparent",
                                                "rgba(59, 130, 246, 0.9)",
                                                "transparent",
                                            ]}
                                            duration={2.5}
                                        >
                                            Text
                                        </TextShimmer>
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
                                    <div className="flex h-full min-h-[6rem] w-full items-center justify-center">
                                        <HeartbeatIcon className="text-red-500">
                                            <Heart className="h-12 w-12 fill-current" />
                                        </HeartbeatIcon>
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
                                    <div className="flex h-full min-h-[6rem] w-full items-center justify-center">
                                        <StaggerFadeList className="w-32 space-y-2">
                                            {[1, 2, 3].map((i) => (
                                                <div
                                                    key={i}
                                                    className="h-2 w-full rounded-full bg-neutral-300 dark:bg-neutral-700"
                                                />
                                            ))}
                                        </StaggerFadeList>
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
                                    <div className="flex h-full min-h-[6rem] w-full items-center justify-center p-4">
                                        <CardParallaxTilt className="w-full max-w-xs overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-md dark:border-neutral-800 dark:bg-neutral-900">
                                            <img
                                                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                                                alt="Beautiful mountain landscape"
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
                                    <div className="flex h-full min-h-[6rem] w-full items-center justify-center">
                                        <RippleButton className="rounded-lg bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-sm hover:bg-blue-700">
                                            Click Me
                                        </RippleButton>
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
                                    <div className="flex h-full min-h-[6rem] w-full items-center justify-center">
                                        <ThemeToggleCircular>
                                            <div className="h-10 w-10 rounded-full bg-neutral-900 dark:bg-neutral-100" />
                                        </ThemeToggleCircular>
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
                                    <div className="flex h-full min-h-[6rem] w-full items-center justify-center">
                                        <LoaderOrbit
                                            size={60}
                                            particleCount={4}
                                            color="#8b5cf6"
                                            particleSize={10}
                                        />
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
                                    <div className="flex h-full min-h-[6rem] w-full items-center justify-center">
                                        <div className="rounded-lg border-2 border-dashed border-neutral-300 p-6 dark:border-neutral-700">
                                            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                                Page Transition
                                            </span>
                                        </div>
                                    </div>
                                }
                                className="h-full"
                            />
                        </Link>

                        {/* Morphing */}
                        <Link
                            href="/docs/animations/loaders/morphing"
                            className="group/item block h-full w-full"
                        >
                            <BentoGridItem
                                title="Morphing"
                                description="Shape-shifting animation"
                                header={
                                    <div className="flex h-full min-h-[6rem] w-full items-center justify-center">
                                        <LoaderMorphing size={60} color="#ec4899" duration={1.5} />
                                    </div>
                                }
                                className="h-full"
                            />
                        </Link>
                    </BentoGrid>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="bg-white py-20 2xl:py-28 dark:bg-neutral-950">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="mb-16 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="mb-3 text-3xl font-bold text-neutral-900 dark:text-white md:text-4xl">
                            How It Works
                        </h2>
                        <p className="text-base text-neutral-600 dark:text-neutral-400">
                            Simple CLI command to add any animation to your project
                        </p>
                    </motion.div>

                    <div className="mx-auto grid max-w-6xl 2xl:max-w-7xl items-center gap-12 2xl:gap-16 lg:grid-cols-2">
                        {/* Diagram - Left Side */}
                        <motion.div
                            className="flex justify-center"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <DatabaseWithRestApi
                                circleText="CLI"
                                badgeTexts={{
                                    first: "text",
                                    second: "button",
                                    third: "card",
                                    fourth: "loader",
                                }}
                                buttonTexts={{
                                    first: "AnimBits",
                                    second: "registry",
                                }}
                                title="Animation categories connected to your components"
                                lightColor="#3b82f6"
                            />
                        </motion.div>

                        {/* Text Content - Right Side */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div>
                                <h3 className="mb-3 text-2xl font-bold text-neutral-900 dark:text-white">
                                    Install with One Command
                                </h3>
                                <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                                    Add any animation to your project with a single CLI command.
                                    No need to copy-paste code or manage dependencies manually.
                                </p>
                            </div>

                            <CodeBlockWithCopy code="npx shadcn add https://animbits.dev/r/buttons-lift.json" />

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-semibold text-neutral-900 dark:text-white">
                                            Choose Your Animation
                                        </h4>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                            Browse our collection of text, button, card, and loader
                                            animations
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-semibold text-neutral-900 dark:text-white">
                                            Run the CLI Command
                                        </h4>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                            Install the animation component with all dependencies
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-semibold text-neutral-900 dark:text-white">
                                            Use in Your Project
                                        </h4>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                            Import and customize the animation to match your design
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
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
                />
            </section>

            <Footer />
        </div>
    );
}
