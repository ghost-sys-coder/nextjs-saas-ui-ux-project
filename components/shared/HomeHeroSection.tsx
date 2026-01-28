import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const HomeHeroSection = () => {
    return (
        <section className="container py-20 md:py-32 text-center p-4">
            <div className="mx-auto max-w-3xl space-y-8">
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
            <div className="mt-16 relative h-64 md:h-96 rounded-b-xl overflow-hidden border shadow-lg">
                {/* Placeholder for hero image or demo screenshot */}
                <Image
                    src="/assets/landing-image2.png" // Replace with actual asset
                    alt="Mockup Generator Demo"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </section>
    )
}

export default HomeHeroSection