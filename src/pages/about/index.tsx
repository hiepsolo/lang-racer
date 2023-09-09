import './index.css'

import { BsDiscord, BsYoutube } from "react-icons/bs";

import { AiOutlineMail } from "react-icons/ai";
import React from 'react';

const About = () => {
  return <div className='w-full about flex flex-col gap-6'>
      <p className='text-2xl mb-4'>Hello guys, welcome to Lang Racer.</p>
      <p className='leading-7'>
        🚴‍♂️📚🕹️ Hi there! I always use typeracer.com to relax and improve my typing speed. But while typing, many new words come and take my time to translate. 🕰️ Then, I think: why don't I create my own game to relax and learn English vocabulary at the same time? 💡 So, if you use a keyboard in your full-time job and want to learn a new language, that's the perfect opportunity for you! 🌍🎮
      </p>
      <p className='leading-7'>🚀 It's evolving and some exciting new features should come later. Your feedback is very meaningful to me, as it helps me make it even better. Together, we can embark on this journey to learn a new language and support each other along the way. 🤝📈</p>
      <p className='leading-7'>🙌 Thank you for being a part of this adventure! Thank you for being a part of this adventure!</p>
      <hr className='mt-8 mb-4'/>
      <div className='flex gap-3'>
        <a href="https://discord.gg/dVzyacdg" target='_blank'>
          <BsDiscord className='text-3xl text-blue-800 hover:text-blue-600 hover:cursor-pointer transition-all'/>
        </a>
        <a href="mailto:hoanghiep2004hy@gmail.com">
          <AiOutlineMail className='text-3xl text-blue-800 hover:text-blue-600 hover:cursor-pointer transition-all' />
        </a>
        <a href="https://youtube.com/hiepsolo" target='_blank'>
          <BsYoutube className='text-3xl text-red-600 hover:text-red-500 hover:cursor-pointer transition-all'/>
        </a>
      </div>
    </div>;
};

export default About;
