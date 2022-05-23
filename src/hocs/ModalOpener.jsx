import Portal from "./Portal";

import React, { useState } from 'react'

export default function ModalOpener({ buttonText, children }) {
  const [isModalOpened, setModal] = useState(false)
  
  const handleModal = (mode) => (event) => {
    if(event.target === event.currentTarget) {
      setModal(mode)
    }
  }


  return (
    <>
      <button onClick={handleModal(true)}>
        {buttonText}
      </button>
      {isModalOpened && 
        <Portal>
          <div className="modal" onClick={handleModal(false)}>
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
