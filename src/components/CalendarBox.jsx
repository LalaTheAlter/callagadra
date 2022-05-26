import React, { useState } from 'react'
import CalendarGrid from './CalendarGrid'
import MonthPicker from './MonthPicker'
import TodoManageMenu from './TodoManageMenu'
import TodoWriteMenu from './TodoWriteMenu'
import ModalOpener from '../hocs/ModalOpener'

export default function CalendarBox() {
  
  const [month, setMonth] = useState(new Date())

  return (
    <div className="calendar-box">
      <div className="calendar-box__tool-box">
        <MonthPicker selectedMonth={month} cbParent={setMonth} />
        <ModalOpener buttonClassName="header-bar__menu-btn" buttonText="Create new event"> 
            <TodoWriteMenu />
          </ModalOpener>
        <ModalOpener buttonClassName="header-bar__menu-btn" buttonText="Manage all events">
          <TodoManageMenu />
        </ModalOpener>
      </div>
      <div className='calendar-box__content-box'>
        <CalendarGrid selectedMonth={month} /> 
      </div>
    </div>
  )
}
