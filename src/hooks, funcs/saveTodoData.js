export default function saveTodoData(time, text) {

  localStorage.setItem("2022_3_1", JSON.stringify({ time, text }))
  document.dispatchEvent(new Event("localStorageUpdated"))
}
