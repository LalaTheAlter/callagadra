import React from 'react'

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
          content == null ? content
          :
          <>
            <div>{content.time}</div>
            <div>{content.text}</div>
          </>
        }
      </div>
      <div>
        {day}
      </div>
    </div>
  );
}
