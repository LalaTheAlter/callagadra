import './TodoTile.scss'
import React from 'react'
import useStoreDate from '../funcs/redux-logic/useStoreDate'
import TodoItem from './todoItem'

export default function TodoTile({ dateString }) {

  const arrayOfTodos = useStoreDate(dateString)
  const date = dateString.split("_")[2] // dateString is like "yyyy_MM_dd"
  
  const handleSelection = () => { 
    document.dispatchEvent(new CustomEvent("newDateSelected", {detail: dateString})) // goes to => todoBox
  }

  return(
    <div 
      onClick={handleSelection}
      tabIndex={-1}
      className="calendar-tile">
      <div className="calendar-tile__todo-list">
        {         
          arrayOfTodos ? 
          arrayOfTodos.map((todoID) => (
            <TodoItem 
            todoID={todoID} 
            key={todoID + Math.random()} />
          )) 
          : null
        }
      </div>
      <div className="calendar-tile__date-label">
        {date}
      </div>
    </div>
  );
}
