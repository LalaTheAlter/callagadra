import React from 'react'
import formatTimeInterval from '../funcs/formatTimeInterval'
import useStoreTodo from '../funcs/redux-logic/useStoreTodo'
import TodoDeleteButton from './TodoDeleteButton'
import TodoRemoveButton from './TodoRemoveButton'
import ModalOpener from '../hocs/ModalOpener'
import TodoWriteMenu from './TodoWriteMenu'

export default function TodoItem({ todoID, onClickFn, thisDateString, withRemoveButton, withDeleteButton, withChangeButton}) {
  
  const {startTime, endTime, text} = useStoreTodo(todoID)
  
  return (
    <div className='todoItem' onClick={onClickFn}>
      <div className="todoItem-contentGroup">
        <div>
          {formatTimeInterval(startTime, endTime)}
        </div>

        <div>
          {text}
        </div>
      </div>

      <div className="todoItem-buttonGroup">
        {withRemoveButton &&
          <TodoRemoveButton idToRemove={todoID} atDate={thisDateString} />
        }
        {withChangeButton &&
          <ModalOpener buttonText={"Edit"}>
            <TodoWriteMenu idToEdit={todoID} />
          </ModalOpener>
        }
        {withDeleteButton &&
          <ModalOpener modalClassName="notShadowed" buttonText={"Delete"}>
            <TodoDeleteButton idToDelete={todoID} />
          </ModalOpener>
        }
      </div>
    </div>
  )
}
