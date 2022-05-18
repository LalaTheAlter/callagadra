import React, { useState } from 'react'
import CalendarGrid from './CalendarGrid'
import MonthPicker from './MonthPicker'

export default function CalendarBox() {
  
  const [month, setMonth] = useState(new Date())

  return (
    <div className='calendarBox'>
      <MonthPicker selectedMonth={month} cbParent={setMonth} />
      <CalendarGrid selectedMonth={month} /> 
    </div>
  )
}
