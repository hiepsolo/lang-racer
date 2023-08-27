import './index.css'

import Left from './Left'
import React from 'react'
import Right from './Right'

const Header = () => {
  return (
    <header className='header px-4 flex justify-between items-center h-16 border-y shadow-md'>
       <Left /> 
       <Right />
    </header>
  )
}

export default Header