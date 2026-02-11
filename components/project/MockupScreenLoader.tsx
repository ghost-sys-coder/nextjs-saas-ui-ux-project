import React from 'react'
import { Loader2 } from 'lucide-react'

const MockupScreenLoader = () => {
    return (
        <div className="my-12 flex flex-col items-center justify-center min-h-[60vh]">
            {/* Main loader container */}
            <div className="relative mx-auto scale-90 md:scale-100">
                {/* Device frame (phone style — looks premium and modern) */}
                <div className="w-[320px] h-155 bg-zinc-950 rounded-[52px] p-3 shadow-[0_30px_60px_-15px_rgb(0,0,0,0.5)] relative overflow-hidden border-12 border-zinc-950">

                    {/* Inner screen area */}
                    <div className="relative h-full w-full bg-zinc-900 rounded-[38px] overflow-hidden">

                        {/* Shimmering loading content */}
                        <div className="absolute inset-0 bg-linear-to-br from-zinc-800 via-zinc-900 to-zinc-800">
                            {/* Fake header */}
                            <div className="h-12 bg-zinc-800/80 flex items-center px-6">
                                <div className="w-24 h-3 bg-zinc-700 rounded animate-pulse" />
                            </div>

                            {/* Fake hero / content blocks */}
                            <div className="p-6 space-y-8">
                                {/* Title + subtitle */}
                                <div className="space-y-3">
                                    <div className="h-5 bg-zinc-700 rounded w-4/5 animate-pulse" />
                                    <div className="h-4 bg-zinc-700/70 rounded w-3/5 animate-pulse" />
                                </div>

                                {/* Cards grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="aspect-5/3 bg-zinc-800 rounded-2xl overflow-hidden">
                                        <div className="h-2/3 bg-linear-to-br from-violet-500/20 to-fuchsia-500/20 animate-pulse" />
                                        <div className="h-1/3 p-3 space-y-2">
                                            <div className="h-2.5 bg-zinc-600 rounded w-3/4 animate-pulse" />
                                            <div className="h-2 bg-zinc-700 rounded w-1/2 animate-pulse" />
                                        </div>
                                    </div>
                                    <div className="aspect-5/3 bg-zinc-800 rounded-2xl overflow-hidden animate-pulse">
                                        <div className="h-2/3 bg-linear-to-br from-amber-500/20 to-orange-500/20" />
                                        <div className="h-1/3 p-3 space-y-2">
                                            <div className="h-2.5 bg-zinc-600 rounded w-3/4" />
                                            <div className="h-2 bg-zinc-700 rounded w-1/2" />
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom bar / CTA */}
                                <div className="h-14 bg-zinc-800 rounded-2xl flex items-center px-6">
                                    <div className="h-3 bg-emerald-500/70 rounded w-28 animate-pulse" />
                                    <div className="ml-auto w-9 h-9 rounded-full bg-linear-to-br from-sky-400 to-indigo-500 animate-pulse" />
                                </div>
                            </div>

                            {/* Shimmer overlay (the "magic" part) */}
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_1.8s_infinite] pointer-events-none" />
                        </div>
                    </div>

                    {/* Subtle reflection on device */}
                    <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-white/10 to-transparent pointer-events-none" />
                </div>

                {/* "Generating" badge floating on top-right */}
                <div className="absolute -top-4 -right-4 bg-linear-to-br from-violet-600 to-fuchsia-600 text-white text-xs font-medium px-4 py-1.5 rounded-2xl shadow-xl flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Generating mockup
                </div>
            </div>

            {/* Text + dots */}
            <div className="mt-14 text-center">
                <div className="flex items-center justify-center gap-1.5 mb-4">
                    <div className="w-2 h-2 bg-violet-500 rounded-full animate-bounce [animation-delay:-0.6s]" />
                    <div className="w-2 h-2 bg-fuchsia-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-2 h-2 bg-sky-500 rounded-full animate-bounce" />
                </div>

                <p className="text-xl font-semibold tracking-tight text-zinc-100">Crafting your vision</p>
                <p className="text-sm text-zinc-400 mt-1 max-w-65">
                    Our AI is building a pixel-perfect mockup.<br />
                    Usually takes 15–40 seconds.
                </p>
            </div>
        </div>
    )
}

export default MockupScreenLoader