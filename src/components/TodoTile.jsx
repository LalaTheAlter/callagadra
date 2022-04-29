import React from 'react'
import useStoreDate from '../funcs/redux-logic/useStoreDate'
import TodoItem from './todoItem'

export default function TodoTile({ year, month, day }) {

  const dateString = `${year}_${month}_${day}`
  const state = useStoreDate(dateString)
 
  const handleSelection = () => { 
    document.dispatchEvent(new CustomEvent("newDateSelected", {detail: dateString})) // goes to => todoBox
  }

  return(
    <div 
      onClick={handleSelection}
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
