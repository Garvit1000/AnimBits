"use client";

import { usePlayground } from "@/app/playground/_lib/store";
import { REGISTRY_MAP } from "@/app/playground/_lib/registry-map";
import { Button } from "@/components/ui/button";
import { Rows, Columns, LayoutGrid, Code2, ChevronUp, ChevronDown, Trash2, Grip } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

// Helper to find component in registry
function findComponentInRegistry(componentId: string) {
    for (const category of Object.values(REGISTRY_MAP)) {
        if (category[componentId]) {
            return category[componentId];
        }
    }
    return null;
}

// Helper to generate code
function generateCode(components: any[], layout: string, gap: number) {
    if (components.length === 0) return "// Add components to generate code";

    const imports = new Set<string>();
    const componentCode = components
        .sort((a, b) => a.order - b.order)
        .map((instance) => {
            const registryItem = findComponentInRegistry(instance.componentId);
            if (!registryItem) return "";

            // Add import (simplified - would need actual import paths)
            imports.add(`import { ${registryItem.name.replace(/\s/g, "")} } from "@/components/animations";`);

            // Generate component JSX
            const props = Object.entries(instance.props)
                .map(([key, value]) => {
                    if (typeof value === "string") return `${key}="${value}"`;
                    if (typeof value === "number") return `${key}={${value}}`;
                    if (typeof value === "boolean") return value ? key : "";
                    return "";
                })
                .filter(Boolean)
                .join(" ");

            return `  <${registryItem.name.replace(/\s/g, "")} ${props} />`;
        })
        .filter(Boolean)
        .join("\n");

    const layoutClass = layout === "row" ? "flex-row" : layout === "column" ? "flex-col" : "grid grid-cols-2";

    return `${Array.from(imports).join("\n")}

export function AnimationComposition() {
  return (
    <div className="flex ${layoutClass}" style={{ gap: "${gap}px" }}>
${componentCode}
    </div>
  );
}`;
}

interface PlaygroundControlsProps {
    onShowCode?: () => void;
}

