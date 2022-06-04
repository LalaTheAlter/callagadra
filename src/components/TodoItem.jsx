import './TodoItem.scss'
import React from 'react'
import formatTimeInterval from '../funcs/formatTimeInterval'
import useTodo from '../funcs/redux-logic/useTodo'
import TodoDeleteMenu from './TodoDeleteMenu'
import TodoRemoveButton from './TodoRemoveButton'
import ModalOpener from './hocs/ModalOpener'
import TodoWriteMenu from './TodoWriteMenu'
import clampTimeIntoColorMod from '../funcs/clampTimeIntoColorMod'

export default function TodoItem({ todoID, onClickFn, dateForRemoveButton, withDeleteButton, withChangeButton}) {
  const {startTime, endTime, text} = useTodo(todoID)
  const colorMod = clampTimeIntoColorMod(startTime, endTime)

  return (
    <div className={`todo-item todo-item--time-theme-${colorMod}`} onClick={onClickFn}>
      <div className="todo-item__top-panel">
        <div className="todo-item__time-display">
          {formatTimeInterval(startTime, endTime)}
        </div>

        {(dateForRemoveButton || withChangeButton || withDeleteButton) &&

          <div className="todo-item__btn-group"> 
          {dateForRemoveButton &&
            <TodoRemoveButton 
              className={"todo-item__btn"} 
              idToRemove={todoID} 
              atDate={dateForRemoveButton}
              buttonText={"⨯"} />
          }
          {withChangeButton &&
            <ModalOpener 
              buttonClassName={"todo-item__btn"} 
              buttonText={"✎"}>
              <TodoWriteMenu idToEdit={todoID} />
            </ModalOpener>
          }
          {withDeleteButton &&
            <ModalOpener 
              buttonClassName={"todo-item__btn"} 
              buttonText={"☢"}>
              <TodoDeleteMenu idToDelete={todoID} />
            </ModalOpener>
          }
        </div>
        }
      </div>
   

      <div className="todo-item__text-content">
        {text}
      </div>
    </div>
  )
}
