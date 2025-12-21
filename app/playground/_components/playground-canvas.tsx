"use client";

import { usePlayground } from "@/app/playground/_lib/store";
import { REGISTRY_MAP } from "@/app/playground/_lib/registry-map";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { cn } from "@/lib/utils";
import {
    DndContext,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
    PointerSensor,
    useSensor,
    useSensors,
    closestCenter,
} from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { DraggableComponent } from "./draggable-component";
import { DropZone } from "./drop-zone";
import { useState, useEffect } from "react";

// Helper to find component across all categories
function findComponent(componentId: string) {
    for (const category of Object.values(REGISTRY_MAP)) {
        if (category[componentId]) {
            return category[componentId];
        }
    }
    return null;
}

export function PlaygroundCanvas() {
    const {
        components,
        selectedComponentId,
        isPreviewMode,
        layout,
        gap,
        alignment,
        backgroundColor,
        removeComponent,
        selectComponent,
        getRootComponents,
        getChildren,
        moveComponent,
        canNest,
        setPreviewMode,
    } = usePlayground();

    const [activeId, setActiveId] = useState<string | null>(null);
    const [animationKey, setAnimationKey] = useState(0);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8, // 8px movement required to start drag
            },
        })
    );

    // Listen for replay events
    useEffect(() => {
        const handleReplay = (e: Event) => {
            const customEvent = e as CustomEvent;
            setAnimationKey(customEvent.detail.key);
        };

        window.addEventListener('replay-animations', handleReplay);
        return () => window.removeEventListener('replay-animations', handleReplay);
    }, []);

    // Layout class mapping
    const layoutClasses = {
        row: "flex-row",
        column: "flex-col",
        grid: "grid grid-cols-2 md:grid-cols-3",
        free: "flex-wrap",
    };

    const alignmentClasses = {
        start: "items-start justify-start",
        center: "items-center justify-center",
        end: "items-end justify-end",
    };

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveId(null);

        if (!over) return;

        const activeId = active.id as string;
        const overId = over.id as string;

        // Check if dropping into a dropzone
        if (overId.startsWith("dropzone-")) {
            const parentId = overId.replace("dropzone-", "");
            const parent = components.find(c => c.id === parentId);

            if (parent && canNest(activeId, parentId)) {
                const newOrder = getChildren(parentId).length;
                moveComponent(activeId, parentId, newOrder);
            }
        } else if (activeId !== overId) {
            // Reordering within same level
            const activeComp = components.find(c => c.id === activeId);
            const overComp = components.find(c => c.id === overId);

            if (activeComp && overComp && activeComp.parentId === overComp.parentId) {
                moveComponent(activeId, activeComp.parentId, overComp.order);
            }
        }
    };

    // Recursive component renderer
    const renderComponent = (instance: any): React.ReactElement | null => {
        const registryItem = findComponent(instance.componentId);
        if (!registryItem) return null;

        const Component = registryItem.component;
        let props = { ...registryItem.defaultProps, ...instance.props };
        const children = getChildren(instance.id);

        // Special handling for List components - convert items array to children elements
        const isListComponent = ['slide-in-list', 'stagger-fade'].includes(instance.componentId);
        if (isListComponent && props.items && Array.isArray(props.items)) {
            props = {
                ...props,
                children: props.items.map((item: string, i: number) => (
                    <div key={i} className="p-3 bg-background border rounded-md">{item}</div>
                ))
            };
            delete props.items; // Remove items prop as it's been converted to children
        }

        // Special handling for SwipeableStack - convert cards array to children elements
        if (instance.componentId === 'swipeable-stack' && props.cards && Array.isArray(props.cards)) {
            props = {
                ...props,
                children: props.cards.map((card: any, i: number) => (
                    <div
                        key={i}
                        className={`w-[300px] h-[400px] bg-gradient-to-br ${i === 0 ? 'from-purple-500 to-pink-500' :
                            i === 1 ? 'from-blue-500 to-cyan-500' :
                                'from-orange-500 to-red-500'
                            } rounded-2xl p-6 flex items-center justify-center text-white text-2xl font-bold shadow-xl`}
                    >
                        {card.content || `Card ${i + 1}`}
                    </div>
                ))
            };
            delete props.cards; // Remove cards prop as it's been converted to children
        }

        // Special handling for image-based cards - update children and props when imageUrl changes
        // Store imageUrl before deleting it for use in component key
        const imageUrl = props.imageUrl;
        if (imageUrl) {
            if (instance.componentId === 'background-zoom') {
                // CardBackgroundZoom expects backgroundImage prop, not imageUrl
                props = {
                    ...props,
                    backgroundImage: imageUrl,
                    children: <div key={imageUrl} className="w-full h-full" />
                };
                delete props.imageUrl;
            } else if (instance.componentId === 'grayscale-card') {
                // CardGrayscale now accepts image prop directly
                props = {
                    ...props,
                    image: imageUrl
                };
                delete props.imageUrl;
            }
        }

        const disableAnimation = props.disableAnimation === true;
        // Remove disableAnimation from props to avoid passing it to DOM
        const { disableAnimation: _, ...cleanProps } = props;
        props = cleanProps;

        // KILL SWITCH: Comprehensive animation disabling
        if (disableAnimation) {
            // Define animation props that should be overridden
            const animationOverrides: Record<string, any> = {
                duration: 0,
                delay: 0,
                staggerDelay: 0,
                animationDuration: 0,
                transitionDuration: 0,
                speed: 0, // For typewriter
                interval: 0, // For morph, zoom-hollow, image-text, dia-text
                whileHover: undefined, // Disable hover animations
                whileTap: undefined, // Disable tap animations
                whileFocus: undefined, // Disable focus animations
                whileInView: undefined, // Disable viewport animations
                initial: false, // Disable initial animation state
                animate: undefined, // Disable animate prop
            };

            // ONLY apply overrides if the prop already exists in the component's props
            Object.keys(animationOverrides).forEach(key => {
                if (key in props || key in registryItem.defaultProps) {
                    props[key] = animationOverrides[key];
                }
            });

            // Force transition to zero duration if component uses transitions
            if ('transition' in props || 'transition' in registryItem.defaultProps) {
                props.transition = { duration: 0, delay: 0, type: false };
            }

            // Add CSS class for animation disabling
            props.className = cn(props.className, "animation-disabled");

            // Inline styles (only for CSS properties, won't cause React warnings)
            props.style = {
                ...props.style,
                animationDuration: '0s',
                animationDelay: '0s',
                transitionDuration: '0s',
                transitionDelay: '0s',
                animationIterationCount: '0',
                transform: 'none',
                filter: 'none',
            };
        }

        return (
            <DraggableComponent
                key={instance.id}
                instance={instance}
                isSelected={selectedComponentId === instance.id}
                isPreviewMode={isPreviewMode}
                onSelect={() => selectComponent(instance.id)}
                onRemove={() => removeComponent(instance.id)}
            >
                <MotionConfig
                    transition={disableAnimation ? { duration: 0, delay: 0, type: false } : undefined}
                    reducedMotion={disableAnimation ? "always" : undefined}
                >
                    {/* Triple-layer wrapper for maximum animation blocking */}
                    <div
                        className={disableAnimation ? "animation-disabled-container" : undefined}
                        style={disableAnimation ? {
                            pointerEvents: 'none',
                            userSelect: 'none',
                        } : undefined}
                    >
                        <div
                            className={disableAnimation ? "disable-animations" : undefined}
                            style={disableAnimation ? {
                                animationPlayState: 'paused',
                                animationDuration: '0s',
                                transitionDuration: '0s',
                            } : undefined}
                        >
                            {instance.isContainer ? (
                                <div className="relative">
                                    <Component {...props} key={imageUrl ? `comp-${instance.id}-${animationKey}-${imageUrl}` : `comp-${instance.id}-${animationKey}`}>
                                        <DropZone
                                            parentId={instance.id}
                                            isEmpty={children.length === 0}
                                        >
                                            {children.length > 0 && (
                                                <SortableContext
                                                    items={children.map(c => c.id)}
                                                    strategy={verticalListSortingStrategy}
                                                >
                                                    {children.map(child => renderComponent(child))}
                                                </SortableContext>
                                            )}
                                        </DropZone>
                                    </Component>
                                </div>
                            ) : (
                                <Component {...props} key={imageUrl ? `comp-${instance.id}-${animationKey}-${imageUrl}` : `comp-${instance.id}-${animationKey}`}>
                                    {props.children}
                                </Component>
                            )}
                        </div>
                    </div>
                </MotionConfig>
            </DraggableComponent>
        );
    };

    const rootComponents = getRootComponents();
    const activeComponent = activeId ? components.find(c => c.id === activeId) : null;

    return (
        <div
            className="w-full h-full min-h-[500px] flex items-center justify-center rounded-xl border relative shadow-sm overflow-auto"
            style={{ backgroundColor: backgroundColor === "transparent" ? undefined : backgroundColor }}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0/0.05)_1px,transparent_0)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.05)_1px,transparent_0)]" />

            {/* Preview Mode Toggle - Top Right */}
            {components.length > 0 && (
                <div className="absolute top-4 right-4 z-50 flex gap-2">
                    <button
                        onClick={() => setPreviewMode(!isPreviewMode)}
                        className={cn(
                            "px-4 py-2 rounded-lg font-medium text-sm transition-all shadow-lg backdrop-blur-sm",
                            isPreviewMode
                                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                : "bg-background/80 border hover:bg-accent"
                        )}
                        title={isPreviewMode ? "Exit preview mode" : "Enter preview mode"}
                    >
                        <div className="flex items-center gap-2">
                            {isPreviewMode ? (
                                <>
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    <span>Edit Mode</span>
                                </>
                            ) : (
                                <>
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    <span>Preview</span>
                                </>
                            )}
                        </div>
                    </button>
                </div>
            )}

            {/* Empty State */}
            {components.length === 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 text-center p-8"
                >
                    <div className="text-muted-foreground mb-2">
                        <svg className="w-16 h-16 mx-auto mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">No Components Added</h3>
                    <p className="text-sm text-muted-foreground">
                        Select animations from the sidebar to add them to the canvas
                    </p>
                </motion.div>
            )}

            {/* Components Container with Drag and Drop */}
            {components.length > 0 && (
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                >
                    <div
                        className={cn(
                            "relative z-10 flex p-8 w-full pl-16", // Extra left padding for drag handles
                            layoutClasses[layout],
                            alignmentClasses[alignment]
                        )}
                        style={{ gap: `${gap}px` }}
                    >
                        <SortableContext
                            items={rootComponents.map(c => c.id)}
                            strategy={verticalListSortingStrategy}
                        >
                            <AnimatePresence mode="popLayout">
                                {rootComponents.map(instance => renderComponent(instance))}
                            </AnimatePresence>
                        </SortableContext>
                    </div>

                    {/* Drag Overlay */}
                    <DragOverlay>
                        {activeComponent && (
                            <div className="opacity-75 cursor-grabbing">
                                {(() => {
                                    const registryItem = findComponent(activeComponent.componentId);
                                    if (!registryItem) return null;
                                    const Component = registryItem.component;
                                    const props = { ...registryItem.defaultProps, ...activeComponent.props };
                                    return <Component {...props} />;
                                })()}
                            </div>
                        )}
                    </DragOverlay>
                </DndContext>
            )}
        </div>
    );
}
