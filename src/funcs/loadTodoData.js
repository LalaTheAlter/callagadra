export default function loadTodoData(array) {

  const loadedArray = [...array]

  for (let i = 0; i < array.length; i++) {
    let { year, month, day} = array[i]
    
    loadedArray[i].content = JSON.parse(localStorage.getItem(`${year}_${month}_${day}`)) 
    // months and days from prebuilded model are indexed in an array-like way
    // getItem returns null if there's no entry
  }
  
  return (
    loadedArray
  )
}
