import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import Race from './race';

const Home = () => {
  const [isStarted, setIsStarted] = useState(false);
  
  const startGame = () => {
    setIsStarted(true)
  }

  const leaveRace = () => {
    setIsStarted(false)
  }

  return (
    <div className='flex justify-center'>
      {!isStarted && <Button size="lg" variant="default" className='text-lg h-12' onClick={startGame}>Start a game</Button>}
      {isStarted && (<Race leaveRace={leaveRace} />)}
    </div>
  )
}

export default Home