import * as React from "react"

export interface UseWordCarouselOptions {
  /**
   * Array of words to cycle through
   */
  words: string[]
  /**
   * Duration each word is displayed in seconds
   * @default 2
   */
  interval?: number
}

/**
 * Component-agnostic word carousel hook
 * Returns the current word and animation state
 * 
 * @example
 * ```tsx
 * const { currentWord, key } = useWordCarousel({ 
 *   words: ["Fast", "Modern", "Beautiful"] 
 * })
 * <AnimatePresence mode="wait">
 *   <motion.span key={key}>{currentWord}</motion.span>
 * </AnimatePresence>
 * ```
 */
export function useWordCarousel(options: UseWordCarouselOptions) {
  const { words, interval = 2 } = options
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, interval * 1000)

    return () => clearInterval(timer)
  }, [words.length, interval])

  return {
    currentWord: words[currentIndex],
    currentIndex,
    key: currentIndex, // For AnimatePresence
  }
}
