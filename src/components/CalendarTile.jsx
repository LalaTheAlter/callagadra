import './CalendarTile.scss'
import React from 'react'
import useStoreDate from '../funcs/redux-logic/useStoreDate'
import TodoItem from './todoItem'

export default function CalendarTile({ dateString }) {

  const arrayOfTodos = useStoreDate(dateString)
  const firstTodos = arrayOfTodos.slice(0, 3)
  const restTodosCount = arrayOfTodos.slice(3).length
  const [, month, date] = dateString.split("_")  // dateString is like "yyyy_MM_dd"
  
  const handleSelection = () => { 
    document.dispatchEvent(new CustomEvent("newDateSelected", {detail: dateString})) // goes to => todoBox
  }

  return(
    <div 
      onClick={handleSelection}
      tabIndex={-1}
      className={`calendar-tile calendar-tile--month-${month}`}>
      <div className="calendar-tile__todo-list">
        {         
          firstTodos ? 
          firstTodos.map((todoID) => (
            <TodoItem 
            todoID={todoID} 
            key={todoID} />
          )) 
          : null
        }
      </div>
      <div className="calendar-tile__bottom-panel">
        <div className="calendar-tile__rest-indicator">
          {!!restTodosCount && `+ ${restTodosCount} more`}
        </div>
        <div className="calendar-tile__date-label">
          {date}
        </div>
      </div>
    </div>
  );
}
