import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const HowItWorks = () => {
    return (
        <section className="px-4 bg-muted/50 py-14 md:py-20" id='how-it-works'>
            <div className="container">
                <div className="mx-auto max-w-3xl text-center space-y-8 mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
                    <p className="text-xl text-muted-foreground">Simple steps to bring your ideas to life.</p>
                </div>
                <Tabs defaultValue="step1" className="mx-auto max-w-4xl">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="step1">Step 1</TabsTrigger>
                        <TabsTrigger value="step2">Step 2</TabsTrigger>
                        <TabsTrigger value="step3">Step 3</TabsTrigger>
                    </TabsList>
                    <TabsContent value="step1" className="mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Describe Your Idea</CardTitle>
                                <CardDescription>Input your UI/UX requirements via text or upload a sketch.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                {/* Placeholder image */}
                                <div className="h-48 rounded-md bg-muted" />
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="step2" className="mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Generate Mockup</CardTitle>
                                <CardDescription>Our AI processes your input and creates a polished mockup.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="h-48 rounded-md bg-muted" />
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="step3" className="mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Customize & Export</CardTitle>
                                <CardDescription>Refine the design and export in your preferred format.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="h-48 rounded-md bg-muted" />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}

export default HowItWorks