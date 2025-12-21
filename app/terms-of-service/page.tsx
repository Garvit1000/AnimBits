import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
    title: "Terms of Service - Animbits",
    description: "Terms of Service for Animbits - The Foundation for Interactive UI",
};

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950">
            <Navbar />

            <main className="relative pt-24 pb-16">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0/0.05)_1px,transparent_0)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.05)_1px,transparent_0)] pointer-events-none" />

                <div className="container relative z-10 mx-auto max-w-3xl px-6">
                    <div className="mb-10 text-center">
                        <h1 className="mb-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-5xl">
                            Terms of Service
                        </h1>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </div>

                    <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-neutral-900 dark:prose-a:text-white hover:prose-a:text-blue-600 dark:hover:prose-a:text-blue-400 transistion-colors">
                        <p className="lead text-lg text-neutral-600 dark:text-neutral-300">
                            Please read these Terms of Service ("Terms") carefully before using the Animbits library and website.
                        </p>

                        <div className="my-8 h-px w-full bg-neutral-200 dark:bg-neutral-800" />

                        <h3>1. Acceptance of Terms</h3>
                        <p>
                            By accessing or using Animbits, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not use our services.
                        </p>

                        <h3>2. License</h3>
                        <p>
                            Animbits is open-source software. Most components and code snippets are licensed under the MIT License, which allows you to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, subject to the conditions of the license. Please refer to the LICENSE file in our GitHub repository for full details.
                        </p>

                        <h3>3. Disclaimer</h3>
                        <p>
                            The software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability.
                        </p>

                        <h3>4. Changes to Terms</h3>
                        <p>
                            We reserve the right to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically for changes.
                        </p>

                        <h3>5. Contact Us</h3>
                        <p>
                            If you have any questions about these Terms, please contact us via our GitHub repository.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
