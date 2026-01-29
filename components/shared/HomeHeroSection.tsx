"use client";
import React, { useRef, useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'

import { useUser } from '@clerk/nextjs';
import { Button } from '../ui/button'
import { ArrowRight, Send } from 'lucide-react'

import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
} from "@/components/ui/input-group"
import { Textarea } from '../ui/textarea'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { AnimatedText } from './AnimatedText'
import { suggestions } from '@/constants'
import { cn } from '@/lib/utils'
import { toast } from 'sonner';
import axios from 'axios';
import { ProjectCreationLoader } from './ProjectCreationLoader';

const HomeHeroSection = () => {
    const { isSignedIn } = useUser();
    const router = useRouter();
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [input, setInput] = useState("");
    const [device, setDevice] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleBtnClick = (name: string, description: string) => {
        if (textareaRef.current) {
            const prompt = `Design a beautiful, modern ui/ux mockup for a ${name.toLowerCase()} with the following features: ${description}. Use clean typography, neumorphic elements, dark/light mode support, and responsive layout.`;
            setInput(prompt);
            textareaRef.current.focus();
        }
    }

    const handleCreateProject = async () => {
        if (!isSignedIn) {
            router.push("/sign-in");
            return;
        }

        if (!input.trim()) {
            toast.error("User input is required");
            textareaRef.current?.focus();
            return;
        }

        if (!device) {
            toast.error("Device type is required!");
            return;
        }

        setIsSubmitting(true);
        try {
            const { data, status } = await axios.post("/api/project", {
                projectId: crypto.randomUUID(),
                input,
                device
            });

            if (status === 201 && data?.success) {
                toast.success(data?.message || 'Project has been added!');
                setInput("");
                router.push(`/projects/${data?.project.id}`);
            }
        } catch (error) {
            console.error("Something went wrong", (error as Error).message);
            toast.error((error as Error).message || "Something went wrong! Try again!")
        } finally {
            setIsSubmitting(false);
        }
        
    }

    if(isSubmitting) return <ProjectCreationLoader />

    return (
        <section className="container py-15 md:py-20 text-center p-4">
            <div className="mx-auto max-w-3xl space-y-8">
                <AnimatedText />
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                    Generate Stunning UI/UX Mockups in Seconds
                </h1>
                <p className="text-xl text-muted-foreground">
                    Transform your ideas into professional designs with our intuitive mockup generator. Powered by AI, built for designers and developers.
                </p>
                <div className="flex justify-center space-x-4">
                    <Button size="lg" asChild>
                        <Link href="/dashboard">Start Creating <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button size="lg" variant="outline">Watch Demo</Button>
                </div>
            </div>
            <div className="grid w-full max-w-3xl mx-auto gap-6 my-10">
                <InputGroup>
                    <Textarea
                        className="flex field-sizing-content min-h-40 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
                        placeholder="Prompt the Mocklify AI for your design..."
                        ref={textareaRef}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    <InputGroupAddon align="block-end">
                        <Select value={device} onValueChange={(value) => setDevice(value)}>
                            <SelectTrigger className="w-45">
                                <SelectValue placeholder="Application Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="website">Website</SelectItem>
                                <SelectItem value="mobile">Mobile App</SelectItem>
                                <SelectItem value="desktop">Desktop App</SelectItem>
                            </SelectContent>
                        </Select>
                        <InputGroupButton onClick={handleCreateProject} className="ml-auto" size="sm" variant="default">
                            <Send />
                        </InputGroupButton>
                    </InputGroupAddon>
                </InputGroup>
            </div>
            <div className="mt-10">
                <p className='text-center text-sm text-muted-foreground mb-6'>Quick start with these Examples</p>
                <div className="flex flex-wrap gap-5 sm:gap-3 w-full max-w-4xl mx-auto">
                    {suggestions.slice(0, 7).map((suggestion, index) => (
                        <button
                            key={index}
                            type='button'
                            className={cn(`flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2 rounded-full bg-card/80 border p-5 text-sm transition-all hover:bg-primary/10 hover:border-primary/40 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 active:scale-90 hover:border-none`)}
                            onClick={() => handleBtnClick(suggestion.name, suggestion.description)}
                        >
                            <span>{suggestion.icon}</span>
                            <span>{suggestion.name}</span>
                        </button>
                    ))}
                </div>
                {suggestions.length > 8 && (
                    <div className="text-center mt-6">
                        <Button variant="ghost" size="sm">
                            See more examples <ArrowRight className="ml-2 h-3.5 w-3.5" />
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default HomeHeroSection