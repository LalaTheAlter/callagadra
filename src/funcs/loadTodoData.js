import compareTimeIntervalsOfTodos from "./compareTimeIntervalsOfTodos"

export default function loadTodoData(array) {

  const loadedArray = [...array]

  for (let i = 0; i < array.length; i++) {
    let { year, month, day} = array[i]
    let date = `${year}_${month}_${day}`
    let storedContent = (JSON.parse(localStorage.getItem(date))) 
     // getItem returns null if there's no entry
    if(storedContent) storedContent.sort(compareTimeIntervalsOfTodos)

    loadedArray[i].content = storedContent
    // months and days from prebuilded model are indexed in an array-like way
   
  }
  
  return (
    loadedArray
  )
}