export function PlaygroundControls({ onShowCode }: PlaygroundControlsProps) {
    const {
        components,
        selectedComponentId,
        layout,
        setLayout,
        gap,
        setGap,
        alignment,
        setAlignment,
        backgroundColor,
        setBackgroundColor,
        updateComponentProps,
        removeComponent,
        reorderComponent,
        selectComponent,
    } = usePlayground();

    const selectedComponent = components.find(c => c.id === selectedComponentId);
    const selectedRegistryItem = selectedComponent ? findComponentInRegistry(selectedComponent.componentId) : null;

    return (
        <div className="space-y-4">
            <Tabs defaultValue="layout" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="layout">Layout</TabsTrigger>
                    <TabsTrigger value="component">Component</TabsTrigger>
                </TabsList>

                {/* LAYOUT TAB */}
                <TabsContent value="layout" className="space-y-4 mt-4">
                    {/* Layout Direction */}
                    <div className="space-y-2">
                        <Label className="text-xs font-semibold">Direction</Label>
                        <ToggleGroup
                            type="single"
                            value={layout}
                            onValueChange={(v: any) => v && setLayout(v)}
                            className="justify-start"
                        >
                            <ToggleGroupItem value="column" aria-label="Column" className="flex-1">
                                <Rows className="h-4 w-4 mr-1" />
                                <span className="text-xs">Column</span>
                            </ToggleGroupItem>
                            <ToggleGroupItem value="row" aria-label="Row" className="flex-1">
                                <Columns className="h-4 w-4 mr-1" />
                                <span className="text-xs">Row</span>
                            </ToggleGroupItem>
                            <ToggleGroupItem value="grid" aria-label="Grid" className="flex-1">
                                <LayoutGrid className="h-4 w-4 mr-1" />
                                <span className="text-xs">Grid</span>
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>

                    <Separator />

                    {/* Gap Control */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label className="text-xs font-semibold">Gap</Label>
                            <span className="text-xs font-medium">{gap}px</span>
                        </div>
                        <Slider
                            value={[gap]}
                            onValueChange={([v]) => setGap(v)}
                            max={64}
                            step={4}
                            className="w-full"
                        />
                    </div>

                    <Separator />

                    {/* Alignment */}
                    <div className="space-y-2">
                        <Label className="text-xs font-semibold">Alignment</Label>
                        <ToggleGroup
                            type="single"
                            value={alignment}
                            onValueChange={(v: any) => v && setAlignment(v)}
                            className="justify-start"
                        >
                            <ToggleGroupItem value="start" className="flex-1 text-xs">
                                Start
                            </ToggleGroupItem>
                            <ToggleGroupItem value="center" className="flex-1 text-xs">
                                Center
                            </ToggleGroupItem>
                            <ToggleGroupItem value="end" className="flex-1 text-xs">
                                End
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>

                    <Separator />

                    {/* Background Color */}
                    <div className="space-y-2">
                        <Label className="text-xs font-semibold">Background</Label>
                        <div className="flex gap-2">
                            <Input
                                type="color"
                                value={backgroundColor === "transparent" ? "#ffffff" : backgroundColor}
                                onChange={(e) => setBackgroundColor(e.target.value)}
                                className="w-16 h-9 p-1 cursor-pointer"
                            />
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setBackgroundColor("transparent")}
                                className="flex-1 text-xs"
                            >
                                Transparent
                            </Button>
                        </div>
                    </div>

                    <Separator />

                    {/* Code Export */}
                    {onShowCode && (
                        <div className="space-y-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={onShowCode}
                                className="w-full gap-2"
                            >
                                <Code2 className="h-4 w-4" />
                                Show Code
                            </Button>
                        </div>
                    )}
                </TabsContent>

                {/* COMPONENT TAB */}
                <TabsContent value="component" className="space-y-4 mt-4">
                    {components.length === 0 ? (
                        <div className="text-center py-8 text-sm text-muted-foreground">
                            No components added yet
                        </div>
                    ) : !selectedComponent ? (
                        <div className="text-center py-8 text-sm text-muted-foreground">
                            Select a component on the canvas to edit
                        </div>
                    ) : (
                        <>
                            {/* Component Selector */}
                            <div className="space-y-2">
                                <Label className="text-xs font-semibold">Selected Component</Label>
                                <Select value={selectedComponentId || ""} onValueChange={selectComponent}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select component" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {components.map((comp) => {
                                            const item = findComponentInRegistry(comp.componentId);
                                            return (
                                                <SelectItem key={comp.id} value={comp.id}>
                                                    {item?.name || comp.componentId}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                            </div>

                            <Separator />

                            {/* Component Actions */}
                            <div className="space-y-2">
                                <Label className="text-xs font-semibold">Actions</Label>
                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => reorderComponent(selectedComponentId!, "up")}
                                        disabled={selectedComponent.order === 0}
                                        className="flex-1"
                                    >
                                        <ChevronUp className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => reorderComponent(selectedComponentId!, "down")}
                                        disabled={selectedComponent.order === components.length - 1}
                                        className="flex-1"
                                    >
                                        <ChevronDown className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => removeComponent(selectedComponentId!)}
                                        className="flex-1"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>

                            <Separator />

                            {/* Component Props */}
                            <div className="space-y-3">
                                <Label className="text-xs font-semibold">Properties</Label>

                                {/* Size Controls for Containers */}
                                {selectedComponent.isContainer && (
                                    <>
                                        <div className="space-y-1">
                                            <Label className="text-xs text-muted-foreground">Width</Label>
                                            <Input
                                                value={selectedComponent.props.className?.match(/w-\[(\d+)px\]/)?.[1] || "400"}
                                                onChange={(e: any) => {
                                                    const width = e.target.value;
                                                    const currentClass = selectedComponent.props.className || "";
                                                    const newClass = currentClass.replace(/w-\[\d+px\]/, "").trim() + ` w-[${width}px]`;
                                                    updateComponentProps(selectedComponentId!, {
                                                        className: newClass.trim(),
                                                    });
                                                }}
                                                type="number"
                                                placeholder="400"
                                                className="h-8 text-xs"
                                            />
                                            <p className="text-[10px] text-muted-foreground">Width in pixels</p>
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-xs text-muted-foreground">Height</Label>
                                            <Input
                                                value={selectedComponent.props.className?.match(/h-\[(\d+)px\]/)?.[1] || "300"}
                                                onChange={(e: any) => {
                                                    const height = e.target.value;
                                                    const currentClass = selectedComponent.props.className || "";
                                                    const newClass = currentClass.replace(/h-\[\d+px\]/, "").trim() + ` h-[${height}px]`;
                                                    updateComponentProps(selectedComponentId!, {
                                                        className: newClass.trim(),
                                                    });
                                                }}
                                                type="number"
                                                placeholder="300"
                                                className="h-8 text-xs"
                                            />
                                            <p className="text-[10px] text-muted-foreground">Height in pixels</p>
                                        </div>
                                        <Separator />
                                    </>
                                )}

                                {/* Text Size Controls for Text Components */}
                                {!selectedComponent.isContainer && selectedComponent.props.children && typeof selectedComponent.props.children === "string" && (
                                    <>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <Label className="text-xs text-muted-foreground">Font Size</Label>
                                                <span className="text-xs font-medium">
                                                    {selectedComponent.props.className?.match(/text-(\w+)/)?.[1] || "4xl"}
                                                </span>
                                            </div>
                                            <Select
                                                value={selectedComponent.props.className?.match(/text-(\w+)/)?.[1] || "4xl"}
                                                onValueChange={(size) => {
                                                    const currentClass = selectedComponent.props.className || "";
                                                    const newClass = currentClass.replace(/text-\w+/, "").trim() + ` text-${size}`;
                                                    updateComponentProps(selectedComponentId!, {
                                                        className: newClass.trim(),
                                                    });
                                                }}
                                            >
                                                <SelectTrigger className="h-8 text-xs">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="xs">Extra Small (xs)</SelectItem>
                                                    <SelectItem value="sm">Small (sm)</SelectItem>
                                                    <SelectItem value="base">Base</SelectItem>
                                                    <SelectItem value="lg">Large (lg)</SelectItem>
                                                    <SelectItem value="xl">XL</SelectItem>
                                                    <SelectItem value="2xl">2XL</SelectItem>
                                                    <SelectItem value="3xl">3XL</SelectItem>
                                                    <SelectItem value="4xl">4XL</SelectItem>
                                                    <SelectItem value="5xl">5XL</SelectItem>
                                                    <SelectItem value="6xl">6XL</SelectItem>
                                                    <SelectItem value="7xl">7XL</SelectItem>
                                                    <SelectItem value="8xl">8XL</SelectItem>
                                                    <SelectItem value="9xl">9XL</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <Separator />
                                    </>
                                )}

                                {/* Other Props */}
                                {Object.entries(selectedComponent.props).map(([key, value]) => {
                                    if (key === "className") return null; // Skip className (handled above for size)

                                    return (
                                        <div key={key} className="space-y-1">
                                            <Label className="text-xs text-muted-foreground capitalize">
                                                {key.replace(/([A-Z])/g, " $1").trim()}
                                            </Label>
                                            {typeof value === "string" ? (
                                                <Input
                                                    value={value}
                                                    onChange={(e: any) =>
                                                        updateComponentProps(selectedComponentId!, {
                                                            [key]: e.target.value,
                                                        })
                                                    }
                                                    className="h-8 text-xs"
                                                />
                                            ) : typeof value === "number" ? (
                                                <Input
                                                    type="number"
                                                    value={value}
                                                    onChange={(e: any) =>
                                                        updateComponentProps(selectedComponentId!, {
                                                            [key]: Number(e.target.value),
                                                        })
                                                    }
                                                    className="h-8 text-xs"
                                                />
                                            ) : Array.isArray(value) && value.every(v => typeof v === "string") ? (
                                                <>
                                                    <Input
                                                        value={value.join(", ")}
                                                        onChange={(e: any) => {
                                                            const newWords = e.target.value
                                                                .split(",")
                                                                .map((w: string) => w.trim())
                                                                .filter((w: string) => w.length > 0);
                                                            updateComponentProps(selectedComponentId!, {
                                                                [key]: newWords,
                                                            });
                                                        }}
                                                        placeholder="Enter words separated by commas"
                                                        className="h-8 text-xs"
                                                    />
                                                    <p className="text-[10px] text-muted-foreground">
                                                        Separate words with commas
                                                    </p>
                                                </>
                                            ) : null}
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    )}
                </TabsContent>
            </Tabs>
        </div>
    );
}
