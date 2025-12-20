import { ComponentType } from "react";

// Import ALL components from registry

// Loaders
import { LoaderLiquidProgress } from "@/registry/new-york/animations/loaders/liquid-progress";
import { LoaderBars } from "@/registry/new-york/animations/loaders/bars";
import { LoaderDots } from "@/registry/new-york/animations/loaders/dots";
import { LoaderGooeyBlobs } from "@/registry/new-york/animations/loaders/gooey-blobs";
import { LoaderMorphing } from "@/registry/new-york/animations/loaders/morphing";
import { LoaderOrbit } from "@/registry/new-york/animations/loaders/orbit";
import { LoaderPulse } from "@/registry/new-york/animations/loaders/pulse";
import { LoaderSkeleton } from "@/registry/new-york/animations/loaders/skeleton";
import { LoaderSpinner } from "@/registry/new-york/animations/loaders/spinner";

// Text
import { TextBlurIn } from "@/registry/new-york/animations/text/blur-in";
import { TextTypewriter } from "@/registry/new-york/animations/text/typewriter";
import { TextFadeIn } from "@/registry/new-york/animations/text/fade-in";
import { TextGradient } from "@/registry/new-york/animations/text/gradient";
import { TextScramble } from "@/registry/new-york/animations/text/scramble";
import { TextShimmer } from "@/registry/new-york/animations/text/shimmer";
import { DiaText } from "@/registry/new-york/animations/text/dia-text";
import { TextSlideUp } from "@/registry/new-york/animations/text/slide-up";
import { TextSplitReveal } from "@/registry/new-york/animations/text/split-reveal";
import { SvgTextDraw } from "@/registry/new-york/animations/text/svg-text-draw";
import { TextHighlight } from "@/registry/new-york/animations/text/text-highlight";
import { TextWordCarousel } from "@/registry/new-york/animations/text/word-carousel";

// Transitions
import { ZoomHollowText } from "@/registry/new-york/animations/transitions/zoom-hollow";

// Cards
import { SpotlightCard } from "@/registry/new-york/animations/specials/spotlight-card";
import { CardTilt } from "@/registry/new-york/animations/cards/tilt";
import { CardBackgroundZoom } from "@/registry/new-york/animations/cards/background-zoom";
import { CardFadeIn } from "@/registry/new-york/animations/cards/fade-in";
import { CardFlip } from "@/registry/new-york/animations/cards/flip";
import { CardGrayscale } from "@/registry/new-york/animations/cards/grayscale";
import { CardHoverGlow } from "@/registry/new-york/animations/cards/hover-glow";
import { CardHoverLift } from "@/registry/new-york/animations/cards/hover-lift";
import { CardParallaxTilt } from "@/registry/new-york/animations/cards/parallax-tilt";
import { CardScaleIn } from "@/registry/new-york/animations/cards/scale-in";
import { CardSlideIn } from "@/registry/new-york/animations/cards/slide-in";

// Icons
import { BounceContinuous } from "@/registry/new-york/animations/icons/bounce-continuous";
import { BounceIcon } from "@/registry/new-york/animations/icons/bounce";
import { FadeInIcon } from "@/registry/new-york/animations/icons/fade-in";
import { HeartbeatIcon } from "@/registry/new-york/animations/icons/heartbeat";
import { MorphIcon } from "@/registry/new-york/animations/icons/morph";
import { PopIcon } from "@/registry/new-york/animations/icons/pop";
import { PulseIcon } from "@/registry/new-york/animations/icons/pulse";
import { RotateIcon } from "@/registry/new-york/animations/icons/rotate";
import { ScaleInIcon } from "@/registry/new-york/animations/icons/scale-in";
import { ShakeIcon } from "@/registry/new-york/animations/icons/shake";
import { SpinIcon } from "@/registry/new-york/animations/icons/spin";
import { StrokeDrawIcon } from "@/registry/new-york/animations/icons/stroke-draw";
import { WiggleIcon } from "@/registry/new-york/animations/icons/wiggle";

