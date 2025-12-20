import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ComponentInstance } from "@/app/playground/_lib/store";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface DraggableComponentProps {
    instance: ComponentInstance;
    isSelected: boolean;
    isPreviewMode: boolean;
    onSelect: () => void;
    onRemove: () => void;
    children: React.ReactNode;
    isDragOverlay?: boolean;
}

export function DraggableComponent({
    instance,
    isSelected,
    isPreviewMode,
    onSelect,
    onRemove,
    children,
    isDragOverlay = false,
}: DraggableComponentProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: instance.id,
        data: {
            type: "component",
            instance,
        },
        disabled: isPreviewMode, // Disable dragging in preview mode
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={cn(
                "relative rounded-lg transition-all",
                !isPreviewMode && "group", // Only show group hover in edit mode
                !isPreviewMode && isSelected && "ring-2 ring-primary ring-offset-2 ring-offset-background",
                isDragging && "z-50",
                isDragOverlay && "cursor-grabbing"
            )}
        >
            {/* Drag Handle - only in edit mode */}
            {!isPreviewMode && (
                <div
                    {...attributes}
                    {...listeners}
                    className="absolute -left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing p-1 hover:bg-accent rounded z-50"
                    onClick={(e) => e.stopPropagation()}
                    role="button"
                    tabIndex={0}
                    aria-label="Drag to reorder"
                >
                    <GripVertical className="h-4 w-4 text-muted-foreground" />
                </div>
            )}

            {/* Selection overlay - only in edit mode when NOT selected */}
            {!isPreviewMode && !isSelected && (
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        onSelect();
                    }}
                    className="absolute inset-0 z-10 cursor-pointer bg-transparent"
                    aria-label="Click to select component"
                />
            )}

            {/* Component Content */}
            <div
                className="relative z-0"
                style={{
                    // In preview mode, always allow interaction
                    // In edit mode, only allow interaction when selected
                    pointerEvents: isPreviewMode ? 'auto' : (isSelected ? 'auto' : 'none'),
                }}
            >
                {children}
            </div>

            {/* Remove Button - only in edit mode */}
            {!isPreviewMode && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onRemove();
                    }}
                    className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-destructive text-destructive-foreground rounded-full p-1.5 shadow-lg hover:scale-110 transition-transform z-50"
                    title="Remove component"
                    aria-label="Remove component"
                >
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}
        </div>
    );
}
