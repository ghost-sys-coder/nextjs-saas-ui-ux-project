import React, { SetStateAction } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { themeOptions } from '@/constants';
import { cn } from '@/lib/utils';

interface ProjectThemesProp {
    stylePreset: string;
    setStylePreset: React.Dispatch<SetStateAction<string>>;
}

const ProjectThemes: React.FC<ProjectThemesProp> = ({ setStylePreset, stylePreset }) => {
  return (
    <Card>
  <CardHeader className="pb-3">
    <CardTitle className="text-base">Premade Themes</CardTitle>
    <CardDescription>
      Choose a starting aesthetic — you can still customize later
    </CardDescription>
  </CardHeader>
  <CardContent>
    <div className="grid grid-cols-2 gap-4">
      {themeOptions.map((theme) => (
        <button
          key={theme.value}
          type="button"
          onClick={() => setStylePreset(theme.value)}
          className={cn(
            "group relative flex flex-col items-center gap-3 rounded-lg border p-4 text-center transition-all",
            "hover:border-primary/50 hover:shadow-md active:scale-[0.98]",
            stylePreset === theme.value 
              ? "border-primary ring-2 ring-primary/30 bg-primary/5" 
              : "border-border bg-card/50 hover:bg-card"
          )}
        >
          {/* Visual preview – simple colored shape or emoji/icon */}
          <div 
            className={cn(
              "h-16 w-16 rounded-xl flex items-center justify-center text-3xl shadow-sm transition-transform group-hover:scale-105",
              theme.previewBg
            )}
          >
            {theme.icon}
          </div>

          <div className="space-y-1">
            <p className="font-medium leading-tight">{theme.label}</p>
            <p className="text-xs text-muted-foreground line-clamp-2">
              {theme.description}
            </p>
          </div>

          {/* Selected indicator */}
          {stylePreset === theme.value && (
            <div className="absolute -top-1.5 -right-1.5 rounded-full bg-primary p-1 text-primary-foreground">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </button>
      ))}
    </div>
  </CardContent>
</Card>
  )
}

export default ProjectThemes