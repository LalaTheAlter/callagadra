import { createStore } from 'redux'

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      
      break;
    case 'CHANGE_TODO':

      break;
    case 'REMOVE_TODO':
      
      break;
    
    default:
      console.log("reached default in reducer func!")
      break;
  }
}
const prevStore = {}

for (const key in localStorage) {
  let value = JSON.parse(localStorage.getItem(key))
  if (value) prevStore[key] = value
}
const store = createStore(reducer, prevStore)


export {store}

