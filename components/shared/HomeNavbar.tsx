import React from 'react'
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import HomepageMobileNavbar from './HomepageMobileNavbar';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';

const links = [
    { url: "features", urlText: "Features" },
    { url: "how-it-works", urlText: "How it works" },
    { url: "pricing", urlText: "Pricing" }
]


const HomeNavbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 p-4">
            <div className="flex gap-4 justify-between items-center h-16 container">
                <Link href="/" className='flex items-center space-x-2'>
                    <Sparkles className='h-16 w-16 text-primary' />
                    <span className='font-bold text-xl'>Mocklify</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    {links.map((link) => (
                        <Link
                            key={link.url}
                            href={`#${link.url}`}
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            {link.urlText}
                        </Link>
                    ))}
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button variant={"outline"}>Login</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <Button><Link href={"/dashboard"}>Get Started</Link></Button>
                    </SignedIn>
                </nav>

                <HomepageMobileNavbar />
            </div>
        </header>
    )
}

export default HomeNavbar