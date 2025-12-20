import { ZoomHollowText } from "@/registry/new-york/animations/transitions/zoom-hollow";

export default function ZoomHollowTextDemo() {
    return (
        <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
            <ZoomHollowText
                words={["Design", "Create", "Innovate", "Build"]}
                className="text-7xl font-black"
                duration={0.8}
                interval={2500}
                strokeWidth={3}
            />
        </div>
    );
}
