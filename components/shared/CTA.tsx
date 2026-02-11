"use client";
import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const CTA = () => {
    const [email, setEmail] = useState("");
    const handleSubmit = async () => {

    }


    return (
        <section className="bg-primary text-primary-foreground py-20 md:py-32 px-4">
            <div className="container text-center space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">Ready to Revolutionize Your Design Process?</h2>
                <p className="text-xl">Sign up for early access and be the first to try FrameFlow.</p>
                <form onSubmit={handleSubmit} className="mx-auto max-w-md flex gap-2 flex-col sm:flex-row space-x-2">
                    <div className="flex-1">
                        <Label htmlFor="email" className="sr-only">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <Button variant={"secondary"} type="submit">Join Waitlist</Button>
                </form>
            </div>
        </section>
    )
}

export default CTA
