import { REGISTRY_MAP } from "./registry-map";

export interface ComponentInstance {
    id: string;
    componentId: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props: Record<string, any>;
    parentId: string | null;
    children: string[];
    isContainer: boolean;
}

/**
 * Generate import statements for all used components
 */
export function generateImports(components: ComponentInstance[]): string {
    const imports = new Map<string, Set<string>>();

    components.forEach((instance) => {
        // Find the component in registry
        for (const [, items] of Object.entries(REGISTRY_MAP)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const component = (items as any)[instance.componentId];
            if (component) {
                // Determine import path - use @/components format
                const componentPath = `@/components/animbits/${instance.componentId}`;

                // Get component name (PascalCase)
                const componentName = component.component.name;

                if (!imports.has(componentPath)) {
                    imports.set(componentPath, new Set());
                }
                imports.get(componentPath)!.add(componentName);
                break;
            }
        }
    });

    // Generate import statements
    const importStatements: string[] = [];
    imports.forEach((names, path) => {
        const nameList = Array.from(names).join(", ");
        importStatements.push(`import { ${nameList} } from "${path}";`);
    });

    return importStatements.join("\n");
}

/**
 * Serialize a prop value to code string
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function serializeProp(value: any): string {
    if (typeof value === "string") {
        return `"${value.replace(/"/g, '\\"')}"`;
    }
    if (typeof value === "number" || typeof value === "boolean") {
        return String(value);
    }
    if (Array.isArray(value)) {
        const items = value.map(serializeProp).join(", ");
        return `{[${items}]}`;
    }
    if (typeof value === "object" && value !== null) {
        const entries = Object.entries(value)
            .map(([k, v]) => `${k}: ${serializeProp(v)}`)
            .join(", ");
        return `{{ ${entries} }}`;
    }
    return "undefined";
}

/**
 * Generate JSX for a single component instance
 */
function generateComponentJSX(
    instance: ComponentInstance,
    components: ComponentInstance[],
    indent: number = 0
): string {
    const indentStr = "  ".repeat(indent);

    // Find component info
    let componentName = "";
    for (const [, items] of Object.entries(REGISTRY_MAP)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const component = (items as any)[instance.componentId];
        if (component) {
            componentName = component.component.name;
            break;
        }
    }

    if (!componentName) return "";

    // Generate props
    const propEntries = Object.entries(instance.props).filter(
        ([key]) => key !== "children" && key !== "items" && key !== "cards"
    );

    const propsStr = propEntries.length > 0
        ? " " + propEntries.map(([key, value]) => {
            if (key === "className") {
                return `className="${value}"`;
            }
            return `${key}=${serializeProp(value)}`;
        }).join(" ")
        : "";

    // Get children components
    const childComponents = components.filter(c => c.parentId === instance.id);

    // Handle children prop (text content)
    const childrenProp = instance.props.children;
    const hasTextChildren = typeof childrenProp === "string";

    if (childComponents.length === 0 && !hasTextChildren) {
        // Self-closing tag
        return `${indentStr}<${componentName}${propsStr} />`;
    }

    // Opening tag
    let jsx = `${indentStr}<${componentName}${propsStr}>`;

    // Text children
    if (hasTextChildren) {
        jsx += `\n${indentStr}  ${childrenProp}`;
    }

    // Component children
    childComponents.forEach(child => {
        jsx += "\n" + generateComponentJSX(child, components, indent + 1);
    });

    // Closing tag
    jsx += `\n${indentStr}</${componentName}>`;

    return jsx;
}

/**
 * Generate complete React component code
 */
export function generateCode(components: ComponentInstance[]): string {
    if (components.length === 0) {
        return `export default function MyComponent() {\n  return (\n    <div className="p-8">\n      {/* Add components from the sidebar */}\n    </div>\n  );\n}`;
    }

    const imports = generateImports(components);

    // Get root components (no parent)
    const rootComponents = components.filter(c => c.parentId === null);

    // Generate JSX for each root component
    const jsx = rootComponents
        .map(comp => generateComponentJSX(comp, components, 3))
        .join("\n");

    return `${imports}

export default function MyComponent() {
  return (
    <div className="flex gap-4 p-8">
${jsx}
    </div>
  );
}`;
}