// Buttons
import { BorderGradientButton } from "@/registry/new-york/animations/buttons/border-gradient";
import { PressButton } from "@/registry/new-york/animations/buttons/press";
import { GlowButton } from "@/registry/new-york/animations/buttons/glow";
import { ShineButton } from "@/registry/new-york/animations/buttons/shine";
import { SlideInButton } from "@/registry/new-york/animations/buttons/slide-in";
import { RippleButton } from "@/registry/new-york/animations/buttons/ripple";
import { MagneticButton } from "@/registry/new-york/animations/buttons/magnetic";
import { LiftButton } from "@/registry/new-york/animations/buttons/lift";
import { FadeInButton } from "@/registry/new-york/animations/buttons/fade-in";

// Lists
import { SlideInList } from "@/registry/new-york/animations/lists/slide-in";
import { StaggerFadeList } from "@/registry/new-york/animations/lists/stagger-fade";

// Specials
import { BorderBeam } from "@/registry/new-york/animations/specials/border-beam";
import { MagneticDrawer } from "@/registry/new-york/animations/specials/magnetic-drawer";
import { AnimatedToast } from "@/registry/new-york/animations/specials/animated-toast";
import { SwipeableStack } from "@/registry/new-york/animations/specials/swipeable-stack";
import { ImageText } from "@/registry/new-york/animations/specials/image-text";
import { ReactionDock } from "@/registry/new-york/animations/specials/reaction-dock";
import { ReactionButton } from "@/registry/new-york/animations/specials/reaction-button";


export type ComponentCategory = "Card" | "Text" | "Loader" | "Button" | "Icon" | "List" | "Special";

export interface PlaygroundComponent {
    name: string;
    component: ComponentType<any>;
    defaultProps: Record<string, any>;
    description: string;
}

