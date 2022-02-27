import React from 'react'

export default function TodoForm() {
  return (
    <div>
      <h3>{"Let's set an event!"}</h3>
      <button type="submit" onClick={() => { 
        document.dispatchEvent(new Event("localStorageUpdated"))}}>asd</button>
     
    </div>
  )
}
