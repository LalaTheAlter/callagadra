// reducer that manages specific todos that are assigned to dates (fills the structures with content)

import compareTimeIntervalsOfTodos from "../compareTimeIntervalsOfTodos";

export default function datesReducer(state = {}, action) {
  // const {todoID, date} = {...action.payload}
  // const nextState = {...state}
  // const targetArray = [...state[date]]

  switch (action.type) {
    case 'dates/apply_todo':
      return applyTodoToState(state, action.payload)

    case 'dates/remove_todo':
      return removeTodoFromState(state, action.payload)

    case 'dates/clear_all_instances':
      return clearAllInstancesOfTodo(state, action.payload)
  
    default:
      console.log("reached default in dateSlice!")
      return state;
  }
}

function applyTodoToState(state, payload) {
  const {todoID, date} = payload
  const targetArray = [...state[date]]

  if (!targetArray.includes(todoID)) {
    targetArray.push(todoID).sort(compareTimeIntervalsOfTodos)
  }
  
  return {
    ...state,
    [date]: targetArray
  }
}

function removeTodoFromState(state, payload) {
  const {todoID, date} = payload
  const targetArray = [...state[date]]

  if (targetArray.includes(todoID)) {
    targetArray.splice(targetArray.indexOf(todoID), 1)
  }
  
  return {
    ...state,
    [date]: targetArray
  };
}

function clearAllInstancesOfTodo(state, payload) {
  const todoID = payload
  const nextState = {...state}

  for (let array in state) {
    nextState[array] = state[array].filter((ID) => ID !== todoID)
  }

  return nextState
}