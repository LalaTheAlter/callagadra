import React from 'react'
import loadTodoData from '../funcs/loadTodoData'
import TodoItem from './todoItem'


export default function SelectedDateTodoList({ selectedDate }) {

  return (
    <div className="TodoListContainer">
      {
        loadTodoData(selectedDate) ? 
        loadTodoData(selectedDate).map((el) => (<TodoItem 
          key={el.startTime + el.endTime + el.text + Math.random()}
          start={el.startTime}
          end={el.endTime}
          text={el.text}
          todoID={el.todoID}
          withEditButton/>))
        :
        <h4 className="TodoListContainer-placeholder">
          Start writing something!
        </h4>
      }
    </div>
  )
}
