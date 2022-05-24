import React from 'react'
import { useDispatch } from 'react-redux'

export default function TodoRemoveButton({ idToRemove, atDate}) {
  
  const dispatch = useDispatch()

  const handleRemoving = () => {
    console.log("Event:", idToRemove, "was removed from", atDate)
    dispatch({type: 'REMOVE', payload: [idToRemove, atDate]})
  }

  return (
    <button
      onClick={handleRemoving}
      type="submit">
      Remove
    </button>  
  )
}
