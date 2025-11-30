import { BorderBeam } from "./border-beam";
import { User, ArrowRight, Search } from "lucide-react";

export default function BorderBeamDemo() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl p-4">
            {/* Example 1: Standard Card (Rounded) */}
            <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-xl border bg-background md:shadow-xl">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                    Card
                </span>
                <BorderBeam size={250} duration={12} radius={12} />
            </div>

            {/* Example 2: Square Card (No Radius) */}
            <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden border bg-background md:shadow-xl">
                <span className="pointer-events-none text-xl font-semibold text-foreground">
                    Square
                </span>
                <BorderBeam size={250} duration={12} radius={0} />
            </div>

            {/* Example 3: Circle (Avatar) */}
            <div className="flex items-center justify-center">
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border bg-background shadow-sm">
                    <User className="h-12 w-12 text-neutral-500" />
                    <BorderBeam size={100} duration={10} delay={0} radius={9999} borderWidth={2} />
                </div>
            </div>

            {/* Example 4: Input Field */}
            <div className="flex items-center justify-center w-full">
                <div className="relative w-full max-w-xs rounded-md border bg-background">
                    <div className="flex items-center px-3 py-2">
                        <Search className="mr-2 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                        />
                    </div>
                    <BorderBeam size={80} duration={6} delay={2} radius={6} borderWidth={1.5} />
                </div>
            </div>

            {/* Example 5: Rounded Button */}
            <div className="flex items-center justify-center">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Click Me
                        <ArrowRight className="ml-2 h-4 w-4" />
                        <BorderBeam size={40} duration={4} delay={0} radius={9999} borderWidth={2} />
                    </span>
                </button>
            </div>

            {/* Example 6: Asymmetric Radius */}
            <div className="flex items-center justify-center">
                <div className="relative flex h-[150px] w-full flex-col items-center justify-center overflow-hidden rounded-tl-3xl rounded-br-3xl border bg-background md:shadow-xl">
                    <span className="text-lg font-medium">Asymmetric</span>
                    {/* Note: BorderBeam currently supports uniform radius. For asymmetric, it will trace a uniform path. 
                        This demonstrates the limitation/behavior on asymmetric shapes if not perfectly matched. 
                        We use a best-fit radius here. */}
                    <BorderBeam size={150} duration={10} delay={5} radius={24} />
                </div>
            </div>

        </div>
    );
}
