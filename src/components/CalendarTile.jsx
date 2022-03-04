import React from 'react'

export default function tileContent({ day, content }) {

  return(
    <div className='calendarTile'>
      <div>
        {
          content === null ? null : (content["11:50"])
        }
        
      </div>
      <div>
        {day}
      </div>
    </div>
  );
}
