"use client";
import React from 'react'
import { ScreenConfig } from '@/db/schema'
import { useProject } from '@/context/ProjectContext';
import MockupScreenLoader from './MockupScreenLoader';

interface MockupSectionProps {
    screenConfig: ScreenConfig[];
}

const MockupSection: React.FC<MockupSectionProps> = ({ screenConfig }) => {
  const { isGenerating } = useProject();
  // console.log({ screenConfig });
  
  if (isGenerating) return <MockupScreenLoader />
  
  return (
    <div className='my-3 py-4 px-0'>MockupSection</div>
  )
}

export default MockupSection