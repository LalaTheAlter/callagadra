import { createStore, combineReducers } from 'redux'
import todosReducer from './todoSlice'
import datesReducer from './dateSlice'
// import todoDeletingReducer from './todoDeletingReducer'


const rootReducer = combineReducers({
  todos: todosReducer, 
  dates: datesReducer
})

const prevStore = { 
  todos: JSON.parse(localStorage.getItem("todos")) || {}, 
  dates: JSON.parse(localStorage.getItem("dates")) || {}
}


const store = createStore(rootReducer, prevStore)

store.subscribe(() => {
  saveToLocalStorage("todos")
  saveToLocalStorage("dates")
});

console.log(store, prevStore)
console.log(localStorage)

function saveToLocalStorage(key) {
  localStorage.setItem(key, JSON.stringify(store.getState()[key]))
}

export {store}