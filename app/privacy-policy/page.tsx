import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
    title: "Privacy Policy - Animbits",
    description: "Privacy Policy for Animbits - The Foundation for Interactive UI",
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950">
            <Navbar />

            <main className="relative pt-24 pb-16">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0/0.05)_1px,transparent_0)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.05)_1px,transparent_0)] pointer-events-none" />

                <div className="container relative z-10 mx-auto max-w-3xl px-6">
                    <div className="mb-10 text-center">
                        <h1 className="mb-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-5xl">
                            Privacy Policy
                        </h1>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </div>

                    <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-neutral-900 dark:prose-a:text-white hover:prose-a:text-blue-600 dark:hover:prose-a:text-blue-400 transistion-colors">
                        <p className="lead text-lg text-neutral-600 dark:text-neutral-300">
                            At Animbits (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we respect your privacy and are committed to protecting it through our compliance with this policy.
                        </p>

                        <div className="my-8 h-px w-full bg-neutral-200 dark:bg-neutral-800" />

                        <h3>1. Information We Collect</h3>
                        <p>
                            Currently, Animbits is an open-source library and does not directly collect personal data from users of the library itself. However, when you visit our website or interact with our GitHub repository, certain standard information may be collected automatically by the platform providers (Vercel, GitHub).
                        </p>

                        <h3>2. How We Use Information</h3>
                        <p>
                            Any data collected (such as analytics on documentation usage) is used solely to improve the quality of our documentation, components, and user experience.
                        </p>

                        <h3>3. Third-Party Services</h3>
                        <p>
                            We use Vercel for hosting and GitHub for code distribution. Please refer to their respective privacy policies for information on how they handle data.
                        </p>

                        <h3>4. Advertising</h3>
                        <p>
                            We use Google AdSense, a third-party advertising service provided by Google, to display advertisements on our website.
                        </p>
                        <ul>
                            <li>
                                Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites.
                            </li>
                            <li>
                                Google&apos;s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.
                            </li>
                            <li>
                                Users may opt out of personalized advertising by visiting{" "}
                                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>. Alternatively, users can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{" "}
                                <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>.
                            </li>
                        </ul>
                        <p>
                            For more information on how Google uses data when you use our partners&apos; sites or apps, please review{" "}
                            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy &amp; Terms</a>.
                        </p>

                        <h3>5. Cookies</h3>
                        <p>
                            Our documentation site may use basic cookies for functionality (like theme preference), anonymous analytics to understand site usage, and advertising cookies as described above.
                        </p>

                        <h3>6. Contact Us</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us via our GitHub repository.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
