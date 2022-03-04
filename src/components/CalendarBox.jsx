import React, { useEffect, useState } from 'react'
import prebuildMonthView from '../hooks, funcs/prebuildMonthView'
import loadTodoData from "../hooks, funcs/loadTodoData"
import CalendarTile from './CalendarTile'



export default function CalendarBox({ selectedMonth }) {
  const [monthView, setMonthView] = useState([])
  
  const handleStorageUpdates = () => {
    setMonthView(loadTodoData(prebuildMonthView(selectedMonth)))
  }

  useEffect(handleStorageUpdates, [selectedMonth])
  
  useEffect(() => {   
    document.addEventListener("localStorageUpdated", handleStorageUpdates)
    return () => {
      document.removeEventListener("localStorageUpdated", handleStorageUpdates)
    }
  })
  

  return (
    <div className='calendarBox'>
      {
      monthView.map((el) => {
        return (<CalendarTile 
          key={`${el.year}_${el.month}_${el.day}`} 
          day={el.day}
          content={el.content}
          />)
      })
      }
    </div>
  );
}
