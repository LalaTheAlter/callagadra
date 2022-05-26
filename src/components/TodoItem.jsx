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
    <div className='todo-item' onClick={onClickFn}>
      <div className="todo-item__content">
        <div className="todo-item__time-display">
          {formatTimeInterval(startTime, endTime)}
        </div>

        <div className="todo-item__text-display">
          {text}
        </div>
      </div>

      <div className="todo-item__btn-group">
        {withRemoveButton &&
          <TodoRemoveButton 
            className={"todo-item__btn todo-item__btn--remove"} 
            idToRemove={todoID} 
            atDate={thisDateString} />
        }
        {withChangeButton &&
          <ModalOpener 
            buttonClassName={"todo-item__btn todo-item__btn--change"} 
            buttonText={"Edit"}>
            <TodoWriteMenu idToEdit={todoID} />
          </ModalOpener>
        }
        {withDeleteButton &&
          <ModalOpener 
            buttonClassName={"todo-item__btn todo-item__btn--delete"} 
            modalModifierClassName="modal--not-shadowed" 
            buttonText={"Delete"}>
            <TodoDeleteButton idToDelete={todoID} />
          </ModalOpener>
        }
      </div>
    </div>
  )
}
