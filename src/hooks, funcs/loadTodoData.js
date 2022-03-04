export default function loadTodoData(array) {

  const loadedArray = [...array]
  
  
 

  for (let i = 0; i < array.length; i++) {
    let { year, month, day} = array[i]
    
    loadedArray[i].content = JSON.parse(localStorage.getItem(`${year}_${month+1}_${day+1}`)) 
    // getItem returns null if there's no entry
  }

  return (
    loadedArray
  )
}
