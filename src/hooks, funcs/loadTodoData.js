export default function loadTodoData(array) {

  const loadedArray = [...array]
  
  const todoData = JSON.parse(localStorage.getItem("TodosData"))
  console.log(todoData)

  for (let i = 0; i < array.length; i++) {
    let { year, month, day} = array[i]
    
    loadedArray[i].content = 
      todoData[year]?.[month]?.[day] ? todoData[year][month][day] : null
  }

  return (
    loadedArray
  )
}
