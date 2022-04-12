// reducer that manages unique todos

export default function todoMakingReducer(state = {}, action) {

  

  switch (action.type) {
    case 'CREATE_TODO':
      
      
      return {
        ...state, 
        [action.payload.todoID]: {...action.payload}
      };

    case 'CHANGE_TODO':
      return {
        ...state, 
        [action.payload.todoID]: {...action.payload}
      };

    default:
      console.log("reached default in todoMakingReducer func!")
      return state;
  }
}