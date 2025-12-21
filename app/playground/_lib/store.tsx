"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";


export interface ComponentInstance {
    id: string; // Unique instance ID
    componentId: string; // Registry ID (e.g., "blur-in")
    props: Record<string, unknown>; // Component-specific props
    order: number; // Display order
    parentId: string | null; // null = root level, otherwise parent component ID
    children: string[]; // Array of child component IDs
    isContainer: boolean; // Can this component accept children?
}

export interface PlaygroundState {
    // Component instances
    components: ComponentInstance[];

    // Selected component for editing
    selectedComponentId: string | null;

    // Drag state
    draggedComponentId: string | null;

    // Preview mode - hides editing UI, enables full interaction
    isPreviewMode: boolean;

    // Layout configuration
    layout: "row" | "column" | "grid" | "free";
    gap: number; // in pixels
    alignment: "start" | "center" | "end";
    backgroundColor: string;

    // Actions - Component Management
    addComponent: (componentId: string, defaultProps: Record<string, unknown>, parentId?: string | null, isContainer?: boolean) => void;
    removeComponent: (id: string) => void;
    updateComponentProps: (id: string, props: Record<string, unknown>) => void;
    reorderComponent: (id: string, direction: "up" | "down") => void;
    clearAllComponents: () => void;

    // Actions - Nesting
    nestComponent: (childId: string, parentId: string) => void;
    unnestComponent: (childId: string) => void;
    moveComponent: (componentId: string, newParentId: string | null, newOrder: number) => void;

    // Actions - Selection
    selectComponent: (id: string | null) => void;
    setDraggedComponent: (id: string | null) => void;

    // Actions - Preview
    setPreviewMode: (isPreview: boolean) => void;

    // Actions - Layout
    setLayout: (layout: "row" | "column" | "grid" | "free") => void;
    setGap: (gap: number) => void;
    setAlignment: (alignment: "start" | "center" | "end") => void;
    setBackgroundColor: (color: string) => void;

    // Helper functions
    getChildren: (parentId: string) => ComponentInstance[];
    getRootComponents: () => ComponentInstance[];
    canNest: (childId: string, parentId: string) => boolean;
    getDepth: (componentId: string) => number;
}

const PlaygroundContext = createContext<PlaygroundState | undefined>(undefined);

