import './Mainframe.scss'
import React from 'react'
import CalendarBox from './CalendarBox'
import DateBox from './DateBox'

export default function Mainframe() {


  
  return (
    <main className='mainframe'>
      <div className="mainframe__column">
        <CalendarBox />
      </div>
      <div className="mainframe__column">
        <DateBox />
      </div>
    </main>
  )
}
