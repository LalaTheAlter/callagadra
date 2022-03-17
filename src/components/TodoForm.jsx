
import React, { useRef, useState } from 'react'
import saveTodoData from '../funcs/saveTodoData'
import convertMinutesToTimeString from '../funcs/convertMinutesToTimeString'
import Nouislider from 'nouislider-react'
import "nouislider/distribute/nouislider.css";


export default function TodoForm({ selectedDate }) {

  const [start, setStart] = useState(convertMinutesToTimeString(0))
  const [end, setEnd] = useState(convertMinutesToTimeString(24*60))
  let todoText = useRef(null)

  const handleTodoSubmit = (event) => { 
    console.log(event)

    saveTodoData(
      selectedDate, 
      start,
      end,
      todoText.current.value)
    event.preventDefault()
  }

  const handleTimeSlide = (render, handle, value) => {
    setStart(convertMinutesToTimeString(value[0].toFixed()))
    setEnd(convertMinutesToTimeString(value[1].toFixed()))
  }
  
  return (
    <div className='todoForm'>
      <form onSubmit={handleTodoSubmit}>
          
        <h4>
          {start === end ? `${start}` : `${start} — ${end}`}
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
