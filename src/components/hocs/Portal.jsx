import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

export default function Portal ({ children, className = "modal", el = 'div', onClick }) {
  const [container] = useState(() => {
    return document.createElement(el);
  });

  useEffect(() => {
    container.classList.add(...className.split(" "))
    container.onclick = onClick

    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [onClick, className, container])

  return ReactDOM.createPortal(children, container)
}
