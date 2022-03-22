import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

export default function Portal ({ children, className = 'root-portal', el = 'div' }) {
  const [container] = useState(() => {
    return document.createElement(el);
  });

  useEffect(() => {
    container.classList.add(className)
    
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [className, container])

  return ReactDOM.createPortal(children, container)
}
