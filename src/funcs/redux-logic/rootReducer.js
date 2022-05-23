
const initialState = { 
  todos: {}, 
  dates: {}
}

export default function rootReducer({todos, dates} = initialState, action) {
  switch (action.type) {
    case 'CREATE': // dispatch({type: ..., payload: [todoObj, dateString]})
      return {
        todos: writeTodo(todos, action.payload),
        dates: applySingleTodo(dates, action.payload)
      }

    case 'INSERT': // dispatch({type: ..., payload: [[todoID, todoID...], dateString]})
      return {
        todos,
        dates: applyManyTodos(dates, action.payload)
      }

    case 'CHANGE': // dispatch({type: ..., payload: [todoObj, dateString]})
      return {
        todos: writeTodo(todos, action.payload),
        dates
      };

    case 'REMOVE': // dispatch({type: ..., payload: [todoID, dateString]})
      return {
        todos,
        dates: removeTodo(dates, action.payload)
      }

    case 'DROP': // dispatch({type: ..., payload: todoID})
      return {
        todos: deleteTodo(todos, action.payload),
        dates: clearAllInstances(dates, action.payload)
      }

    case 'ANNIHILATE': // dispatch({type: ...})
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


// UTILITY FUNCTIONS FOR REDUCER:


function writeTodo(todos, payload) {
  const [{todoID, ...todoData}] = payload

  return {
    ...todos, 
    [todoID]: todoData
  }
}

function applySingleTodo(dates, payload) {
  const [{todoID}, selectedDate] = payload
  const targetArray = getDate(selectedDate, dates)
  
  return {
    ...dates,
    [selectedDate]: targetArray.concat(todoID)
  }
}

function applyManyTodos(dates, payload) {
  const [todoIDarray, selectedDate] = payload
  const targetArray = getDate(selectedDate, dates)
  
  return {
    ...dates,
    [selectedDate]: targetArray.concat(todoIDarray)
  }
}

function removeTodo(dates, payload) {
  const [todoID, selectedDate] = payload
  const targetArray = getDate(selectedDate, dates)

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

// UTILITY FUNCTIONS FOR UTILITY FUNCTIONS:

function getDate(neededDate, givenStore) {
  return givenStore[neededDate] ? [...givenStore[neededDate]] : []
}
