import { useSelector } from 'react-redux'

export default function useAllTodos() {
  return useSelector(store => takeEveryTodoID(store.todos))
}

function takeEveryTodoID(storedTodos) {
  const allTodoIDs = []
  for (const id in storedTodos) {
    if (Object.hasOwnProperty.call(storedTodos, id)) {
      allTodoIDs.push(id);
    }
  }
  return allTodoIDs
}