import React from 'react'
import prebuildMonthViewModel from '../funcs/prebuildMonthViewModel'
import TodoTile from './TodoTile'



export default function CalendarGrid({ selectedMonth }) {
  

  return (
    <div
      tabIndex={0} 
      className='calendarGrid'>
      {
      prebuildMonthViewModel(selectedMonth).map((dateString) => {
        return (
          <TodoTile key={dateString} dateString={dateString}/>
          )
        })
      }
    </div>
  );
}
