import compareTimeIntervalsOfTodos from "./compareTimeIntervalsOfTodos"

export default function loadTodoData(date) {
  let arrayOfIDs = JSON.parse(localStorage.getItem(date))

  if(arrayOfIDs == null) {
    return null
  }

  let loadedTodosArray = []
  for (let i = 0; i < arrayOfIDs.length; i++) {
    loadedTodosArray.push(JSON.parse(localStorage.getItem(arrayOfIDs[i])))
  }
  
  return loadedTodosArray.sort(compareTimeIntervalsOfTodos)
}