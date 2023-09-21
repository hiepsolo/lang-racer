import React, { useEffect, useState } from 'react';
import { formatTimemmss, getRandomCar } from '../../lib/utils';

import { Button } from '@/components/ui/button';
import LoadingProgress from './loading';

type RaceProps = {
  leaveRace: () => void;
};

const Race = ({ leaveRace }: RaceProps) => {
  const [isLoadingGame, setIsLoadingGame] = useState(false);
  const [isStarting, setIsStarting] = useState(false);
  const [countDown, setCountDown] = useState(15);
  const [imgCar, setImgCar] = useState('');

  const makeNewGame = () => {
    console.log('make new game');
  };

  useEffect(() => {
    setIsLoadingGame(true);

    const timer = setInterval(() => {
      setCountDown((prev) => {
        if (prev === 0) {
          // TODO Race starting
          setIsStarting(true);
          return 120;
        }
        return prev - 1;
      });
    }, 1000);

    setTimeout(() => {
      setIsLoadingGame(false);
    }, 1000);

    setImgCar(`/icons/car-${getRandomCar()}.png`)

    return () => {
      clearInterval(timer);
    };
  }, []);

  const gameTitle = isStarting ? (
    <span className='text-xl font-medium text-green-600'>Goo!!!</span>
  ) : (
    <span className={`text-xl font-medium ${countDown < 5 ? 'text-amber-500' : ''}`}>Game starts in</span>
  );
  const countdownText = isStarting ? formatTimemmss(countDown) : countDown;

  return (
    <div className='max-w-4xl w-full flex justify-center shadow-md py-10 px-6 rounded-md'>
      {isLoadingGame ? (
        <div className='flex flex-col w-full items-center gap-3'>
          <div className='flex items-baseline gap-5'>
            <p className='text-lg'>Game is loading</p>
            <div className='dot-flashing'></div>
          </div>
          <LoadingProgress />
        </div>
      ) : (
        <div className='w-full flex flex-col items-start gap-4'>
          <div className='w-full flex items-center gap-3 border-b-slate-400 border-b pb-4'>
            <span className='text-xl font-medium'>{gameTitle}</span>
            <span className='text-xl font-bold'>{countdownText}</span>
          </div>
          <div className='flex w-full flex-col items-start relative border-b-2 border-b-neutral-200 border-dashed'>
            <div>
              <img src={imgCar} className='h-16' />
            </div>
            <span className='absolute -top-1 left-0 text-md font-medium'>(You)</span>
          </div>
          <div className='w-full flex items-center justify-between'>
            <Button variant='default' onClick={makeNewGame}>
              Race again
            </Button>
            <Button variant='destructive' onClick={leaveRace}>
              Leave race
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Race;
