
import React, { useRef, useState } from 'react'
import saveTodoData from '../funcs/saveTodoData'
import convertMinutesToTimeString from '../funcs/convertMinutesToTimeString'
import Nouislider from 'nouislider-react'
import "nouislider/distribute/nouislider.css";


export default function TodoForm({ selectedDate }) {

  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(24*60)
  let todoText = useRef(null)
  let todoTime = useRef(null)

  const handleTodoSubmit = (event) => { 
    console.log(event)
    console.log(todoTime)
    saveTodoData(
      selectedDate, 
      convertMinutesToTimeString(start),
      convertMinutesToTimeString(end),
      todoText.current.value)
    event.preventDefault()
  }

  const handleTimeSlide = (render, handle, value) => {
    setStart(value[0].toFixed())
    setEnd(value[1].toFixed())
  }


  
  return (
    <div className='todoForm'>
      <form onSubmit={handleTodoSubmit}>
          
        <h4>
          {convertMinutesToTimeString(start)} — {convertMinutesToTimeString(end)}
        </h4>

        <Nouislider 
          range={{ min: 0, max: 24*60 }} 
          start={[0, 24*60]} 
          step={5}
          onSlide={handleTimeSlide}
          connect/>
          )  

        <label>
          Describe your event:
          <textarea 
            ref={todoText}
            name="todoText" 
            spellCheck="false"
            minLength={3}
            cols="30" 
            rows="10"
            required />
        </label>

        <button type="submit">Set it</button>
      </form>
    </div>
  )
}
