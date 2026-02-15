"use client";

import { Carousel, Card } from "@/registry/new-york/animations/specials/linear-carousel";

const testimonials = [
    {
        src: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2787&auto=format&fit=crop",
        title: "Incredible Experience",
        category: "Testimonial",
        content: <p className="text-neutral-500">&quot;This product completely changed how we work. The efficiency gains are unmatched.&quot;</p>
    },
    {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        title: "Highly Recommend",
        category: "Testimonial",
        content: <p className="text-neutral-500">&quot;The support team is amazing and the features are top-notch.&quot;</p>
    },
    {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2787&auto=format&fit=crop",
        title: "A Game Changer",
        category: "Testimonial",
        content: <p className="text-neutral-500">&quot;I can&apos;t imagine going back to our old workflow. This is simply the best.&quot;</p>
    },
    {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop",
        title: "Team Collaboration",
        category: "Testimonial",
        content: <p className="text-neutral-500">&quot;Our team collaboration has improved significantly since we started using this tool.&quot;</p>
    }
];

export default function LinearCarouselText() {
    const cards = testimonials.map((card, index) => (
        <Card key={card.title} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-10 relative">
            <Carousel items={cards} />
        </div>
    );
}
