import './CalendarBox.scss'
import React, { useState } from 'react'
import CalendarGrid from './CalendarGrid'
import MonthPicker from './MonthPicker'
import TodoManageMenu from './TodoManageMenu'
import TodoWriteMenu from './TodoWriteMenu'
import ModalOpener from './hocs/ModalOpener'

export default function CalendarBox() {
  
  const [month, setMonth] = useState(new Date())

  return (
    <div className="calendar-box">
      <div className="calendar-box__tool-bar">
        <div className="calendar-box__month-picker">
          <MonthPicker selectedMonth={month} cbParent={setMonth} />
        </div>

        <div className="calendar-box__tool-box">
          <ModalOpener buttonClassName="calendar-box__menu-btn" buttonText="Create new event"> 
              <TodoWriteMenu />
            </ModalOpener>
          <ModalOpener buttonClassName="calendar-box__menu-btn" buttonText="Manage all events">
            <TodoManageMenu />
          </ModalOpener>
        </div>
      </div>
      
      <div className='calendar-box__content'>
        <CalendarGrid selectedMonth={month} /> 
      </div>
    </div>
  )
}
