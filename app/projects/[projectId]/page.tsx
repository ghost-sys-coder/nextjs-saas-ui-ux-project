import React from 'react'
import ProjectHeader from '@/components/project/ProjectHeader'
import SettingsSection from '@/components/project/SettingsSection'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Sparkles } from 'lucide-react';
import { getProject } from '@/lib/actions/projects';
import MockupSection from '@/components/project/MockupSection';
import { ProjectProvider } from '@/context/ProjectContext';

const page = async ({ params }: { params: Promise<{ projectId: string }> }) => {
  const { projectId } = await params;

  // fetch project 
  const result = await getProject(projectId);

  if (!result.success) {
    return (
      <div className='min-h-screen bg-linear-to-b from-background to-muted/50 flex items-center justify-center p-6'>
        <Alert variant="destructive" className="max-w-md">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{result.message}</AlertDescription>
        </Alert>
      </div>
    )
  }

  if (!result.data) return;

  return (
    <div className='min-h-screen bg-linear-to-b from-background to-muted/50'>
      <ProjectHeader />

      <ProjectProvider>
        <div className="flex gap-4">
        <SettingsSection project={result?.data} initialScreenConfig={result?.screenConfig} />

        <main className="flex-1 p-6 md:p-4 lg:p-6">
          <Alert className="max-w-2xl mx-auto">
            <Sparkles className="h-5 w-5" />
            <AlertTitle>Ready to create your first mockup</AlertTitle>
            <AlertDescription className="mt-2">
              Refine your prompt and settings on the left, then click{" "}
              <span className="font-medium">Generate Mockup</span>.
            </AlertDescription>
          </Alert>

          {/* Future: generated mockups / versions list will appear here */}
          <MockupSection screenConfig={result?.screenConfig} />
        </main>
      </div>
      </ProjectProvider>
    </div>
  )
}

export default page