"use client";
import React from 'react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="relative flex flex-col items-center gap-6 px-6 text-center">
        {/* Modern dual-ring spinner – very popular in 2025 */}
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-[spin_2.2s_linear_infinite]" />
          <div className="absolute inset-2 rounded-full border-4 border-t-blue-600 border-r-transparent border-b-blue-600 border-l-transparent animate-[spin_1s_cubic-bezier(0.4,0,0.2,1)_infinite]" />
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Setting up your experience
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-sm">
            Almost there... just finalizing your account
          </p>
        </div>

        {/* Very subtle pulsing dots – optional, feels alive without being distracting */}
        <div className="flex gap-3 mt-2">
          <div className="h-2.5 w-2.5 rounded-full bg-blue-500 animate-[bounce_1.4s_infinite]" style={{ animationDelay: '0ms' }} />
          <div className="h-2.5 w-2.5 rounded-full bg-blue-500 animate-[bounce_1.4s_infinite]" style={{ animationDelay: '0.2s' }} />
          <div className="h-2.5 w-2.5 rounded-full bg-blue-500 animate-[bounce_1.4s_infinite]" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
}