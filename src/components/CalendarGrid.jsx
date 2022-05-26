import { format } from 'date-fns';
import { setDay } from 'date-fns/esm';
import React from 'react'
import prebuildMonthViewModel from '../funcs/prebuildMonthViewModel'
import TodoTile from './TodoTile'



export default function CalendarGrid({ selectedMonth }) {
  

  return (
    <div
      tabIndex={0} 
      className="calendar-grid">
      {[1, 2, 3, 4, 5, 6, 0].map((dayOfWeek) => {
        return(
          <div key={dayOfWeek} className="calendar-grid__day-label">
            {format(setDay(new Date(), dayOfWeek), "EEEE")}
          </div>
          )
        })
      }
      {
      prebuildMonthViewModel(selectedMonth).map((dateString) => {
        return (
          <div key={dateString} className="calendar-grid__calendar-tile">
            <TodoTile dateString={dateString}/>
          </div>
          )
        })
      }
    </div>
  );
}
