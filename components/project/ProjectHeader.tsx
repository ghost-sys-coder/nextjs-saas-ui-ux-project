import { Save, Sparkles } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const ProjectHeader = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-2xl supports-backdrop-filter:bg-background/60 px-4 py-2">
            <div className='flex justify-between items-center gap-4 container'>
                <Link href={"/"} className='flex items-center space-x-2'>
                    <Sparkles className='h-15 w-15 text-primary' />
                    <span className="font-bold text-xl">Mocklify</span>
                </Link>
                <Button><Save /> Save</Button>
            </div>
        </header>
    )
}

export default ProjectHeader