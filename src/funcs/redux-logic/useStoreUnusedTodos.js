import useAllStoreTodos from './useAllStoreTodos'
import useStoreDate from './useStoreDate'


export default function useStoreUnusedTodos(dateString) {
  // arg is expected to be in a format of "y_M_d"
  // as in date-fns' format() func
  const usedTodos = useStoreDate(dateString)
  const allTodos = useAllStoreTodos()
  const ans = allTodos.filter(id => {
    console.log(id, usedTodos, usedTodos.includes(id))
    return !(usedTodos.includes(id))
  })
  console.log(ans)
  return ans
}