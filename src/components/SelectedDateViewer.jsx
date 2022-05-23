import React from 'react'
import ModalOpener from '../hocs/ModalOpener'
import DateLabel from './DateLabel'
import DateTodoList from './DateTodoList'
import TodoInsertMenu from './TodoInsertMenu'

export default function SelectedDateViewer({selectedDate}) {
  
  return (
    <div className="selectedDateViewer">
      <DateLabel selectedDate={selectedDate} /> 
      <DateTodoList selectedDate={selectedDate} />
      <ModalOpener buttonText={"[+]"}>
        <TodoInsertMenu selectedDate={selectedDate} />
      </ModalOpener>
    </div>
  )
}
