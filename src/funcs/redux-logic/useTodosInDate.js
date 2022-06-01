import { useSelector } from 'react-redux'
import compareTimeIntervalsOfTodos from './compareTimeIntervalsOfTodos'

export default function useTodosInDate(dateString) {
  // arg is expected to be in a format of "y_M_d"
  // as in date-fns' format() func
  return useSelector(store => {
    const dateWithTodos = store.dates[dateString] || []
    if(dateWithTodos) {
      dateWithTodos.sort(compareTimeIntervalsOfTodos)
    }
    return dateWithTodos
  })
}