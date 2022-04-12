import React, { useEffect, useState } from 'react'
import prebuildMonthViewModel from '../funcs/prebuildMonthViewModel'
import TodoTile from './TodoTile'



export default function CalendarGrid({ selectedMonth }) {

  const [monthView, setMonthView] = useState([])

  const handleStorageUpdate = () => {
    setMonthView(monthView)
  }

  const handleMonthUpdate = () => {
    setMonthView(prebuildMonthViewModel(selectedMonth))
  }

  useEffect(
    handleMonthUpdate, 
    [selectedMonth]
  )
  
  useEffect(() => {   
    document.addEventListener("localStorageUpdated", handleStorageUpdate) // recieved from <= saveTodoData.js
    return () => {
      document.removeEventListener("localStorageUpdated", handleStorageUpdate) // recieved from <= saveTodoData.js
    }
  })
  

  return (
    <div
      tabIndex={0} 
      className='calendarGrid'>
      {
      monthView.map(({year, month, day}) => {
        return (
          <TodoTile 
            key={`${year}_${month}_${day}`} 
            year={year}
            month={month}
            day={day}
            />)
      })
      }
    </div>
  );
}
