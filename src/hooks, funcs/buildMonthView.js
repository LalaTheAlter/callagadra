import { getDay, getDaysInMonth, getMonth, getYear, lastDayOfMonth, startOfMonth } from "date-fns"
import loadTodoData from "./loadTodoData"


export default function buildMonthView(selectedDay) {
  
  const year = getYear(selectedDay) 
  const month = getMonth(selectedDay)

  const daysBefore = getDay(startOfMonth(selectedDay)) == 0 ? 6 : getDay(startOfMonth(selectedDay)) - 1
  const daysAfter =  getDay(lastDayOfMonth(selectedDay)) == 0 ? 0 : 7 - getDay(lastDayOfMonth(selectedDay)) 


  const daysInCurrMonth = getDaysInMonth(selectedDay)
  const daysInPrevMonth = getDaysInMonth(new Date(
    month >= 1 ? year 
    : year - 1, 
    month >= 1 ? month - 1 
    : 11
  ))
    
  const monthView = []

  for (let dayBefore = daysInPrevMonth - daysBefore; dayBefore < daysInPrevMonth; dayBefore++) {
    monthView.push({ 
      year: month < 1 ? year - 1 : year,
      month: month < 1 ? 11 : month - 1,
      day: dayBefore
     })
  }

  for (let day = 0; day < daysInCurrMonth; day++) {
    monthView.push({ 
      year,
      month,
      day
     })
  }
  
  for (let dayAfter = 0; dayAfter < daysAfter; dayAfter++) {
    monthView.push({ 
      year: month > 10 ? year + 1 : year,
      month: month > 10 ? 0 : month + 1,
      day: dayAfter
     })
  }

  return (
    loadTodoData(monthView)
  )
}
