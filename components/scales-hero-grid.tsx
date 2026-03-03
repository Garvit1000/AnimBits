import { Scales } from "@/components/ui/scales";
import * as motion from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";

function ScalesCard({ image, alt }: { image: string, alt: string }) {
    return (
        <div className="relative flex w-full items-center justify-center overflow-visible">
            {/* Same Size: h-40 w-36 or so. Wait, the original was h-80 w-72. 
          If we put 4 of those in a 2x2 grid, it requires 2 * w-72 (2 * 288px) = 576px. 
          Inside the hero container, placing them side-by-side works if we scale down the grid container or use original sizing.
          Let's use a slightly smaller dimension relative to the original to fit mobile too, 
          but identical mask structures.
      */}
            <div className="relative h-[200px] w-[180px] sm:h-[240px] sm:w-[200px] rounded-lg bg-gray-100 dark:bg-neutral-800/50">
                <div className="absolute -inset-y-[30%] -left-8 h-[160%] w-6 mask-t-from-90% mask-b-from-90%">
                    <Scales size={6} className="rounded-lg" />
                </div>
                <div className="absolute -inset-y-[30%] -right-8 h-[160%] w-6 mask-t-from-90% mask-b-from-90%">
                    <Scales size={6} className="rounded-lg" />
                </div>
                <div className="absolute -inset-x-[30%] -top-8 h-6 w-[160%] mask-r-from-90% mask-l-from-90%">
                    <Scales size={6} className="rounded-lg" />
                </div>
                <div className="absolute -inset-x-[30%] -bottom-8 h-6 w-[160%] mask-r-from-90% mask-l-from-90%">
                    <Scales size={6} className="rounded-lg" />
                </div>
                <div className="relative z-10 h-full w-full overflow-hidden rounded-none bg-white shadow-sm ring-1 shadow-black/10 ring-black/5 dark:bg-neutral-800">
                    <Image
                        src={image}
                        alt={alt}
                        fill
                        className="object-cover transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-4 transition-opacity duration-300 hover:bg-black/20">
                        <span className="text-white font-semibold text-lg drop-shadow-md">
                            {alt}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ScalesHeroGrid() {
    const cards = [
        { label: "Components", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop", href: "/docs/animations/buttons/lift" }, // code screen
        { label: "Animations", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop", href: "/docs/animations/cards/hover-lift" }, // motion blur / neon abstract
        { label: "Hooks", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop", href: "docs/hooks/hover-lift" }, // code on macbook
        { label: "Transitions", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", href: "/docs/transitions/theme-toggle-slide-left" }, // laptop with VSCode
    ];

    return (
        <div className="relative mx-auto flex w-full items-center justify-center py-10 md:py-20">
            <div className="grid grid-cols-2 gap-x-12 gap-y-16 sm:gap-x-16 sm:gap-y-20 w-full place-items-center">
                {cards.map((card, i) => (
                    <motion.div
                        key={card.label}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + i * 0.1, type: "spring", stiffness: 100 }}
                        className="w-full flex justify-center"
                    >
                        <Link href={card.href} className="w-full relative group">
                            <ScalesCard image={card.image} alt={card.label} />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
