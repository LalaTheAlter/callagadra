import React from 'react'
import prebuildMonthViewModel from '../funcs/prebuildMonthViewModel'
import TodoTile from './TodoTile'



export default function CalendarGrid({ selectedMonth }) {
  

  return (
    <div
      tabIndex={0} 
      className='calendarGrid'>
      {
      prebuildMonthViewModel(selectedMonth).map(({year, month, day}) => {
        return (
          <TodoTile 
            key={`${year}_${month}_${day}`} 
            year={year}
            month={month}
            day={day}
            />)
        })
      }
    </div>
  );
}
