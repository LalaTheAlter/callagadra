export default function saveTodoData(date, time, text) {

  localStorage.setItem(date, JSON.stringify({ time, text }))
  document.dispatchEvent(new Event("localStorageUpdated")) // goes to => calendarGrid
  console.log(localStorage)
}
