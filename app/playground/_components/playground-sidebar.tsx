"use client";

import { usePlayground } from "@/app/playground/_lib/store";
import { REGISTRY_MAP, ComponentCategory } from "@/app/playground/_lib/registry-map";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Plus, Trash2, Package, RotateCcw } from "lucide-react";
import { useState } from "react";

// Define which categories are containers by default
const CONTAINER_CATEGORIES: ComponentCategory[] = ["Card", "Special"];

export function PlaygroundSidebar() {
    const {
        components,
        addComponent,
        clearAllComponents,
    } = usePlayground();

    const [replayKey, setReplayKey] = useState(0);

    const handleAddComponent = (componentId: string, category: ComponentCategory) => {
        const registryItem = findComponentInRegistry(componentId);
        if (registryItem) {
            // Only Card and Special categories are containers by default
            const isContainer = CONTAINER_CATEGORIES.includes(category);
            addComponent(componentId, registryItem.defaultProps, null, isContainer);
        }
    };

    // Helper to find component in registry
    const findComponentInRegistry = (componentId: string) => {
        for (const category of Object.values(REGISTRY_MAP)) {
            if (category[componentId]) {
                return category[componentId];
            }
        }
        return null;
    };

    // Count how many times a component is used
    const getComponentCount = (componentId: string) => {
        return components.filter(c => c.componentId === componentId).length;
    };

    const handleReplay = () => {
        // Force re-render of all animations by updating key
        setReplayKey(prev => prev + 1);
        // Trigger re-render in parent
        window.dispatchEvent(new CustomEvent('replay-animations', { detail: { key: replayKey + 1 } }));
    };

    return (
        <div className="w-full h-full flex flex-col">
            {/* Header with Action buttons */}
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-sm font-semibold">Components</h2>
                    <p className="text-xs text-muted-foreground">
                        {components.length} {components.length === 1 ? 'component' : 'components'} added
                    </p>
                </div>
                {components.length > 0 && (
                    <div className="flex gap-1">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleReplay}
                            className="h-8 text-xs"
                            title="Replay all animations"
                        >
                            <RotateCcw className="h-3 w-3" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={clearAllComponents}
                            className="h-8 text-xs text-destructive hover:text-destructive"
                            title="Clear all components"
                        >
                            <Trash2 className="h-3 w-3" />
                        </Button>
                    </div>
                )}
            </div>

            {/* Component List */}
            <div className="flex-1 overflow-y-auto">
                <Accordion type="multiple" defaultValue={["Card", "Text", "Button", "Icon", "Loader", "List", "Special"]} className="w-full">
                    {Object.entries(REGISTRY_MAP).map(([category, items]) => (
                        <AccordionItem key={category} value={category}>
                            <AccordionTrigger className="text-sm font-medium">
                                {category}
                                <span className="ml-2 text-xs text-muted-foreground">
                                    ({Object.keys(items).length})
                                </span>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="grid grid-cols-1 gap-1.5 pt-2">
                                    {Object.entries(items).map(([id, item]) => {
                                        const count = getComponentCount(id);
                                        return (
                                            <Button
                                                key={id}
                                                variant="ghost"
                                                className={cn(
                                                    "w-full justify-start text-left h-auto py-2 px-3 group hover:bg-accent",
                                                    count > 0 && "bg-accent/30"
                                                )}
                                                onClick={() => handleAddComponent(id, category as ComponentCategory)}
                                            >
                                                <div className="flex items-center w-full gap-2">
                                                    <div className="flex-1 min-w-0">
                                                        <div className="font-medium text-sm truncate">
                                                            {item.name}
                                                        </div>
                                                        <div className="text-xs text-muted-foreground line-clamp-1">
                                                            {item.description}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-1 flex-shrink-0">
                                                        {count > 0 && (
                                                            <span className="text-xs font-semibold bg-primary/20 text-primary px-1.5 py-0.5 rounded">
                                                                {count}
                                                            </span>
                                                        )}
                                                        <Plus className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                                    </div>
                                                </div>
                                            </Button>
                                        );
                                    })}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
