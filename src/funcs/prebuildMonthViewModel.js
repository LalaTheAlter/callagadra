import { eachDayOfInterval, endOfMonth, format, nextMonday, nextSunday, previousMonday, startOfMonth } from "date-fns"

export default function prebuildMonthViewModel(selectedMonth) {
  const firstDay = startOfMonth(selectedMonth)
  const lastDay = endOfMonth(selectedMonth)

  const monthViewModel = eachDayOfInterval({
    start: previousMonday(firstDay),
    end: nextSunday(lastDay) 
  })

  if(monthViewModel.length < (7 * 6)) {
    monthViewModel.push(...eachDayOfInterval({
      start: nextMonday(lastDay), 
      end: nextSunday(nextSunday(lastDay))
    }))
    // add an additional week to the model if it's too short;
    // improves UI consistency as some month models are 6-weeks long, 
    // while others are only 5-weeks long.
  }

  return monthViewModel.map((date) => format(date, "y_M_d"))

  // ================================
  // MEMORIAL OF BLINDED BRAVERY,
  // REMEMBER THE DATE OF 19.05.2022;
  // NEVER AGAIN DISREGARD 
  // THE DOCS OF LIBRARIES YOU USE
  // ================================
  
  // const monthView = []
  // const year = getYear(selectedDate) 
  // const month = getMonth(selectedDate) + 1

  // const daysBefore = getDay(startOfMonth(selectedDate)) == 0 ? 6 : getDay(startOfMonth(selectedDate)) - 1
  // const daysAfter =  getDay(lastDayOfMonth(selectedDate)) == 0 ? 0 : 7 - getDay(lastDayOfMonth(selectedDate)) 


  // const daysInCurrMonth = getDaysInMonth(selectedDate)
  // const daysInPrevMonth = getDaysInMonth(new Date(
  //   month >= 2 ? year 
  //   : year - 1, 
  //   month >= 2 ? month - 1 
  //   : 12
  // ))
    

  // for (let dayBefore = daysInPrevMonth - daysBefore + 1; dayBefore <= daysInPrevMonth; dayBefore++) {
  //   monthView.push({ 
  //     year: month <= 1 ? year - 1 : year,
  //     month: month <= 1 ? 12 : month - 1, 
  //     day: dayBefore
  //    })
  // }

  // for (let day = 1; day <= daysInCurrMonth; day++) {
  //   monthView.push({ 
  //     year,
  //     month,
  //     day
  //    })
  // }
  
  // for (let dayAfter = 1; dayAfter <= daysAfter; dayAfter++) {
  //   monthView.push({ 
  //     year: month >= 12 ? year + 1 : year,
  //     month: month >= 12 ? 1 : month + 1,
  //     day: dayAfter
  //    })
  // }

  // return monthView
}
