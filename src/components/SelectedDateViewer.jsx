import React from 'react'
import DateLabel from './DateLabel'
import SelectedDateTodoList from './SelectedDateTodoList'

export default function SelectedDateViewer({selectedDate}) {
  return (
    <div className="selectedDateViewer">
      <DateLabel selectedDate={selectedDate} /> 
      <SelectedDateTodoList selectedDate={selectedDate} />
    </div>
  )
}
