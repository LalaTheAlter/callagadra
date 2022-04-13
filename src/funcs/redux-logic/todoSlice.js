// reducer that manages unique todos

export default function todosReducer(state = {}, action) {

  switch (action.type) {
    case 'todos/create_todo':
      return enterTodoToState(state, action.payload);

    case 'todos/change_todo':
      return enterTodoToState(state, action.payload);

    case 'todos/delete_todo':
      return deleteTodoFromState(state, action.payload)

    default:
      console.log("reached default in todoSlice!")
      return state;
  }
}

function enterTodoToState(state, payload) {
  const {todoID, ...rest} = payload

  return {
    ...state, 
    [todoID]: {...rest}
  }
}

function deleteTodoFromState(state, payload) {
  const todoID = payload
  const nextState = {...state}
  delete nextState[todoID]

  return nextState
}