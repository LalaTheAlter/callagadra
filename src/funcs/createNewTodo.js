
import compareTimeIntervalsOfTodos from "./compareTimeIntervalsOfTodos"

export default function createNewTodo(date, startTime, endTime, text) {
  //add a tagname 
  console.log(date, startTime, endTime, text)
  
  const todoData =  { startTime, endTime, text }
  const oldContent = JSON.parse(localStorage.getItem(date))
  const newContent = JSON.stringify(
    oldContent === null ? [todoData] 
    : 
    [...oldContent, todoData]
  )
  console.log(newContent)
  localStorage.setItem(date, newContent)
  document.dispatchEvent(new Event("localStorageUpdated")) // goes to => calendarGrid
  console.log(localStorage)
}
