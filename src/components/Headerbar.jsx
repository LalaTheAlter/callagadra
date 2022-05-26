import React from 'react'


export default function Headerbar() {
  return (
    <header className='header'>
      <nav className='header__bar'>
        <img 
          src="/favicon.png" 
          alt="logo"
          className='header__logo'
          width={64}
          height={64}/>

      </nav>
    </header>
  )
}
