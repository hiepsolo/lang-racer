import './Layout.css'

import Header from './Header'
import React from 'react'

export const Layout = () => {
  return (
    <div className='layout w-screen min-h-screen grid grid-rows-3 h-full'>
        <Header />
        <div className='layout-container'>
            <div>Ads</div>
            <div>Content</div>
        </div>
        <div>Footer</div>
    </div>
  )
}
