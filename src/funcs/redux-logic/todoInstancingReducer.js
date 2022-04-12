// reducer that manages specific todos that are assigned to dates (fills the structures with content)

import compareTimeIntervalsOfTodos from "../compareTimeIntervalsOfTodos";

export default function todoInstancingReducer(state = {}, action) {
  const {todoID, date} = action.payload
  const target = state[date]

  switch (action.type) {
    case 'APPLY_TO_DATE':
      if (!target.includes(todoID)) {
        target.push(todoID).sort(compareTimeIntervalsOfTodos)
      }
      console.log(state)
      return state;

    case 'REMOVE_FROM_DATE':
      if (target.includes(todoID)) {
        target.splice(target.indexOf(todoID), 1)
      }
      return state;

    // case 'REMOVE_ALL_INSTANCES':
  
    default:
      console.log("reached default in todoInstancingReducer func!")
      return state;
  }
}