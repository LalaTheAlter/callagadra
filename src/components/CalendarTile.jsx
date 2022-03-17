import React from 'react'
import TodoItem from './TodoItem';

export default function CalendarTile({ year, month, day, content }) {

  const handleSelection = () => { 
    document.dispatchEvent(new CustomEvent("newDateSelected", {detail: `${year}_${month}_${day}`})) // goes to => todoForm
  }

  return(
    <div 
      onFocus={handleSelection}
      tabIndex={-1}
      className="calendarTile">
      <div>
        {
          content == null ? null
          :
          content.map((el) => {
            return <TodoItem 
              key={el.startTime + el.endTime + el.text + Math.random()}
              start={el.startTime}
              end={el.endTime}
              text={el.text} />
          })
        }
      </div>
      <div>
        {day}
      </div>
    </div>
  );
}
