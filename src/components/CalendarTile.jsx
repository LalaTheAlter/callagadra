import './CalendarTile.scss'
import React from 'react'
import useTodosInDate from '../funcs/redux-logic/useTodosInDate'
import TodoList from './TodoList'

export default function CalendarTile({ dateString }) {

  const arrayOfTodos = useTodosInDate(dateString)
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
      className={`calendar-tile calendar-tile--month-theme-${month}`}>
      <div className="calendar-tile__todo-list">
        <TodoList items={firstTodos} />
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
