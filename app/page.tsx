"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Badge } from "@/components/ui/badge"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { ContainerTextFlip } from "@/components/ui/container-text-flip"
import { Button } from "@/components/ui/button"
import { TextShimmer } from "@/registry/new-york/animations/text/shimmer"
import { TextScramble } from "@/registry/new-york/animations/text/scramble"
import { TextWordCarousel } from "@/registry/new-york/animations/text/word-carousel"
import { RippleButton } from "@/registry/new-york/animations/buttons/ripple"
import { MagneticButton } from "@/registry/new-york/animations/buttons/magnetic"
import { CardParallaxTilt } from "@/registry/new-york/animations/cards/parallax-tilt"
import { LoaderOrbit } from "@/registry/new-york/animations/loaders/orbit"
import { LoaderGooeyBlobs } from "@/registry/new-york/animations/loaders/gooey-blobs"
import { LoaderMorphing } from "@/registry/new-york/animations/loaders/morphing"
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api"
import { TestimonialsColumn } from "@/components/testimonials-columns-1"
import { Footer } from "@/components/footer"

import { ArrowRight, Sparkles, RotateCcw } from "lucide-react"
import { motion } from "framer-motion"

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
]

export default function Home() {
  const [scrambleKey, setScrambleKey] = useState(0)

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-white dark:bg-neutral-950">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0/0.05)_1px,transparent_0)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.05)_1px,transparent_0)]" />

        <div className="container relative z-10 mx-auto px-4 py-20 md:py-28 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <motion.div
              className="mb-8 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm relative bg-neutral-50 dark:bg-neutral-900"
              style={{
                backgroundImage: 'linear-gradient(135deg, rgb(59 130 246) 0%, rgb(229 231 235) 30%, rgb(229 231 235) 100%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                border: '1px solid transparent',
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
              <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white md:text-5xl lg:text-6xl">
                The Foundation for Your
              </h1>
              <div className="flex justify-center">
                <ContainerTextFlip
                  words={["Animation System", "Design System", "Component Library"]}
                  className="text-3xl md:text-5xl lg:text-6xl"
                  textClassName="font-bold"
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="mb-4">
                A set of beautifully designed animations that you can install with one command.
              </p>
              <p>
                Stop writing repetitive Motion code. Open Source. Open Code.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="mb-16 flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.button
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-neutral-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Getting Started
                <ArrowRight className="h-4 w-4" />
              </motion.button>
              <motion.button
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-neutral-200 bg-white px-6 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-900"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Read Docs
              </motion.button>
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
                  className="h-6 w-6 dark:invert"
                />
                <span className="text-sm font-medium">Next.js</span>
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
                  className="h-6 w-6 dark:invert"
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

      {/* Animation Showcase */}
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
              Featured Animations
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-400">
              Copy, paste, and customize. All animations are production-ready.
            </p>
          </motion.div>

          <BentoGrid className="mx-auto max-w-7xl">
            {/* Text Shimmer */}
            <BentoGridItem
              title="Text Shimmer"
              description="Smooth gradient sweep animation"
              header={
                <div className="flex h-full min-h-[6rem] w-full items-center justify-center">
                  <TextShimmer
                    className="text-4xl font-bold"
                    colors={["transparent", "rgba(59, 130, 246, 0.9)", "transparent"]}
                    duration={2.5}
                  >
                    Shimmer
                  </TextShimmer>
                </div>
              }
            />

            {/* Text Scramble */}
            <BentoGridItem
              title="Text Scramble"
              description="Hacker-style decode effect"
              header={
                <div className="group relative flex h-full min-h-[6rem] w-full items-center justify-center">
                  <TextScramble key={scrambleKey} className="text-2xl font-bold">
                    Decode Me
                  </TextScramble>
                  <Button
                    onClick={() => setScrambleKey((prev) => prev + 1)}
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                  </Button>
                </div>
              }
            />

            {/* Word Carousel */}
            <BentoGridItem
              title="Word Carousel"
              description="Rotating word transitions"
              header={
                <div className="flex h-full min-h-[6rem] w-full items-center justify-center text-center">
                  <div className="text-xl font-bold">
                    Build{" "}
                    <TextWordCarousel
                      words={["Fast", "Modern", "Beautiful"]}
                      className="text-blue-600"
                    />
                  </div>
                </div>
              }
            />

            {/* 3D Parallax Tilt - Large */}
            <BentoGridItem
              title="3D Parallax Tilt"
              description="Mouse-tracking depth effect"
              header={
                <div className="flex h-full min-h-[6rem] w-full items-center justify-center p-4">
                  <CardParallaxTilt className="w-full max-w-xs overflow-hidden rounded-lg border bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
                    <img
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                      alt="Beautiful mountain landscape"
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold">Mountain View</div>
                          <div className="text-xs text-neutral-500 dark:text-neutral-400">Premium Landscape</div>
                        </div>
                        <Badge>New</Badge>
                      </div>
                    </div>
                  </CardParallaxTilt>
                </div>
              }
              className="md:col-span-2 md:row-span-2"
            />

            {/* Ripple Effect */}
            <BentoGridItem
              title="Ripple Effect"
              description="Touch-aware wave animation"
              header={
                <div className="flex h-full min-h-[6rem] w-full items-center justify-center">
                  <RippleButton className="rounded-lg bg-blue-600 px-6 py-2.5 font-semibold text-white">
                    Click Me
                  </RippleButton>
                </div>
              }
            />

            {/* Magnetic Button */}
            <BentoGridItem
              title="Magnetic Button"
              description="Cursor-following attraction"
              header={
                <div className="flex h-full min-h-[6rem] w-full items-center justify-center">
                  <MagneticButton className="rounded-lg bg-purple-600 px-6 py-2.5 font-semibold text-white">
                    Magnetic
                  </MagneticButton>
                </div>
              }
            />

            {/* Orbit Loader */}
            <BentoGridItem
              title="Orbit Loader"
              description="Spinning particles"
              header={
                <div className="flex h-full min-h-[6rem] w-full items-center justify-center">
                  <LoaderOrbit size={60} particleCount={4} color="#8b5cf6" particleSize={10} />
                </div>
              }
            />

            {/* Gooey Blobs */}
            <BentoGridItem
              title="Gooey Blobs"
              description="Organic merging effect"
              header={
                <div className="flex h-full min-h-[6rem] w-full items-center justify-center">
                  <LoaderGooeyBlobs size={20} color="#3b82f6" duration={2} />
                </div>
              }
            />

            {/* Morphing Loader */}
            <BentoGridItem
              title="Morphing Loader"
              description="Shape-shifting animation"
              header={
                <div className="flex h-full min-h-[6rem] w-full items-center justify-center">
                  <LoaderMorphing size={60} color="#ec4899" duration={1.5} />
                </div>
              }
            />
          </BentoGrid>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20 dark:bg-neutral-950">
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

          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
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
                  Add any animation to your project with a single CLI command. No need to copy-paste code or manage dependencies manually.
                </p>
              </div>

              <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
                <code className="text-sm text-neutral-900 dark:text-neutral-100">
                  npx shadcn add @animbits/text/shimmer
                </code>
              </div>

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
                      Browse our collection of text, button, card, and loader animations
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

          <div className="[mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TestimonialsColumn testimonials={testimonials} duration={15} />
              <TestimonialsColumn testimonials={testimonials.slice().reverse()} duration={18} className="hidden md:block" />
              <TestimonialsColumn testimonials={testimonials} duration={20} className="hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

