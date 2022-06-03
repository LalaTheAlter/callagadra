import React from 'react'
import { useDispatch } from 'react-redux'

export default function TodoRemoveButton({ className, idToRemove, atDate, buttonText}) {
  
  const dispatch = useDispatch()

  const handleRemoving = () => {
    console.log("Event:", idToRemove, "was removed from", atDate)
    dispatch({type: 'REMOVE', payload: [idToRemove, atDate]})
  }

  return (
    <button
      className={className}
      onClick={handleRemoving}
      type="submit">
      {buttonText}
    </button>  
  )
}
