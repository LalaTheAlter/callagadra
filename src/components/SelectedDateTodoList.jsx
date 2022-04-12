import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './todoItem'


export default function SelectedDateTodoList({ selectedDate }) {

  const state = useSelector(store => store[selectedDate])
  
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
