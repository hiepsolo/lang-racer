import { Link } from 'react-router-dom';
import React from 'react';

const Left = () => {
  return (
    <div className='h-full flex items-center gap-16'>
      <Link to="/" className='text-2xl font-bold'>Lang Racer</Link>
      <div className='flex gap-6 items-center'>
        <a className=' hover:text-gray-500 transition-all' href="https://discord.gg/dVzyacdg" target='_blank'>Discord</a>
        <Link className='hover:text-gray-500 transition-all' to={"/about"}>About</Link>
      </div>
    </div>
  );
};

export default Left;
