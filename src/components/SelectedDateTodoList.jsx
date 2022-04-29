import React from 'react'
import useStoreDate from '../funcs/redux-logic/useStoreDate'

import TodoItem from './todoItem'


export default function SelectedDateTodoList({ selectedDate }) {

  const state = useStoreDate(selectedDate)
  
  return (
    <div className="TodoListContainer">
      {
        state ? 
        state.map((todoID) => (
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
