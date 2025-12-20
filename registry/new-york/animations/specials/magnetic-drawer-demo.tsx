"use client";

import { useState } from "react";
import { MagneticDrawer } from "./magnetic-drawer";
import { Settings, Bell, User, Lock, Palette, Globe } from "lucide-react";

export default function MagneticDrawerDemo() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
            <button
                onClick={() => setOpen(true)}
                className="rounded-full bg-neutral-900 px-8 py-3 font-medium text-white shadow-lg transition-transform hover:scale-105 dark:bg-white dark:text-neutral-900"
            >
                Open Magnetic Drawer
            </button>

            <MagneticDrawer
                open={open}
                onOpenChange={setOpen}
                snapPoints={[0.3, 0.6, 0.9]}
            >
                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold">Settings</h2>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            Drag to snap to different heights
                        </p>
                    </div>

                    <div className="space-y-2">
                        <SettingItem icon={<User />} title="Profile" description="Manage your account" />
                        <SettingItem icon={<Bell />} title="Notifications" description="Configure alerts" />
                        <SettingItem icon={<Lock />} title="Privacy" description="Security settings" />
                        <SettingItem icon={<Palette />} title="Appearance" description="Theme and colors" />
                        <SettingItem icon={<Globe />} title="Language" description="Region and language" />
                        <SettingItem icon={<Settings />} title="Advanced" description="Developer options" />
                    </div>

                    <div className="rounded-lg bg-neutral-100 p-4 dark:bg-neutral-800">
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            💡 <strong>Tip:</strong> Swipe quickly to jump between snap points, or drag slowly for precise control.
                        </p>
                    </div>
                </div>
            </MagneticDrawer>
        </div>
    );
}

function SettingItem({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="flex items-center gap-4 rounded-lg border border-neutral-200 bg-white p-4 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
                {icon}
            </div>
            <div className="flex-1">
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{description}</p>
            </div>
        </div>
    );
}
