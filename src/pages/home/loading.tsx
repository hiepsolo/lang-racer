import React, { useEffect, useMemo, useState } from 'react'

import { Progress } from '@/components/ui/progress';

const LoadingProgress = () => {
  const [progress, setProgress] = useState(20)
  useEffect(() => {
    const timer = setInterval(() => setProgress(current => {
      if (current >= 80) {
        return current + 2;
      }
      return current + 20;
    }), 100);
    return () => {
      clearInterval(timer)
    }
  }, [])
  
  return (
    <Progress value={progress} className='w-3/5' />
  )
}

export default LoadingProgress