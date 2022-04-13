import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './todoItem'

export default function TodoTile({ year, month, day }) {

  const dateString = `${year}_${month}_${day}`
  const state = useSelector(store => store.dates[dateString])
 
  const handleSelection = () => { 
    document.dispatchEvent(new CustomEvent("newDateSelected", {detail: dateString})) // goes to => todoForm
  }

  return(
    <div 
      onFocus={handleSelection}
      tabIndex={-1}
      className="calendarTile">
      <div>
        {         
          state ? 
          state.map((todoID) => (
            <TodoItem 
            todoID={todoID} 
            key={todoID + Math.random()} />
          )) 
          : null
        }
      </div>
      <div>
        {day}
      </div>
    </div>
  );
}
