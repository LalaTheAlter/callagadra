export default function applyTodoToDate(date, todoID) {

  const oldContent = JSON.parse(localStorage.getItem(date))

  const newContent = JSON.stringify(
    oldContent === null ? [todoID] 
    : 
    [...oldContent, todoID]
  )
  localStorage.setItem(date, newContent)
  document.dispatchEvent(new Event("localStorageUpdated")) // goes to => calendarGrid
}