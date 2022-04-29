import { useSelector } from 'react-redux'

export default function useStoreTodo(todoID) {
  return useSelector(store => store.todos[todoID])
}