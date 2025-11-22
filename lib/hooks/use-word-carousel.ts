import * as React from "react";

export interface UseWordCarouselOptions {
  words: string[];
  interval?: number;
}

export function useWordCarousel(options: UseWordCarouselOptions) {
  const { words, interval = 2 } = options;
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval * 1000);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return {
    currentWord: words[currentIndex],
    currentIndex,
    key: currentIndex, // For AnimatePresence
  };
}
