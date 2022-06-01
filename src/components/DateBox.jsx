import './DateBox.scss'
import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import ModalOpener from './hocs/ModalOpener'
import DateLabel from './DateLabel'
import TodoInsertMenu from './TodoInsertMenu'
import TodoList from './TodoList'
import useTodosInDate from '../funcs/redux-logic/useTodosInDate'


export default function DateBox() {
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'y_M_d'))
  const arrayOfTodos = useTodosInDate(selectedDate)
 
  useEffect(() => {
    const handleDateSelect = (event) => {
      event.preventDefault()
      setSelectedDate(event.detail)
    }

    document.addEventListener("newDateSelected", handleDateSelect) // recieved from <= TodoTile.jsx
    return () => {
      document.removeEventListener("newDateSelected", handleDateSelect) // recieved from <= TodoTile.jsx
    }
  })
 
  return (
    <div className='date-box'>
      <DateLabel className="date-box__date-label" selectedDate={selectedDate} /> 
    
      <div className="date-box__todo-list">
        <TodoList items={arrayOfTodos} dateForRemoveButton={selectedDate}/>
      </div>

      <ModalOpener 
        buttonClassName="date-box__insert-btn" 
        modalModifierClassName="modal--not-shadowed" 
        buttonText={"➕"}>
        <TodoInsertMenu selectedDate={selectedDate} />
      </ModalOpener>
    </div>
  )
}
