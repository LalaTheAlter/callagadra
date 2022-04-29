import { createStore,  } from 'redux'
import rootReducer from './rootReducer';

const prevStore = { 
  todos: loadFromLocalStorage("todos"), 
  dates: loadFromLocalStorage("dates")
}

const store = createStore(rootReducer, prevStore)

store.subscribe(handleStoreUpdates);

console.log(store, prevStore)
console.log(localStorage)

export {store}


// UTILITY FUNCTIONS:

function handleStoreUpdates() {
  console.log('saving...')
  saveToLocalStorage("todos")
  saveToLocalStorage("dates")
}

function saveToLocalStorage(key) {
  localStorage.setItem(key, JSON.stringify(store.getState()[key]))
}

function loadFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || {}
}