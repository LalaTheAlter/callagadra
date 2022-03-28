
import loadTodoData from "./loadTodoData"

export default function fillInTodosData(array) {

  const loadedArray = [...array]

  for (let i = 0; i < array.length; i++) {
    let { year, month, day} = array[i]
    let date = `${year}_${month}_${day}`

    loadedArray[i].content = loadTodoData(date)
    // months and days from prebuilded model are indexed in an array-like way
   
  }
  
  return (
    loadedArray
  )
}
