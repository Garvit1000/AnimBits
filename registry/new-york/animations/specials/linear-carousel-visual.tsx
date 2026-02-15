"use client";

import { Carousel, Card } from "@/registry/new-york/animations/specials/linear-carousel";

const images = [
    {
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3000&auto=format&fit=crop",
        title: "Mountain Views",
        category: "Nature",
        content: <p className="text-neutral-500">Breathtaking mountain landscapes from around the world.</p>
    },
    {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=3000&auto=format&fit=crop",
        title: "Ocean Blue",
        category: "Nature",
        content: <p className="text-neutral-500">Calm and serene ocean views.</p>
    },
    {
        src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=3000&auto=format&fit=crop",
        title: "Forest Pathways",
        category: "Nature",
        content: <p className="text-neutral-500">Mysterious paths through dense forests.</p>
    },
    {
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=3506&auto=format&fit=crop",
        title: "Solitude",
        category: "Nature",
        content: <p className="text-neutral-500">Finding peace in the vastness of nature.</p>
    }
];

export default function LinearCarouselVisual() {
    const cards = images.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-10 relative">
            <Carousel items={cards} />
        </div>
    );
}
