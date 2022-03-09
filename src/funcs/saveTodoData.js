export default function saveTodoData(date, startTime, endTime, text) {
  //add a tagname 
  console.log(date, startTime, endTime, text)
  const todoData =  { startTime, endTime, text }
  const oldContent = JSON.parse(localStorage.getItem(date))
  const newContent = JSON.stringify(
    oldContent === null ? [todoData] 
    : [...oldContent, todoData] 
  )
  localStorage.setItem(date, newContent)
  document.dispatchEvent(new Event("localStorageUpdated")) // goes to => calendarGrid
  console.log(localStorage)
}
