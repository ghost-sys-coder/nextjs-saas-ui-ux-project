import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Menu, Sparkles } from 'lucide-react'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'

const HomepageMobileNavbar = () => {
    return (
        <Sheet>
            <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-75 sm:w-100 p-4">
                <SheetHeader className="mb-6">
                    <SheetTitle className="flex items-center gap-2 text-xl">
                        <Sparkles className="h-5 w-5 text-primary" />
                        Mocklify
                    </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-4 mt-8">
                    <Link
                        href="#features"
                        className="text-lg font-medium transition-colors hover:text-primary"
                    >
                        Features
                    </Link>
                    <Link
                        href="#how-it-works"
                        className="text-lg font-medium transition-colors hover:text-primary"
                    >
                        How It Works
                    </Link>
                    <Link
                        href="#pricing"
                        className="text-lg font-medium transition-colors hover:text-primary"
                    >
                        Pricing
                    </Link>

                    <div className="mt-8 flex flex-col gap-3">
                        <SignedOut>
                            <SignInButton mode="modal">
                                <Button variant="outline" className="w-full justify-start">
                                    Log In
                                </Button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <Button className="w-full justify-start">
                                <Link href="/dashboard">Get Started</Link>
                            </Button>
                        </SignedIn>
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default HomepageMobileNavbar