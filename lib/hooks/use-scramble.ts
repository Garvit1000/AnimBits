import * as React from "react"

export interface UseScrambleOptions {
  /**
   * The target text to decode to
   */
  text?: string
  /**
   * Animation duration in seconds
   * @default 0.8
   */
  duration?: number
  /**
   * Delay before animation starts in seconds
   * @default 0
   */
  delay?: number
  /**
   * Characters to use for scrambling
   * @default "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
   */
  scrambleChars?: string
}

/**
 * Component-agnostic scramble/decode text animation hook
 * Returns the animated text value to display
 * 
 * @example
 * ```tsx
 * const displayText = useScramble({ text: "Hello World" })
 * <div>{displayText}</div>
 * ```
 * 
 * @example
 * ```tsx
 * const displayText = useScramble({ 
 *   text: "Decode Me",
 *   duration: 1.5,
 *   delay: 0.5
 * })
 * <h1 className="font-mono">{displayText}</h1>
 * ```
 */
export function useScramble(options: UseScrambleOptions): string {
  const {
    text = "",
    duration = 0.8,
    delay = 0,
    scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()",
  } = options

  const [displayText, setDisplayText] = React.useState(text)

  React.useEffect(() => {
    const iterations = Math.floor(duration * 60) // 60fps
    let currentIteration = 0

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIteration >= iterations) {
          setDisplayText(text)
          clearInterval(interval)
          return
        }

        const progress = currentIteration / iterations
        const newText = text
          .split("")
          .map((char, index) => {
            if (char === " ") return " "
            if (index / text.length < progress) {
              return char
            }
            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
          })
          .join("")

        setDisplayText(newText)
        currentIteration++
      }, (duration * 1000) / iterations)

      return () => clearInterval(interval)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [text, duration, delay, scrambleChars])

  return displayText
}
