import './MonthPicker.scss'
import React from 'react'
import { add, format, sub } from 'date-fns'

export default function MonthPicker({selectedMonth, cbParent}) {

  const selectNextMonth = () => {
    cbParent(add(selectedMonth, {months: 1}))
  }

  const selectPreviousMonth = () => {
    cbParent(sub(selectedMonth, {months: 1}))
  }
  
  return (
    <div className='month-picker'>
      <div className="month-picker__btn-group">
        <button className='month-picker__move-btn' onClick={selectPreviousMonth}>
          {"<"}
        </button>
        <button className='month-picker__move-btn' onClick={selectNextMonth}>
          {">"}
        </button>
      </div>
      
      <h2 className="month-picker__month-label">
        {format(selectedMonth, "MMMM yyyy")}
      </h2>

    </div>
  )
}
