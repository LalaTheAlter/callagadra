import React, { useState } from 'react'
import CalendarGrid from './CalendarGrid'
import { add, sub } from 'date-fns'

export default function CalendarBox() {

  const [month, setMonth] = useState(new Date())

  const selectNextMonth = () => {
    setMonth(add(month, {months: 1}))
  }

  const selectPreviousMonth = () => {
    setMonth(sub(month, {months: 1}))
  }

  return (
    <div className='calendarBox'>
      <div className='monthPicker'>
        <h2>{month.toDateString()}</h2>
        <button onClick={selectPreviousMonth}>{"<"}</button>
        <button onClick={selectNextMonth}>{">"}</button>
      </div>
      <CalendarGrid selectedMonth={month} /> 
    </div>
  )
}
