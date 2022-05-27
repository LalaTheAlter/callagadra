import Portal from "./Portal";
import "./ModalOpener.scss"
import React, { useState } from 'react'

export default function ModalOpener({ modalModifierClassName = "modal--shadowed", buttonDisabled, buttonText, buttonClassName, children }) {
  const [isModalOpened, setModal] = useState(false)
  
  const handleModal = (mode) => (event) => {
    if(event.target === event.currentTarget) {
      setModal(mode)
    }
  }


  return (
    <>
      <button className={buttonClassName} disabled={buttonDisabled} onClick={handleModal(true)}>
        {buttonText}
      </button>
      {isModalOpened && 
        <Portal>
          <div className={`modal ${modalModifierClassName}`} onClick={handleModal(false)}>
            {React.Children.map(children, (reactEl) => {
              return {
                ...reactEl,
                props: {closeModal: handleModal(false), ...reactEl.props }
                  // grants a function to all immediate children of this component
                  // watch out and take it from props when needed;
              } 
            })
            }
          </div>
        </Portal> }
    </>
  )
}
