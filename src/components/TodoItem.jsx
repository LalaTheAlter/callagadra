import React from 'react'
import { useDispatch } from 'react-redux'
import formatTimeInterval from '../funcs/formatTimeInterval'
import useStoreTodo from '../funcs/redux-logic/useStoreTodo'

export default function TodoItem({ todoID, withRemoveButton, thisDateString}) {
  
  const {startTime, endTime, text} = useStoreTodo(todoID)
  const dispatch = useDispatch()

  const handleRemoving = () => {
    console.log("Event removed:", todoID, thisDateString)
    dispatch({type: 'REMOVE', payload: [todoID, thisDateString]})
  }

  return (
    <div className='TodoItem'>
      <div>
        {formatTimeInterval(startTime, endTime)}
      </div>

      <div>
        {text}
      </div>

      {withRemoveButton &&
        <button
          onClick={handleRemoving}
          type="submit">
          Remove
        </button>  
      }
    </div>
  )
}