export const REGISTRY_MAP: Record<ComponentCategory, Record<string, PlaygroundComponent>> = {
    Card: {
        "spotlight-card": {
            name: "Spotlight Card",
            component: SpotlightCard,
            defaultProps: {
                className: "w-[400px] h-[300px] bg-background border flex items-center justify-center p-6",
                spotlightColor: "rgba(0, 229, 255, 0.2)",
            },
            description: "Card with dynamic spotlight effect",
        },
        "tilt-card": {
            name: "Tilt Card",
            component: CardTilt,
            defaultProps: {
                className: "w-[400px] h-[300px] bg-background border flex items-center justify-center p-6",
            },
            description: "3D tilt effect on hover",
        },
        "background-zoom": {
            name: "Background Zoom",
            component: CardBackgroundZoom,
            defaultProps: {
                className: "w-[400px] h-[300px]",
                children: <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809)" }} />
            },
            description: "Zoom background on hover",
        },
        "fade-in-card": {
            name: "Fade In Card",
            component: CardFadeIn,
            defaultProps: {
                className: "w-[400px] h-[300px] bg-background border flex items-center justify-center p-6",
            },
            description: "Smooth fade in entrance",
        },
        "flip-card": {
            name: "Flip Card",
            component: CardFlip,
            defaultProps: {
                className: "w-[400px] h-[300px] bg-background border flex items-center justify-center p-6",
                children: <div>Hover to Flip</div>
            },
            description: "Flip to reveal back",
        },
        "grayscale-card": {
            name: "Grayscale Card",
            component: CardGrayscale,
            defaultProps: {
                className: "w-[400px] h-[300px]",
                children: <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809)" }} />
            },
            description: "Color on hover",
        },
        "hover-glow": {
            name: "Hover Glow",
            component: CardHoverGlow,
            defaultProps: {
                className: "w-[400px] h-[300px] bg-background border flex items-center justify-center p-6",
            },
            description: "Glow effect on hover",
        },
        "hover-lift": {
            name: "Hover Lift",
            component: CardHoverLift,
            defaultProps: {
                className: "w-[400px] h-[300px] bg-background border flex items-center justify-center p-6",
            },
            description: "Lift up on hover",
        },
        "parallax-tilt": {
            name: "Parallax Tilt",
            component: CardParallaxTilt,
            defaultProps: {
                className: "w-[400px] h-[300px] bg-background border flex items-center justify-center p-6",
            },
            description: "Parallax tilt effect",
        },
        "scale-in": {
            name: "Scale In",
            component: CardScaleIn,
            defaultProps: {
                className: "w-[400px] h-[300px] bg-background border flex items-center justify-center p-6",
            },
            description: "Scale in entrance",
        },
        "slide-in-card": {
            name: "Slide In Card",
            component: CardSlideIn,
            defaultProps: {
                className: "w-[400px] h-[300px] bg-background border flex items-center justify-center p-6",
            },
            description: "Slide in from side",
        },
        "border-beam": {
            name: "Border Beam",
            component: ({ children, ...props }: any) => (
                <div className="relative w-[400px] h-[300px] bg-background border rounded-xl flex items-center justify-center overflow-hidden p-6">
                    {children}
                    <BorderBeam {...props} />
                </div>
            ),
            defaultProps: {
                size: 250,
                duration: 12,
                delay: 9,
            },
            description: "Animated gradient beam",
        },
        "gradient-border": {
            name: "Gradient Border",
            component: BorderGradientButton,
            defaultProps: { children: <div className="p-10">Content</div> },
            description: "Gradient border animation",
        }
    },
    Text: {
        "blur-in": {
            name: "Blur In",
            component: TextBlurIn,
            defaultProps: { children: "Animation Magic", className: "text-4xl font-bold" },
            description: "Blur reveal effect",
        },
        "typewriter": {
            name: "Typewriter",
            component: TextTypewriter,
            defaultProps: { children: "Typing Content...", speed: 30, className: "text-4xl font-bold" },
            description: "Typewriter effect",
        },
        "fade-in": {
            name: "Fade In",
            component: TextFadeIn,
            defaultProps: { children: "Fading In", className: "text-4xl font-bold" },
            description: "Smooth fade in",
        },
        "gradient": {
            name: "Gradient",
            component: TextGradient,
            defaultProps: { children: "Gradient Flow", className: "text-5xl font-bold" },
            description: "Animated gradient text",
        },
        "scramble": {
            name: "Scramble",
            component: TextScramble,
            defaultProps: { children: "Decrypting...", className: "text-4xl font-bold" },
            description: "Scramble reveal effect",
        },
        "shimmer": {
            name: "Shimmer",
            component: TextShimmer,
            defaultProps: { children: "Shimmering Light", className: "text-4xl font-bold" },
            description: "Passing shimmer effect",
        },
        "dia": {
            name: "Diagonal Reveal",
            component: DiaText,
            defaultProps: { words: ["Diagonal", "Reveal", "Effect"], className: "text-4xl font-bold" },
            description: "Diagonal wipe reveal",
        },
        "slide-up": {
            name: "Slide Up",
            component: TextSlideUp,
            defaultProps: { children: "Rising Text", className: "text-4xl font-bold" },
            description: "Smooth slide up entrance",
        },
        "split-reveal": {
            name: "Split Reveal",
            component: TextSplitReveal,
            defaultProps: { children: "Split Reveal", className: "text-4xl font-bold" },
            description: "Text splits and reveals",
        },
        "svg-draw": {
            name: "SVG Draw",
            component: SvgTextDraw,
            defaultProps: { children: "Drawing...", className: "text-4xl font-bold" },
            description: "Text drawn as SVG path",
        },
        "highlight": {
            name: "Highlight",
            component: TextHighlight,
            defaultProps: { children: "Highlighted", className: "text-4xl font-bold" },
            description: "Text highlight animation",
        },
        "word-carousel": {
            name: "Word Carousel",
            component: TextWordCarousel,
            defaultProps: { words: ["Design", "Code", "Build"], className: "text-4xl font-bold" },
            description: "Rotating words",
        }
    },
    Loader: {
        "liquid-progress": {
            name: "Liquid Progress",
            component: LoaderLiquidProgress,
            defaultProps: { progress: 60, height: 12 },
            description: "Liquid progress bar",
        },
        "bars": {
            name: "Bars",
            component: LoaderBars,
            defaultProps: {},
            description: "Animated bars loader",
        },
        "dots": {
            name: "Dots",
            component: LoaderDots,
            defaultProps: {},
            description: "Bouncing dots loader",
        },
        "gooey-blobs": {
            name: "Gooey Blobs",
            component: LoaderGooeyBlobs,
            defaultProps: {},
            description: "Morphing gooey blobs",
        },
        "morphing": {
            name: "Morphing",
            component: LoaderMorphing,
            defaultProps: {},
            description: "Shape morphing loader",
        },
        "orbit": {
            name: "Orbit",
            component: LoaderOrbit,
            defaultProps: {},
            description: "Orbiting circles loader",
        },
        "pulse": {
            name: "Pulse",
            component: LoaderPulse,
            defaultProps: {},
            description: "Pulsing circle loader",
        },
        "skeleton": {
            name: "Skeleton",
            component: LoaderSkeleton,
            defaultProps: {},
            description: "Skeleton loading state",
        },
        "spinner": {
            name: "Spinner",
            component: LoaderSpinner,
            defaultProps: {},
            description: "Classic spinner loader",
        }
    },
    Button: {
        "shine": {
            name: "Shine",
            component: ShineButton,
            defaultProps: { children: "Hover Me", className: "bg-primary text-primary-foreground px-6 py-2 rounded-md" },
            description: "Shine effect on hover",
        },
        "glow": {
            name: "Glow",
            component: GlowButton,
            defaultProps: { children: "Glow Button", className: "bg-primary text-primary-foreground px-6 py-2 rounded-md" },
            description: "Glow effect on hover",
        },
        "press": {
            name: "Press",
            component: PressButton,
            defaultProps: { children: "Click Me", className: "bg-primary text-primary-foreground px-6 py-2 rounded-md" },
            description: "Scale down on press",
        },
        "reaction": {
            name: "Reaction",
            component: ReactionButton,
            defaultProps: { Icon: ({ className }: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg> },
            description: "Like button with reactions"
        },
        "slide-in": {
            name: "Slide In",
            component: SlideInButton,
            defaultProps: { children: "Slide In", className: "bg-primary text-primary-foreground px-6 py-2 rounded-md" },
            description: "Slide in effect",
        },
        "ripple": {
            name: "Ripple",
            component: RippleButton,
            defaultProps: { children: "Ripple Effect", className: "bg-primary text-primary-foreground px-6 py-2 rounded-md" },
            description: "Material ripple effect",
        },
        "magnetic": {
            name: "Magnetic",
            component: MagneticButton,
            defaultProps: { children: "Magnetic", className: "bg-primary text-primary-foreground px-6 py-2 rounded-md" },
            description: "Follows cursor",
        },
        "lift": {
            name: "Lift",
            component: LiftButton,
            defaultProps: { children: "Lift Mode", className: "bg-primary text-primary-foreground px-6 py-2 rounded-md" },
            description: "Lifts on hover",
        },
        "fade-in": {
            name: "Fade In",
            component: FadeInButton,
            defaultProps: { children: "Fade In", className: "bg-primary text-primary-foreground px-6 py-2 rounded-md" },
            description: "Fade in entrance",
        }
    },
    Icon: {
        "bounce-continuous": {
            name: "Bounce Continuous",
            component: BounceContinuous,
            defaultProps: {
                className: "w-12 h-12",
                children: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
            },
            description: "Continuous bouncing",
        },
        "bounce": {
            name: "Bounce",
            component: BounceIcon,
            defaultProps: {
                className: "w-12 h-12",
                children: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /></svg>
            },
            description: "Bounce on trigger",
        },
        "fade-in": {
            name: "Fade In",
            component: FadeInIcon,
            defaultProps: {
                className: "w-12 h-12",
                children: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            },
            description: "Fade in entrance",
        },
        "heartbeat": {
            name: "Heartbeat",
            component: HeartbeatIcon,
            defaultProps: {
                className: "w-12 h-12",
                children: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
            },
            description: "Heartbeat pulse",
        },
        "morph": {
            name: "Morph",
            component: MorphIcon,
            defaultProps: {
                className: "w-12 h-12",
                children: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
            },
            description: "Shape morphing",
        },
        "pop": {
            name: "Pop",
            component: PopIcon,
            defaultProps: {
                className: "w-12 h-12",
                children: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20" /></svg>
            },
            description: "Pop scale effect",
        },
        "pulse": {
            name: "Pulse",
            component: PulseIcon,
            defaultProps: {
                className: "w-12 h-12",
                children: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /></svg>
            },
            description: "Pulsing effect",
        },
        "rotate": {
            name: "Rotate",
            component: RotateIcon,
            defaultProps: {
                className: "w-12 h-12",
                children: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" /></svg>
            },
            description: "Rotation animation",
        },
        "scale-in": {
            name: "Scale In",
            component: ScaleInIcon,
            defaultProps: {
                className: "w-12 h-12",
                children: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /></svg>
            },
            description: "Scale in entrance",
        },
        "shake": {
            name: "Shake",
            component: ShakeIcon,
            defaultProps: {
                className: "w-12 h-12",
                children: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31M14 9.3V1.99M18 14.7V7.39M22 17.7v-7.3M2 17.7v-7.3M6 20.7V13.4" /></svg>
            },
            description: "Shake animation",
        },
        "spin": {
            name: "Spin",
            component: SpinIcon,
            defaultProps: {
                className: "w-12 h-12",
                children: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
            },
            description: "Spinning animation",
        },
        "stroke-draw": {
            name: "Stroke Draw",
            component: StrokeDrawIcon,
            defaultProps: {
                className: "w-12 h-12",
                children: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 2 4 4-4 4M10 18l-4-4 4-4M14.5 4.5l-9 15" /></svg>
            },
            description: "SVG stroke drawing",
        },
        "wiggle": {
            name: "Wiggle",
            component: WiggleIcon,
            defaultProps: {
                className: "w-12 h-12",
                children: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
            },
            description: "Wiggle animation",
        }
    },
    List: {
        "slide-in": {
            name: "Slide In",
            component: SlideInList,
            defaultProps: {
                items: ["Item 1", "Item 2", "Item 3"],
                className: "space-y-2"
            },
            description: "List items slide in",
        },
        "stagger-fade": {
            name: "Stagger Fade",
            component: StaggerFadeList,
            defaultProps: {
                items: ["Item 1", "Item 2", "Item 3"],
                className: "space-y-2"
            },
            description: "Staggered fade in",
        }
    },
    Special: {
        "magnetic-drawer": {
            name: "Magnetic Drawer",
            component: MagneticDrawer,
            defaultProps: {
                open: true,
                onOpenChange: () => { },
                children: <div className="h-[200px] p-4 flex items-center justify-center">Drawer Content</div>
            },
            description: "Mobile-style drawer",
        },
        "animated-toast": {
            name: "Animated Toast",
            component: AnimatedToast,
            defaultProps: {
                open: true,
                setOpen: () => { },
                children: "Toast Notification"
            },
            description: "Dynamic toast notifications",
        },
        "swipeable-stack": {
            name: "Swipeable Stack",
            component: SwipeableStack,
            defaultProps: {
                cards: [
                    { id: 1, content: "Card 1" },
                    { id: 2, content: "Card 2" },
                    { id: 3, content: "Card 3" }
                ],
                className: "w-[350px] h-[450px]"
            },
            description: "Tinder-like card stack",
        },
        "image-text": {
            name: "Image Text",
            component: ImageText,
            defaultProps: {
                text: "VISUALS",
                imageUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
                className: "text-6xl font-bold"
            },
            description: "Text masked with image",
        },
        "reaction-dock": {
            name: "Reaction Dock",
            component: ReactionDock,
            defaultProps: {
                items: [
                    { icon: "👍", label: "Like" },
                    { icon: "❤️", label: "Love" },
                    { icon: "😂", label: "Laugh" },
                    { icon: "😮", label: "Wow" },
                    { icon: "😢", label: "Sad" }
                ]
            },
            description: "Mac-style dock",
        }
    },
    Transition: {
        "zoom-hollow": {
            name: "Zoom Hollow",
            component: ZoomHollowText,
            defaultProps: { words: ["Design", "Create", "Innovate", "Build"], className: "text-6xl font-black" },
            description: "Zoom with hollow text",
        }
    }
};
