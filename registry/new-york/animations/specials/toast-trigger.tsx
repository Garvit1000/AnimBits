"use client";
import * as React from "react";
import * as motion from "motion/react-client";
import type { Easing } from "motion/react";
import { AnimatedToast } from "./animated-toast";

interface Toast {
    id: number;
    message: string;
    description?: string;
    type?: "default" | "success" | "error" | "info" | "warning";
}

const ToastContext = React.createContext<{
    addToast: (toast: Omit<Toast, "id">) => void;
} | null>(null);

export function useToast() {
    const context = React.useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within ToastProvider");
    }
    return context;
}

export function ToastProvider({
    children,
    maxToasts = 5
}: {
    children: React.ReactNode;
    maxToasts?: number
}) {
    const [toasts, setToasts] = React.useState<Toast[]>([]);
    const nextId = React.useRef(0);

    const addToast = React.useCallback((toast: Omit<Toast, "id">) => {
        const id = nextId.current++;
        setToasts((prev) => {
            const newToasts = [...prev, { ...toast, id }];
            return newToasts.slice(-maxToasts);
        });
    }, [maxToasts]);

    const removeToast = React.useCallback((id: number) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div className="pointer-events-none fixed top-0 right-0 z-[100] flex flex-col items-end p-4">
                <div className="relative">
                    {toasts.map((toast, index) => {
                        // Bottom toast = index 0, top toast = last index
                        // We want top toast fully visible, others slightly behind
                        const fromTop = toasts.length - 1 - index;
                        const isTopToast = fromTop === 0;

                        return (
                            <motion.div
                                key={toast.id}
                                layout
                                className="absolute top-0 right-0"
                                initial={{ opacity: 0, y: -100, scale: 0.95 }}
                                animate={{
                                    y: fromTop * 4,
                                    scale: 1 - fromTop * 0.05,
                                    opacity: isTopToast ? 1 : 0.75,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -20,
                                    scale: 0.9,
                                    transition: { duration: 0.2 }
                                }}
                                transition={{
                                    duration: 0.2,
                                    ease: [0.16, 1, 0.3, 1] as Easing,
                                }}
                                style={{
                                    zIndex: 100 + index,
                                    pointerEvents: isTopToast ? "auto" : "none",
                                }}
                            >
                                <AnimatedToast
                                    message={toast.message}
                                    description={toast.description}
                                    type={toast.type}
                                    duration={4000}
                                    onClose={() => removeToast(toast.id)}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </ToastContext.Provider>
    );
}

export interface ToastTriggerProps {
    buttonText?: string;
    toastMessage?: string;
    toastDescription?: string;
    toastType?: "default" | "success" | "error" | "info" | "warning";
    className?: string;
}

export function ToastTrigger({
    buttonText = "Show Toast",
    toastMessage = "Event has been created",
    toastDescription,
    toastType = "default",
    className,
}: ToastTriggerProps) {
    const context = React.useContext(ToastContext);
    const [showToast, setShowToast] = React.useState(false);
    const [toastKey, setToastKey] = React.useState(0);

    const handleClick = () => {
        if (context) {
            context.addToast({
                message: toastMessage,
                description: toastDescription,
                type: toastType,
            });
        } else {
            setShowToast(true);
            setToastKey((prev) => prev + 1);
        }
    };

    const handleToastClose = () => {
        setShowToast(false);
    };

    const buttonStyles = {
        default: "bg-white text-zinc-900 hover:bg-zinc-100 border border-zinc-300",
        success: "bg-emerald-500 text-white hover:bg-emerald-600",
        error: "bg-red-500 text-white hover:bg-red-600",
        info: "bg-blue-500 text-white hover:bg-blue-600",
        warning: "bg-amber-500 text-white hover:bg-amber-600",
    };

    return (
        <>
            <motion.button
                onClick={handleClick}
                className={`rounded-md px-4 py-2 text-sm font-medium shadow-sm transition-colors ${buttonStyles[toastType]} ${className || ""}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {buttonText}
            </motion.button>

            {!context && showToast && (
                <div className="pointer-events-none fixed top-4 right-4 z-50">
                    <AnimatedToast
                        key={toastKey}
                        message={toastMessage}
                        description={toastDescription}
                        type={toastType}
                        duration={4000}
                        onClose={handleToastClose}
                    />
                </div>
            )}
        </>
    );
}
