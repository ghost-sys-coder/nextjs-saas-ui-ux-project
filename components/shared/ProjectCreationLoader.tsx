"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ProjectCreationLoaderProps {
    className?: string;
    message?: string;
}

export function ProjectCreationLoader({
    className,
    message = "Please wait as we get you setup...",
}: ProjectCreationLoaderProps) {
    return (
        <div
            className={cn(
                "fixed inset-0 z-50 flex items-center justify-center bg-background/40 backdrop-blur-sm transition-all duration-300",
                className
            )}
        >
            <div className="relative flex flex-col items-center gap-6 px-8 py-10 rounded-2xl bg-card/30 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/10 dark:shadow-black/40 max-w-sm w-full text-center">
                {/* Main glass orb with dual rings */}
                <div className="relative h-20 w-20">
                    {/* Outer subtle ring – slow spin */}
                    <div
                        className={cn(
                            "absolute inset-0 rounded-full border-4 border-primary/20 animate-spin",
                            "motion-reduce:animate-none"
                        )}
                        style={{ animationDuration: "3.2s" }}
                    />

                    {/* Inner glowing ring – faster & gradient */}
                    <div
                        className={cn(
                            "absolute inset-1 rounded-full border-4 border-transparent bg-linear-to-r from-primary/60 via-indigo-500/60 to-primary/60 animate-spin",
                            "motion-reduce:animate-none"
                        )}
                        style={{ animationDuration: "1.4s", animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
                    />

                    {/* Center pulse dot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-5 w-5 rounded-full bg-linear-to-br from-primary to-indigo-600 animate-pulse" />
                    </div>
                </div>

                {/* Text */}
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        Creating your project...
                    </h3>
                    <p className="text-sm text-muted-foreground">{message}</p>
                </div>

                {/* Optional subtle progress dots */}
                <div className="flex gap-2">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="h-2 w-2 rounded-full bg-primary/70 animate-bounce"
                            style={{ animationDelay: `${i * 150}ms` }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}