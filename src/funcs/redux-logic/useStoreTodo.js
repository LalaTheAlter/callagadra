import { useSelector } from 'react-redux'

export default function useStoreTodo(todoID) {
  // arg is expected to be in a format of /[a-h1-8]{6}/ 
  // as specified in createNewTodo.js
  return useSelector(store => store.todos[todoID])
}