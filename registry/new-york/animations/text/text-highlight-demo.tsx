"use client";

import { TextHighlight } from "./text-highlight";

export default function TextHighlightDemo() {
    return (
        <div className="flex flex-col items-center justify-center gap-8 p-8 text-center">
            <h2 className="text-3xl font-bold md:text-4xl max-w-2xl leading-relaxed">
                Make your text <br />
                <TextHighlight className="mx-2" delay={0} color="#fbbf24">
                    stand out
                </TextHighlight>
                with a <br />
                <TextHighlight color="#2dd4bf" delay={0.3} duration={0.8}>
                    smooth marker
                </TextHighlight>
                effect.
            </h2>

            <p className="text-muted-foreground text-lg max-w-lg mt-4">
                It works perfectly for <TextHighlight color="#60a5fa" delay={0.6}>highlighting keywords</TextHighlight> in your paragraphs too.
            </p>
        </div>
    );
}
