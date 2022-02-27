import React, { useEffect, useState } from 'react'
import buildMonthView from '../hooks, funcs/buildMonthView';
import CalendarTile from './CalendarTile'



export default function CalendarBox({ selectedMonth }) {
  const [monthView, setMonthView] = useState([])
  
  const handleStorageUpdates = () => {
    setMonthView(buildMonthView(selectedMonth))
  }
  
  useEffect(() => {   
    document.addEventListener("localStorageUpdated", handleStorageUpdates)
    return () => {
      document.removeEventListener("localStorageUpdated", handleStorageUpdates)
    }
  })
  
  useEffect(() => {
    setMonthView(buildMonthView(selectedMonth))
  }, [selectedMonth])
  

  



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
