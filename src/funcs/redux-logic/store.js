import { createStore, combineReducers } from 'redux'
import todosReducer from './todoSlice'
import datesReducer from './dateSlice'
// import todoDeletingReducer from './todoDeletingReducer'


const rootReducer = combineReducers({
  todos: todosReducer, 
  dates: datesReducer
})

const prevStore = { todos: {}, dates: {}}

for (const key in localStorage) {
  let data = JSON.parse(localStorage.getItem(key))
  if (data) {
    prevStore[key] = data
  }
}

const store = createStore(rootReducer, prevStore)


export {store}

