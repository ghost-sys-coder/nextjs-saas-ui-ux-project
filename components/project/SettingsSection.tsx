// components/project/SettingsSection.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Wand2,
    Settings2,
    Layout,
    Palette,
    MonitorSmartphone,
    Sparkles,
    RotateCcw,
    Info,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import ProjectThemes from "./ProjectThemes";
import axios from "axios";


export default function SettingsSection({ projectId }: { projectId: string }) {
    const [prompt, setPrompt] = useState("");
    const [device, setDevice] = useState("desktop");
    const [stylePreset, setStylePreset] = useState("modern");
    const [quality, setQuality] = useState(75);
    const [darkMode, setDarkMode] = useState(true);
    const [autoGenerate, setAutoGenerate] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // get project information
    useEffect(() => { 
        async function fetchProject() {
            setIsLoading(true);
            try {
                const { data } = await axios.get(`/api/projects/${projectId}`); 
                console.log(data?.project);
                setPrompt(data?.project?.userInput ?? "");
            } catch (error) {
                console.error("Failed to retrieve project", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProject();
    }, [projectId]);

    const handleGenerate = () => {
        if (!prompt.trim()) {
            toast.error("Please enter a description or prompt first");
            return;
        }
        console.log({
            prompt, device, stylePreset, quality, darkMode, autoGenerate
        });
    };

    const handleReset = () => {
        setPrompt("");
        setDevice("desktop");
        setStylePreset("modern");
        setQuality(75);
        setDarkMode(true);
        setAutoGenerate(false);
        toast.info("Settings reset to defaults");
    };

    if (!projectId) return;

    if (isLoading) return;

    return (
        <div
            className={cn(
                "w-full md:w-80 lg:w-96 shrink-0 border-r bg-background/80 backdrop-blur-sm",
                "sticky top-0 h-screen overflow-y-auto scrollbar-thin"
            )}
        >
            <div className="p-5 md:p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <Settings2 className="h-5 w-5 text-primary" />
                        <h2 className="text-xl font-semibold tracking-tight">Project Settings</h2>
                    </div>
                    <Badge variant="outline" className="text-xs">
                        New Project
                    </Badge>
                </div>

                <Tabs defaultValue="prompt" className="flex-1 flex flex-col">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="prompt">
                            <Wand2 className="mr-2 h-4 w-4" />
                            Prompt
                        </TabsTrigger>
                        <TabsTrigger value="appearance">
                            <Palette className="mr-2 h-4 w-4" />
                            Appearance
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="prompt" className="flex-1 mt-0 space-y-6">
                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-base">Description / Prompt</CardTitle>
                                <CardDescription>
                                    Describe your UI/UX idea or edit the initial prompt
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Textarea
                                    placeholder="A modern SaaS dashboard with dark mode, neumorphic cards, sidebar navigation, analytics widgets, user profile dropdown..."
                                    className="min-h-45 resize-none"
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                />

                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-1.5 text-muted-foreground">
                                        <Info className="h-3.5 w-3.5" />
                                        <span>Be specific for better results</span>
                                    </div>
                                    <span className="text-muted-foreground">
                                        {prompt.length} / 800
                                    </span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-base">Target Device</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Select value={device} onValueChange={setDevice}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select target device" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="mobile">
                                            <div className="flex items-center gap-2">
                                                <MonitorSmartphone className="h-4 w-4" />
                                                Mobile App
                                            </div>
                                        </SelectItem>
                                        <SelectItem value="tablet">Tablet</SelectItem>
                                        <SelectItem value="desktop">
                                            <div className="flex items-center gap-2">
                                                <Layout className="h-4 w-4" />
                                                Website / Desktop
                                            </div>
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="appearance" className="flex-1 mt-0 space-y-6">
                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-base">Design Style</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Select value={stylePreset} onValueChange={setStylePreset}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select style preset" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="modern">Modern / Clean</SelectItem>
                                        <SelectItem value="minimal">Minimal</SelectItem>
                                        <SelectItem value="neumorphic">Neumorphic</SelectItem>
                                        <SelectItem value="glassmorphism">Glassmorphism</SelectItem>
                                        <SelectItem value="brutalist">Brutalist</SelectItem>
                                        <SelectItem value="material">Material Design</SelectItem>
                                        <SelectItem value="cyberpunk">Cyberpunk</SelectItem>
                                        <SelectItem value="bento">Bento</SelectItem>
                                    </SelectContent>
                                </Select>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-base">Quality & Detail</CardTitle>
                                <CardDescription>
                                    Higher = more detailed but slower
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6 pt-2">
                                <div className="space-y-4">
                                    <div className="flex justify-between text-sm">
                                        <span>Quality</span>
                                        <span>{quality}%</span>
                                    </div>
                                    <Slider
                                        value={[quality]}
                                        onValueChange={([v]) => setQuality(v)}
                                        max={100}
                                        step={5}
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label htmlFor="dark-mode">Prefer Dark Mode</Label>
                                        <p className="text-xs text-muted-foreground">
                                            Most mockups will use dark theme
                                        </p>
                                    </div>
                                    <Switch
                                        id="dark-mode"
                                        checked={darkMode}
                                        onCheckedChange={setDarkMode}
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label htmlFor="auto-generate">Auto-generate on save</Label>
                                        <p className="text-xs text-muted-foreground">
                                            Start generation automatically
                                        </p>
                                    </div>
                                    <Switch
                                        id="auto-generate"
                                        checked={autoGenerate}
                                        onCheckedChange={setAutoGenerate}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <ProjectThemes setStylePreset={setStylePreset} stylePreset={stylePreset} />
                    </TabsContent>
                </Tabs>

                <div className="pt-6 mt-auto border-t space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" onClick={handleReset}>
                            <RotateCcw className="mr-2 h-4 w-4" />
                            Reset
                        </Button>
                        <Button onClick={handleGenerate} disabled={!prompt.trim()} className="px-2">
                            <Sparkles className="h-4 w-4" />
                            Generate Mockup
                        </Button>
                    </div>

                    <Button variant="ghost" size="sm" className="w-full justify-center text-muted-foreground">
                        Save as draft
                    </Button>
                </div>
            </div>
        </div>
    );
}