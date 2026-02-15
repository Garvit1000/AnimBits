"use client";

import React, {
    useEffect,
    useRef,
    useState,
    createContext,
    useContext,
} from "react";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import type { ImgHTMLAttributes } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
    items: React.JSX.Element[];
    initialScroll?: number;
}

type Card = {
    src: string;
    title: string;
    category?: string;
    content: React.ReactNode;
};

export const CarouselContext = createContext<{
    onCardClose: (index: number) => void;
    currentIndex: number;
}>({
    onCardClose: () => { },
    currentIndex: 0,
});

export const Carousel = ({
    items,
    initialScroll = 0,
    autoplay = false,
    autoplaySpeed = 0.5,
}: CarouselProps & { autoplay?: boolean; autoplaySpeed?: number }) => {
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const animationRef = useRef<number>(null);
    // Duplicate items to create infinite effect
    const loopedItems = [
        ...items,
        ...items.map((item) => React.cloneElement(item, { key: item.key + "-duplicate", index: items.indexOf(item) + items.length }))
    ];

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    // Auto-scroll logic
    useEffect(() => {
        if (!autoplay || isHovered) {
            if (animationRef.current) cancelAnimationFrame(animationRef.current!);
            return;
        }

        const scroll = () => {
            if (carouselRef.current) {
                // Scroll by speed
                carouselRef.current.scrollLeft += autoplaySpeed;

                const scrollWidth = carouselRef.current.scrollWidth;

                if (carouselRef.current.scrollLeft >= scrollWidth / 2) {
                    carouselRef.current.scrollLeft = 0;
                }

                checkScrollability();
                animationRef.current = requestAnimationFrame(scroll);
            }
        };

        animationRef.current = requestAnimationFrame(scroll);

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [autoplay, autoplaySpeed, isHovered]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            const container = carouselRef.current;
            container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
        }
    };

    const handleCardClose = (index: number) => {
        if (carouselRef.current) {
            const cardWidth = isMobile() ? 230 : 320; // (md:w-80)
            const gap = isMobile() ? 4 : 8;
            const scrollPosition = (cardWidth + gap) * (index + 1);
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
            setCurrentIndex(index);
        }
    };

    const isMobile = () => {
        return window && window.innerWidth < 768;
    };

    // Drag to scroll logic
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftState, setScrollLeftState] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
        setScrollLeftState(carouselRef.current?.scrollLeft || 0);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2; // Scroll-fast
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = scrollLeftState - walk;
        }
    };


    return (
        <CarouselContext.Provider
            value={{ onCardClose: handleCardClose, currentIndex }}
        >
            <div
                className="relative w-full mx-auto px-4 md:px-8"
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
            >
                <div
                    className={cn(
                        "flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20 cursor-grab active:cursor-grabbing",
                        isDragging && "cursor-grabbing scroll-auto"
                    )}
                    ref={carouselRef}
                    onScroll={checkScrollability}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    <div
                        className={cn(
                            "absolute right-0 z-1000 h-auto w-[5%] overflow-hidden bg-gradient-to-l from-white dark:from-background to-transparent pointer-events-none"
                        )}
                    ></div>

                    <div
                        className={cn("flex flex-row justify-start gap-4")}
                    >
                        {loopedItems.map((item, index) => (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2 * (index % items.length), // Stagger only relevant to original set length ideally
                                    ease: "easeOut",
                                }}
                                key={"card" + index}
                                className="rounded-3xl"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center gap-3 mt-4">
                    <button
                        className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border hover:bg-muted disabled:opacity-50 transition-colors"
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <ChevronLeft className="h-6 w-6 text-muted-foreground" />
                    </button>
                    <button
                        className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border hover:bg-muted disabled:opacity-50 transition-colors"
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <ChevronRight className="h-6 w-6 text-muted-foreground" />
                    </button>
                </div>
            </div>
        </CarouselContext.Provider>
    );
};

export const Card = ({
    card,
    index,
    layout = false,
}: {
    card: Card;
    index: number;
    layout?: boolean;
}) => {
    return (
        <motion.button
            layoutId={layout ? `card-${card.title}-${index}` : undefined}
            className="relative z-10 flex h-60 w-56 flex-col items-start justify-end overflow-hidden rounded-3xl bg-gray-100 md:h-96 md:w-80 dark:bg-neutral-900"
        >
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative z-40 p-8 w-full">
                {card.category && (
                    <motion.p
                        layoutId={layout ? `category-${card.category}-${index}` : undefined}
                        className="text-left font-mono text-sm font-medium text-white md:text-base"
                    >
                        {card.category}
                    </motion.p>
                )}
                <motion.p
                    layoutId={layout ? `title-${card.title}-${index}` : undefined}
                    className="mt-2 max-w-xs text-left font-mono text-xl font-semibold [text-wrap:balance] text-white md:text-3xl"
                >
                    {card.title}
                </motion.p>
            </div>
            <img
                src={card.src}
                alt={card.title}
                className="absolute inset-0 z-10 w-full h-full object-cover grayscale"
            />
        </motion.button>
    );
};

export const BlurImage = ({
    height,
    width,
    src,
    className,
    alt,
    ...rest
}: ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string }) => {
    const [isLoading, setLoading] = useState(true);
    return (
        <img
            className={cn(
                "h-full w-full transition duration-300",
                isLoading ? "blur-sm" : "blur-0",
                className
            )}
            onLoad={() => setLoading(false)}
            src={src as string}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            alt={alt ? alt : "Background of a beautiful view"}
            {...rest}
        />
    );
};
