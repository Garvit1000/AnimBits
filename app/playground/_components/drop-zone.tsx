import { useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

interface DropZoneProps {
    parentId: string;
    isOver?: boolean;
    canDrop?: boolean;
    isEmpty?: boolean;
    children?: React.ReactNode;
}

export function DropZone({ parentId, isEmpty = false, children }: DropZoneProps) {
    const { setNodeRef, isOver, active } = useDroppable({
        id: `dropzone-${parentId}`,
        data: {
            type: "dropzone",
            parentId,
        },
    });

    const isDragging = active !== null;

    return (
        <div
            ref={setNodeRef}
            className={cn(
                "min-h-[100px] rounded-lg transition-all p-4",
                isDragging && "border-2 border-dashed",
                isOver ? "border-primary bg-primary/5" : "border-transparent",
                isEmpty && !isDragging && "border border-dashed border-muted-foreground/30"
            )}
        >
            {isEmpty && !isDragging ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                    <Plus className="h-8 w-8 mb-2 opacity-30" />
                    <p className="text-xs">Drop components here</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {children}
                </div>
            )}
        </div>
    );
}
