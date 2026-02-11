"use client";

import React, { createContext, SetStateAction, useContext, useState } from "react";

interface ProjectContextValue {
    isGenerating: boolean;
    setIsGenerating: React.Dispatch<SetStateAction<boolean>>;
}

export const ProjectContext = createContext<ProjectContextValue | null>(null);

export const ProjectProvider = ({ children } : {children: React.ReactNode}) => {
    const [isGenerating, setIsGenerating] = useState(false);

    return (
        <ProjectContext.Provider value={{isGenerating, setIsGenerating}}>
            {children}
        </ProjectContext.Provider>
    )
}

export const useProject = () => {
    const context = useContext(ProjectContext);

    if (!context) {
        throw new Error("useProject must be used inside ProjectProvider");
    }

    return context;
}