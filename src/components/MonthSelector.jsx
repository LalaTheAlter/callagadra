import React from 'react'

export default function MonthSelector() {
  return (
    <div>
      
      {new Date().toLocaleDateString()} 
      <button>prev</button>
      <button>next</button>
      
    </div>
  )
}
