import useAllTodos from './useAllTodos'
import useTodosInDate from './useTodosInDate'


export default function useTodosUnusedInDate(dateString) {
  // arg is expected to be in a format of "y_M_d"
  // as in date-fns' format() func
  const usedTodos = useTodosInDate(dateString)
  const allTodos = useAllTodos()
  const unusedTodos = allTodos.filter(id => {
    return !(usedTodos.includes(id))
  })
  return unusedTodos.length > 0 ? unusedTodos : null
}