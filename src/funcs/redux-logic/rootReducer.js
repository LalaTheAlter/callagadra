
const initialState = { 
  todos: {}, 
  dates: {}
}

export default function rootReducer({todos, dates} = initialState, action) {
  switch (action.type) {
    case 'CREATE': // dispatch({..., [todoObj, dateString]})
      return {
        todos: writeTodo(todos, action.payload),
        dates: applyTodo(dates, action.payload)
      }

    case 'INSERT': // dispatch({..., [todoObj, dateString]})
      return {
        todos,
        dates: applyTodo(dates, action.payload)
      }

    case 'CHANGE': // dispatch({..., [todoObj, dateString]})
      return {
        todos: writeTodo(todos, action.payload),
        dates
      };

    case 'REMOVE': // dispatch({..., [todoID, dateString]})
      return {
        todos,
        dates: removeTodo(dates, action.payload)
      }

    case 'DROP': // dispatch({..., todoID})
      return {
        todos: deleteTodo(todos, action.payload),
        dates: clearAllInstances(dates, action.payload)
      }

    case 'ANNIHILATE': // no payload; just deletes everything
      return {
        todos: {},
        dates: {}
      }
  
    default:
      console.log("reached default in rootReducer!")
      return {
        todos, 
        dates
      }
  }
}


// UTILITY FUNCTIONS:


function writeTodo(todos, payload) {
  const [{todoID, ...todoData}] = payload

  return {
    ...todos, 
    [todoID]: todoData
  }
}

function applyTodo(dates, payload) {
  const [{todoID}, selectedDate] = payload
  const targetArray = dates[selectedDate] ? [...dates[selectedDate]] : []
  console.log(targetArray)
  if (!targetArray.includes(todoID)) {
    targetArray.push(todoID)
  }
  
  return {
    ...dates,
    [selectedDate]: targetArray
  }
}

function removeTodo(dates, payload) {
  const [todoID, selectedDate] = payload
  const targetArray = dates[selectedDate] ? [...dates[selectedDate]] : []

  if (targetArray.includes(todoID)) {
    targetArray.splice(targetArray.indexOf(todoID), 1)
  }
  
  return {
    ...dates,
    [selectedDate]: targetArray
  };
}


function deleteTodo(todos, payload) {
  const todoID = payload
  const nextTodos = {...todos}
  delete nextTodos[todoID]
  
  return nextTodos
}

function clearAllInstances(dates, payload) {
  const todoID = payload
  const nextDates = {...dates}

  for (let array in dates) {
    nextDates[array] = dates[array].filter((ID) => ID !== todoID)
  }

  return nextDates
}
