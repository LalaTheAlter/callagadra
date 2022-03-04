export default function saveTodoData(time, text) {

  localStorage.setItem("TodosData",  JSON.stringify({ 2022: {2: {25: {time, text}}}}))
  document.dispatchEvent(new Event("localStorageUpdated"))
}
