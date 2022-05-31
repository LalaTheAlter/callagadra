import './CalendarGrid.scss'
import { format } from 'date-fns';
import { setDay } from 'date-fns/esm';
import React from 'react'
import prebuildMonthViewModel from '../funcs/prebuildMonthViewModel'
import CalendarTile from './CalendarTile'



export default function CalendarGrid({ selectedMonth }) {
  

  return (
    <div
      tabIndex={0} 
      className="calendar-grid">
      <div className="calendar-grid__days-label">
        {[1, 2, 3, 4, 5, 6, 0].map((dayOfWeek) => {
          return(
            <div key={dayOfWeek} className="calendar-grid__day-label">
              {format(setDay(new Date(), dayOfWeek), "EEEE")}
            </div>
            )
          })
        }
      </div>
      <div className="calendar-grid__tiles-collection">
        {
        prebuildMonthViewModel(selectedMonth).map((dateString) => {
          return (
              <CalendarTile key={dateString} dateString={dateString}/>
            )
          })
        }
      </div>
    </div>
  );
}
