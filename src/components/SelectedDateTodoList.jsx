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
          withEditButton/>
          ))
        :
        <h4 className="TodoListContainer-placeholder">
          Start writing something!
        </h4>
      }
    </div>
  )
}
