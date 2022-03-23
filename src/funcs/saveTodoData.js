
import compareTimeIntervalsOfTodos from "./compareTimeIntervalsOfTodos"

export default function saveTodoData(date, startTime, endTime, text) {
  //add a tagname 
  console.log(date, startTime, endTime, text)

  // console.log(compareTimeIntervals(startTime, endTime))

  const todoData =  { startTime, endTime, text }
  const oldContent = JSON.parse(localStorage.getItem(date))
  const newContent = JSON.stringify(
    oldContent === null ? [todoData] 
    : 
    [...oldContent, todoData].sort(compareTimeIntervalsOfTodos) 
  )
  console.log(newContent)
  localStorage.setItem(date, newContent)
  document.dispatchEvent(new Event("localStorageUpdated")) // goes to => calendarGrid
  console.log(localStorage)
}
