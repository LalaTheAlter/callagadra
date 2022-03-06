import { getDay, getDaysInMonth, getMonth, getYear, lastDayOfMonth, startOfMonth } from "date-fns"

export default function prebuildMonthViewModel(selectedDate) {
  
  const monthView = []
  const year = getYear(selectedDate) 
  const month = getMonth(selectedDate) + 1

  const daysBefore = getDay(startOfMonth(selectedDate)) == 0 ? 6 : getDay(startOfMonth(selectedDate)) - 1
  const daysAfter =  getDay(lastDayOfMonth(selectedDate)) == 0 ? 0 : 7 - getDay(lastDayOfMonth(selectedDate)) 


  const daysInCurrMonth = getDaysInMonth(selectedDate)
  const daysInPrevMonth = getDaysInMonth(new Date(
    month >= 2 ? year 
    : year - 1, 
    month >= 2 ? month - 1 
    : 12
  ))
    

  for (let dayBefore = daysInPrevMonth - daysBefore + 1; dayBefore <= daysInPrevMonth; dayBefore++) {
    monthView.push({ 
      year: month <= 1 ? year - 1 : year,
      month: month <= 1 ? 12 : month - 1, 
      day: dayBefore
     })
  }

  for (let day = 1; day <= daysInCurrMonth; day++) {
    monthView.push({ 
      year,
      month,
      day
     })
  }
  
  for (let dayAfter = 1; dayAfter <= daysAfter; dayAfter++) {
    monthView.push({ 
      year: month >= 12 ? year + 1 : year,
      month: month >= 12 ? 1 : month + 1,
      day: dayAfter
     })
  }
  
  return (
    monthView
  )
}
