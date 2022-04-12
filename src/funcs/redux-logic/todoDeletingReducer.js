export default function todoDeletingReducer(state = {}, action) {

  const givenTodoID = action.payload

  switch (action.type) {
    case 'DELETE_TODO':
      delete state[givenTodoID]
    // case 'CLEAR_INSTANCES':
      console.log('clearing the instances')

      for (let cluster in state) {
        if (state[cluster].isArray()) { 
          // in our data structure only dates are assigned arrays (to contain multiple todoIDs), 
          // while general todos are contained as objects
          const cleanedArray = state[cluster].filter((ID) => ID !== givenTodoID)
          state[cluster] = cleanedArray
        }
      }

      return state

    default:
      console.log("reached default in todoDeletingReducer func!")
      return state
  }
}