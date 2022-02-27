import React from 'react'

export default function tileContent({ day, content}) {

      return(
        <div className='calendarTile'>
          <div>
            {content}
          </div>
          <div>
            {day}
          </div>
        </div>
      );
}
