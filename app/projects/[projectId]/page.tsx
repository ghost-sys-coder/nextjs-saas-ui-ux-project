import React from 'react'
import ProjectHeader from '@/components/project/ProjectHeader'
import SettingsSection from '@/components/project/SettingsSection'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Sparkles } from 'lucide-react';

const page = async () => {

  return (
    <div className='min-h-screen bg-linear-to-b from-background to-muted/50'>
      <ProjectHeader />

      <div className="flex gap-4">
        <SettingsSection />

        <main className="flex-1 p-6 md:p-8 lg:p-10">
          <Alert className="max-w-2xl mx-auto">
            <Sparkles className="h-5 w-5" />
            <AlertTitle>Ready to create your first mockup</AlertTitle>
            <AlertDescription className="mt-2">
              Refine your prompt and settings on the left, then click{" "}
              <span className="font-medium">Generate Mockup</span>.
            </AlertDescription>
          </Alert>

          {/* Future: generated mockups / versions list will appear here */}
        </main>
      </div>
    </div>
  )
}

export default page