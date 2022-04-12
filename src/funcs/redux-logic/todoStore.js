import { createStore, combineReducers } from 'redux'
import todoMakingReducer from './todoMakingReducer'
import todoInstancingReducer from './todoInstancingReducer'
import todoDeletingReducer from './todoDeletingReducer'


const rootReducer = combineReducers({
  todoMakingReducer, 
  todoInstancingReducer, 
  todoDeletingReducer
})

const prevStore = {}

for (const key in localStorage) {
  let value = JSON.parse(localStorage.getItem(key))
  if (value) prevStore[key] = value
}

const store = createStore(rootReducer, {...prevStore})


export {store}

