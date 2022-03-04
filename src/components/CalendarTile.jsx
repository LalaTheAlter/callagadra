import React from 'react'

export default function tileContent({ day, content }) {
  return(
    <div className='calendarTile'>
 
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
