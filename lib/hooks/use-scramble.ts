import * as React from "react";

export interface UseScrambleOptions {
  text?: string;
  duration?: number;
  delay?: number;
  scrambleChars?: string;
}

export function useScramble(options: UseScrambleOptions): string {
  const {
    text = "",
    duration = 0.8,
    delay = 0,
    scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()",
  } = options;

  const [displayText, setDisplayText] = React.useState(text);

  React.useEffect(() => {
    const iterations = Math.floor(duration * 60); // 60fps
    let currentIteration = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(
        () => {
          if (currentIteration >= iterations) {
            setDisplayText(text);
            clearInterval(interval);
            return;
          }

          const progress = currentIteration / iterations;
          const newText = text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index / text.length < progress) {
                return char;
              }
              return scrambleChars[
                Math.floor(Math.random() * scrambleChars.length)
              ];
            })
            .join("");

          setDisplayText(newText);
          currentIteration++;
        },
        (duration * 1000) / iterations,
      );

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [text, duration, delay, scrambleChars]);

  return displayText;
}
