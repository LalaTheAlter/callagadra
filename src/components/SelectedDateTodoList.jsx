import React from 'react'
import useStoreDate from '../funcs/redux-logic/useStoreDate'
import TodoItem from './todoItem'


export default function SelectedDateTodoList({ selectedDate }) {

  const arrayOfTodos = useStoreDate(selectedDate)
  
  return (
    <div className="TodoListContainer">
      {
        arrayOfTodos ? 
        arrayOfTodos.map((todoID) => (
          <TodoItem 
          key={todoID + Math.random()}
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
