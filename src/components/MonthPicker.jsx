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
    <div className='monthPicker'>
      <h2>{format(selectedMonth, "MMMM yyyy")}</h2>
      <button onClick={selectPreviousMonth}>{"<"}</button>
      <button onClick={selectNextMonth}>{">"}</button>
    </div>
  )
}
