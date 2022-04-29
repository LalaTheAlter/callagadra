import { useSelector } from 'react-redux'
import compareTimeIntervalsOfTodos from './compareTimeIntervalsOfTodos'

export default function useStoreDate(selectedDate) {
  return useSelector(store => {
    const dateWithTodos = store.dates[selectedDate]

    if(dateWithTodos) {
      dateWithTodos.sort(compareTimeIntervalsOfTodos)
    }
    
    return dateWithTodos
  })
}