import React from 'react'
import MonthSelector from './MonthSelector'
import CalendarBox from './CalendarBox'
import TodoForm from './TodoForm'

export default function Mainframe() {
  return (
    <main>
      <MonthSelector />
      <CalendarBox
        selectedMonth={new Date()} /> 
      <TodoForm />
    </main>
  )
}
