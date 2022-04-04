import React from 'react'
import TodoItem from '../components/TodoItem';

export default function mapArrayToTodoItems(elem) {
 
  return( 
    <TodoItem 
      key={elem.startTime + elem.endTime + elem.text + Math.random()}
      start={elem.startTime}
      end={elem.endTime}
      text={elem.text}
      todoID={elem.todoID} />
  )
}