export function PlaygroundProvider({ children }: { children: ReactNode }) {
    const [components, setComponents] = useState<ComponentInstance[]>([]);
    const [selectedComponentId, setSelectedComponentId] = useState<string | null>(null);
    const [draggedComponentId, setDraggedComponentId] = useState<string | null>(null);
    const [isPreviewMode, setIsPreviewMode] = useState(false);
    const [layout, setLayoutState] = useState<"row" | "column" | "grid" | "free">("column");
    const [gap, setGapState] = useState(16);
    const [alignment, setAlignmentState] = useState<"start" | "center" | "end">("center");
    const [backgroundColor, setBackgroundColorState] = useState("transparent");

    // Helper: Get children of a component
    const getChildren = (parentId: string): ComponentInstance[] => {
        return components.filter(comp => comp.parentId === parentId).sort((a, b) => a.order - b.order);
    };

    // Helper: Get root level components
    const getRootComponents = (): ComponentInstance[] => {
        return components.filter(comp => comp.parentId === null).sort((a, b) => a.order - b.order);
    };

    // Helper: Get depth of a component in the tree
    const getDepth = (componentId: string): number => {
        const component = components.find(c => c.id === componentId);
        if (!component) return -1; // Component not found
        if (component.parentId === null) return 0;
        return 1 + getDepth(component.parentId);
    };

    // Helper: Check if childId is a descendant of parentId
    const isDescendant = (parentId: string, childId: string): boolean => {
        const parent = components.find(c => c.id === parentId);
        if (!parent) return false;
        if (parent.children.includes(childId)) return true;
        return parent.children.some(childCompId => isDescendant(childCompId, childId));
    };

    // Helper: Check if nesting is valid
    const canNest = (childId: string, parentId: string): boolean => {
        const parent = components.find(c => c.id === parentId);
        const child = components.find(c => c.id === childId);

        if (!parent || !child) return false;
        if (!parent.isContainer) return false; // Parent must be a container
        if (childId === parentId) return false; // Can't nest into self
        if (isDescendant(childId, parentId)) return false; // Prevent circular nesting
        if (isDescendant(childId, parentId)) return false; // Prevent nesting a parent into its child
        if (getDepth(parentId) >= 2) return false; // Max 3 levels (0, 1, 2)

        return true;
    };

    const addComponent = (
        componentId: string,
        defaultProps: Record<string, unknown>,
        parentId: string | null = null,
        isContainer: boolean = false
    ) => {
        const newComponent: ComponentInstance = {
            id: uuidv4(),
            componentId,
            props: { ...defaultProps },
            order: parentId
                ? getChildren(parentId).length
                : getRootComponents().length,
            parentId,
            children: [],
            isContainer,
        };

        setComponents(prev => {
            const updated = [...prev, newComponent];
            // Update parent's children array if nesting
            if (parentId) {
                return updated.map(comp =>
                    comp.id === parentId
                        ? { ...comp, children: [...comp.children, newComponent.id] }
                        : comp
                );
            }
            return updated;
        });

        setSelectedComponentId(newComponent.id);
    };

    const removeComponent = (id: string) => {
        const componentToRemove = components.find(c => c.id === id);
        if (!componentToRemove) return;

        // Collect all IDs to remove (component itself and its descendants)
        const idsToRemove = new Set<string>();
        const collectDescendants = (currentId: string) => {
            idsToRemove.add(currentId);
            components.filter(c => c.parentId === currentId).forEach(child => {
                collectDescendants(child.id);
            });
        };
        collectDescendants(id);

        setComponents(prev => {
            // Filter out all components marked for removal
            let updatedComponents = prev.filter(comp => !idsToRemove.has(comp.id));

            // If the removed component had a parent, update the parent's children array
            if (componentToRemove.parentId) {
                updatedComponents = updatedComponents.map(comp =>
                    comp.id === componentToRemove.parentId
                        ? { ...comp, children: comp.children.filter(childId => !idsToRemove.has(childId)) }
                        : comp
                );
            }

            // Reorder siblings of the removed component (if any)
            const parentOfRemoved = componentToRemove.parentId;
            const siblings = updatedComponents.filter(c => c.parentId === parentOfRemoved).sort((a, b) => a.order - b.order);
            updatedComponents = updatedComponents.map(comp => {
                if (comp.parentId === parentOfRemoved) {
                    const newOrder = siblings.findIndex(s => s.id === comp.id);
                    return { ...comp, order: newOrder };
                }
                return comp;
            });

            return updatedComponents;
        });

        if (idsToRemove.has(selectedComponentId || '')) {
            setSelectedComponentId(null);
        }
    };

    const updateComponentProps = (id: string, props: Record<string, unknown>) => {
        setComponents(prev =>
            prev.map(comp =>
                comp.id === id ? { ...comp, props: { ...comp.props, ...props } } : comp
            )
        );
    };

    const reorderComponent = (id: string, direction: "up" | "down") => {
        setComponents(prev => {
            const component = prev.find(c => c.id === id);
            if (!component) return prev;

            const siblings = prev.filter(c => c.parentId === component.parentId).sort((a, b) => a.order - b.order);
            const index = siblings.findIndex(c => c.id === id);

            const newIndex = direction === "up" ? index - 1 : index + 1;
            if (newIndex < 0 || newIndex >= siblings.length) return prev;

            const newSiblings = [...siblings];
            [newSiblings[index], newSiblings[newIndex]] = [newSiblings[newIndex], newSiblings[index]];

            // Create a map for new orders of siblings
            const newOrderMap = new Map(newSiblings.map((s, i) => [s.id, i]));

            return prev.map(comp => {
                if (comp.parentId === component.parentId) {
                    return { ...comp, order: newOrderMap.get(comp.id) ?? comp.order };
                }
                return comp;
            });
        });
    };

    const nestComponent = (childId: string, parentId: string) => {
        if (!canNest(childId, parentId)) return;

        setComponents(prev => {
            const child = prev.find(c => c.id === childId);
            if (!child) return prev;

            const oldParentId = child.parentId;

            let updatedComponents = prev.map(comp => {
                // Update child's parentId and order
                if (comp.id === childId) {
                    return {
                        ...comp,
                        parentId,
                        order: getChildren(parentId).length, // Place at the end of new parent's children
                    };
                }
                return comp;
            });

            // Remove from old parent's children array
            if (oldParentId) {
                updatedComponents = updatedComponents.map(comp =>
                    comp.id === oldParentId
                        ? { ...comp, children: comp.children.filter(id => id !== childId) }
                        : comp
                );
            }

            // Add to new parent's children array
            updatedComponents = updatedComponents.map(comp =>
                comp.id === parentId
                    ? { ...comp, children: [...comp.children, childId] }
                    : comp
            );

            // Reorder siblings of the old parent (if any)
            if (oldParentId) {
                const oldSiblings = updatedComponents.filter(c => c.parentId === oldParentId).sort((a, b) => a.order - b.order);
                updatedComponents = updatedComponents.map(comp => {
                    if (comp.parentId === oldParentId) {
                        const newOrder = oldSiblings.findIndex(s => s.id === comp.id);
                        return { ...comp, order: newOrder };
                    }
                    return comp;
                });
            }

            return updatedComponents;
        });
    };

    const unnestComponent = (childId: string) => {
        setComponents(prev => {
            const child = prev.find(c => c.id === childId);
            if (!child || child.parentId === null) return prev; // Already at root

            const parentId = child.parentId;

            let updatedComponents = prev.map(comp => {
                // Move child to root level
                if (comp.id === childId) {
                    return {
                        ...comp,
                        parentId: null,
                        order: getRootComponents().length, // Place at the end of root components
                    };
                }
                return comp;
            });

            // Remove from parent's children array
            updatedComponents = updatedComponents.map(comp =>
                comp.id === parentId
                    ? { ...comp, children: comp.children.filter(id => id !== childId) }
                    : comp
            );

            // Reorder siblings of the parent
            const siblings = updatedComponents.filter(c => c.parentId === parentId).sort((a, b) => a.order - b.order);
            updatedComponents = updatedComponents.map(comp => {
                if (comp.parentId === parentId) {
                    const newOrder = siblings.findIndex(s => s.id === comp.id);
                    return { ...comp, order: newOrder };
                }
                return comp;
            });

            return updatedComponents;
        });
    };

    const moveComponent = (componentId: string, newParentId: string | null, newOrder: number) => {
        // If newParentId is provided, check if nesting is valid
        if (newParentId && !canNest(componentId, newParentId)) {
            console.warn(`Cannot move component ${componentId} to parent ${newParentId}. Invalid nesting.`);
            return;
        }

        setComponents(prev => {
            const componentToMove = prev.find(c => c.id === componentId);
            if (!componentToMove) return prev;

            const oldParentId = componentToMove.parentId;

            // 1. Remove component from its old parent's children array
            let updatedComponents = prev.map(comp => {
                if (comp.id === oldParentId) {
                    return {
                        ...comp,
                        children: comp.children.filter(id => id !== componentId),
                    };
                }
                return comp;
            });

            // 2. Update the component being moved
            updatedComponents = updatedComponents.map(comp => {
                if (comp.id === componentId) {
                    return { ...comp, parentId: newParentId, order: newOrder };
                }
                return comp;
            });

            // 3. Add component to its new parent's children array
            if (newParentId) {
                updatedComponents = updatedComponents.map(comp => {
                    if (comp.id === newParentId) {
                        const currentChildren = new Set(comp.children);
                        currentChildren.add(componentId); // Ensure it's added
                        return {
                            ...comp,
                            children: Array.from(currentChildren),
                        };
                    }
                    return comp;
                });
            }

            // 4. Reorder siblings in the old parent's group
            if (oldParentId) {
                const oldSiblings = updatedComponents.filter(c => c.parentId === oldParentId).sort((a, b) => a.order - b.order);
                updatedComponents = updatedComponents.map(comp => {
                    if (comp.parentId === oldParentId) {
                        const newOrder = oldSiblings.findIndex(s => s.id === comp.id);
                        return { ...comp, order: newOrder };
                    }
                    return comp;
                });
            }

            // 5. Reorder siblings in the new parent's group (including the moved component)
            const targetSiblings = updatedComponents.filter(c => c.parentId === newParentId).sort((a, b) => a.order - b.order);
            const newTargetSiblings = [...targetSiblings];

            // Find the component in the target siblings and adjust its position
            const currentIdx = newTargetSiblings.findIndex(c => c.id === componentId);
            if (currentIdx !== -1) {
                const [movedComp] = newTargetSiblings.splice(currentIdx, 1);
                newTargetSiblings.splice(newOrder, 0, movedComp);
            } else {
                // If it wasn't in the target siblings (e.g., moving from different parent), insert it
                const movedComp = updatedComponents.find(c => c.id === componentId);
                if (movedComp) {
                    newTargetSiblings.splice(newOrder, 0, movedComp);
                }
            }

            const newOrderMap = new Map(newTargetSiblings.map((s, i) => [s.id, i]));

            updatedComponents = updatedComponents.map(comp => {
                if (comp.parentId === newParentId) {
                    return { ...comp, order: newOrderMap.get(comp.id) ?? comp.order };
                }
                return comp;
            });

            return updatedComponents;
        });
    };


    const clearAllComponents = () => {
        setComponents([]);
        setSelectedComponentId(null);
    };

    const selectComponent = (id: string | null) => {
        setSelectedComponentId(id);
    };

    const setDraggedComponent = (id: string | null) => {
        setDraggedComponentId(id);
    };

    const setLayout = (newLayout: "row" | "column" | "grid" | "free") => {
        setLayoutState(newLayout);
    };

    const setGap = (newGap: number) => {
        setGapState(newGap);
    };

    const setAlignment = (newAlignment: "start" | "center" | "end") => {
        setAlignmentState(newAlignment);
    };

    const setBackgroundColor = (color: string) => {
        setBackgroundColorState(color);
    };

    const setPreviewMode = (isPreview: boolean) => {
        setIsPreviewMode(isPreview);
        // Deselect component when entering preview mode
        if (isPreview) {
            setSelectedComponentId(null);
        }
    };

    return (
        <PlaygroundContext.Provider
            value={{
                components,
                selectedComponentId,
                draggedComponentId,
                isPreviewMode,
                layout,
                gap,
                alignment,
                backgroundColor,
                addComponent,
                removeComponent,
                updateComponentProps,
                reorderComponent,
                clearAllComponents,
                nestComponent,
                unnestComponent,
                moveComponent,
                selectComponent,
                setDraggedComponent,
                setPreviewMode,
                setLayout,
                setGap,
                setAlignment,
                setBackgroundColor,
                getChildren,
                getRootComponents,
                canNest,
                getDepth,
            }}
        >
            {children}
        </PlaygroundContext.Provider>
    );
}

export function usePlayground() {
    const context = useContext(PlaygroundContext);
    if (!context) {
        throw new Error("usePlayground must be used within a PlaygroundProvider");
    }
    return context;
}
