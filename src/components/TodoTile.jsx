import React from 'react'
import mapArrayToTodoItems from '../funcs/mapArrayToTodoItems';


export default function TodoTile({ year, month, day, content }) {

  const handleSelection = () => { 
    document.dispatchEvent(new CustomEvent("newDateSelected", {detail: `${year}_${month}_${day}`})) // goes to => todoForm
  }
  // console.log(content, content && content.map(mapArrayToTodoItems))
  return(
    <div 
      onFocus={handleSelection}
      tabIndex={-1}
      className="calendarTile">
      <div>
        {
          // content === null ? null
          // :
          
          content !== null ? content.map(mapArrayToTodoItems) : null
        }
      </div>
      <div>
        {day}
      </div>
    </div>
  );
}
