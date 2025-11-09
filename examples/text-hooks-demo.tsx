/**
 * Text Animation Hooks Demo
 * 
 * This file demonstrates how text animation hooks are component-agnostic
 * and can be applied to ANY text element (h1, h2, p, span, div, etc.)
 */

"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useShimmer, useScramble, useWordCarousel } from "@/lib/hooks"

export function TextHooksDemo() {
  return (
    <div className="space-y-12 p-8">
      {/* Shimmer Hook - Works with ANY element */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Shimmer Hook (useShimmer)</h2>
        <div className="space-y-4">
          <ShimmerOnH1 />
          <ShimmerOnH2 />
          <ShimmerOnParagraph />
          <ShimmerOnSpan />
          <ShimmerOnDiv />
        </div>
      </section>

      {/* Scramble Hook - Works with ANY element */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Scramble Hook (useScramble)</h2>
        <div className="space-y-4">
          <ScrambleOnH1 />
          <ScrambleOnH3 />
          <ScrambleOnParagraph />
          <ScrambleOnCode />
        </div>
      </section>

      {/* Word Carousel Hook - Works with ANY element */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Word Carousel Hook (useWordCarousel)</h2>
        <div className="space-y-4">
          <CarouselOnH1 />
          <CarouselOnSpan />
          <CarouselInSentence />
        </div>
      </section>
    </div>
  )
}

// ============================================
// SHIMMER EXAMPLES - Same hook, different elements
// ============================================

function ShimmerOnH1() {
  const shimmer = useShimmer()
  return (
    <motion.h1 {...shimmer} className="text-4xl font-bold">
      Shimmer on H1 Title
    </motion.h1>
  )
}

function ShimmerOnH2() {
  const shimmer = useShimmer({ duration: 3 })
  return (
    <motion.h2 {...shimmer} className="text-3xl font-semibold">
      Shimmer on H2 Subtitle
    </motion.h2>
  )
}

function ShimmerOnParagraph() {
  const shimmer = useShimmer({ repeat: false })
  return (
    <motion.p {...shimmer} className="text-lg">
      Shimmer on paragraph (one-time animation)
    </motion.p>
  )
}

function ShimmerOnSpan() {
  const shimmer = useShimmer()
  return (
    <div className="text-lg">
      This is a sentence with{" "}
      <motion.span {...shimmer} className="font-bold">
        shimmer on span
      </motion.span>{" "}
      inline!
    </div>
  )
}

function ShimmerOnDiv() {
  const shimmer = useShimmer()
  return (
    <motion.div {...shimmer} className="text-2xl font-bold text-center p-4 bg-neutral-100 dark:bg-neutral-800 rounded">
      Shimmer on DIV element
    </motion.div>
  )
}

// ============================================
// SCRAMBLE EXAMPLES - Same hook, different elements
// ============================================

function ScrambleOnH1() {
  const text = useScramble({ text: "Decode This Title" })
  return <h1 className="text-4xl font-bold font-mono">{text}</h1>
}

function ScrambleOnH3() {
  const text = useScramble({ text: "Hacker Style", duration: 1.2 })
  return <h3 className="text-2xl font-semibold font-mono">{text}</h3>
}

function ScrambleOnParagraph() {
  const text = useScramble({ text: "This paragraph decodes character by character", delay: 0.5 })
  return <p className="text-lg font-mono">{text}</p>
}

function ScrambleOnCode() {
  const text = useScramble({ text: "const decoded = true;" })
  return (
    <code className="block p-4 bg-neutral-900 text-green-400 rounded font-mono">
      {text}
    </code>
  )
}

// ============================================
// WORD CAROUSEL EXAMPLES - Same hook, different elements
// ============================================

function CarouselOnH1() {
  const { currentWord, key } = useWordCarousel({
    words: ["Amazing", "Powerful", "Flexible"],
    interval: 2,
  })

  return (
    <h1 className="text-4xl font-bold">
      Build{" "}
      <AnimatePresence mode="wait">
        <motion.span
          key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="inline-block text-blue-600"
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>{" "}
      Apps
    </h1>
  )
}

function CarouselOnSpan() {
  const { currentWord, key } = useWordCarousel({
    words: ["Fast", "Modern", "Beautiful"],
  })

  return (
    <div className="text-2xl">
      Status:{" "}
      <AnimatePresence mode="wait">
        <motion.span
          key={key}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="inline-block font-bold text-purple-600"
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

function CarouselInSentence() {
  const { currentWord, key } = useWordCarousel({
    words: ["React", "Next.js", "TypeScript", "Tailwind"],
    interval: 1.5,
  })

  return (
    <p className="text-lg">
      I love coding with{" "}
      <AnimatePresence mode="wait">
        <motion.span
          key={key}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="inline-block font-semibold text-green-600"
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
      !
    </p>
  )
}
