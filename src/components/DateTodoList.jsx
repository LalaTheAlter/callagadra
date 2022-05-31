import React from 'react'
import useStoreDate from '../funcs/redux-logic/useStoreDate'
import TodoItem from './todoItem'


export default function DateTodoList({ selectedDate, className }) {

  const arrayOfTodos = useStoreDate(selectedDate)
  
  return (
    <div className={className}>
      {
        arrayOfTodos ? 
        arrayOfTodos.map((todoID) => (
          <TodoItem 
          key={todoID}
          todoID={todoID}
          withRemoveButton
          thisDateString={selectedDate}
          />
          ))
        :
        null
      }
    </div>
  )
}
