import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
    title: "About - Animbits",
    description: "Learn about Animbits - a curated suite of animations, hooks, and components for React and Next.js.",
};

export default function About() {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950">
            <Navbar />

            <main className="relative pt-24 pb-16">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0/0.05)_1px,transparent_0)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.05)_1px,transparent_0)] pointer-events-none" />

                <div className="container relative z-10 mx-auto max-w-3xl px-6">
                    <div className="mb-10 text-center">
                        <h1 className="mb-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-5xl">
                            About Animbits
                        </h1>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            The foundation for interactive UI.
                        </p>
                    </div>

                    <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-neutral-900 dark:prose-a:text-white hover:prose-a:text-blue-600 dark:hover:prose-a:text-blue-400 transistion-colors">
                        <p className="lead text-lg text-neutral-600 dark:text-neutral-300">
                            Animbits is a curated suite of animations, hooks, and components designed to make your applications feel alive. Copy, paste, and ship premium interfaces without reinventing the wheel.
                        </p>

                        <div className="my-8 h-px w-full bg-neutral-200 dark:bg-neutral-800" />

                        <h3>Our Mission</h3>
                        <p>
                            Building beautiful, interactive interfaces shouldn&apos;t mean wrestling with the same animation logic on every project. Animbits exists to give developers a reliable, production-ready foundation of motion and interaction primitives — so you can focus on building what makes your product unique.
                        </p>

                        <h3>What We Offer</h3>
                        <p>
                            Animbits provides a growing collection of resources for React and Next.js developers:
                        </p>
                        <ul>
                            <li><strong>Animations</strong> — polished, performant motion for buttons, layouts, and special effects.</li>
                            <li><strong>Components</strong> — ready-to-use interactive building blocks like toasts, badges, and heroes.</li>
                            <li><strong>Hooks</strong> — reusable React hooks for common interaction patterns such as hover and lift effects.</li>
                        </ul>

                        <h3>Open Source</h3>
                        <p>
                            Animbits is open source and released under the MIT License. The code lives on{" "}
                            <Link href="https://github.com/Garvit1000/AnimBits" target="_blank" rel="noopener noreferrer">GitHub</Link>{" "}
                            — contributions, issues, and pull requests are always welcome. We believe great tools are built in the open, with the community.
                        </p>

                        <h3>Who&apos;s Behind It</h3>
                        <p>
                            Animbits is built and maintained by{" "}
                            <Link href="https://github.com/Garvit1000" target="_blank" rel="noopener noreferrer">Garvit Joshi</Link>{" "}
                            along with contributors from the React community. Our goal is simple: provide the tools so you can focus on building.
                        </p>

                        <h3>Get in Touch</h3>
                        <p>
                            Questions, feedback, or ideas? Reach out through our{" "}
                            <Link href="https://github.com/Garvit1000/AnimBits/issues" target="_blank" rel="noopener noreferrer">GitHub issues</Link>{" "}
                            or explore the{" "}
                            <Link href="/docs">documentation</Link>{" "}
                            to get started.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
