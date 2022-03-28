import compareTimeIntervalsOfTodos from "./compareTimeIntervalsOfTodos"

export default function loadTodoData(date) {
  let arrayOfIDs = JSON.parse(localStorage.getItem(date))

  if(arrayOfIDs !== null) {
    let loadedTodoData = []

    for (let i = 0; i < arrayOfIDs.length; i++) {
      loadedTodoData.push(JSON.parse(localStorage.getItem(arrayOfIDs[i])))
    }
    
    return loadedTodoData.sort(compareTimeIntervalsOfTodos)
  } else {
    return null
  }
}