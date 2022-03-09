
import React, { useRef, useState } from 'react'
import saveTodoData from '../funcs/saveTodoData'
import convertMinutesToTimeString from '../funcs/convertMinutesToTimeString'
import DualSlider from './DualSlider'

export default function TodoForm({ selectedDate }) {



 
  // const [time, setTime] = useState({ start: null, end: null})
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(24*60)
  let todoText = useRef(null)

  const handleTodoSubmit = (event) => { 
    saveTodoData(
      selectedDate, 
      convertMinutesToTimeString(start),
      convertMinutesToTimeString(end),
      todoText.current.value)
    event.preventDefault()
  }

  const handleTimeInput = (event) => {

    let newValue = parseInt(event.target.value)  

    switch (event.target.name) {
      case "left":
        if (newValue <= end) setStart(newValue)
        break;
      case "right":
        if (newValue >= start) setEnd(newValue)
        break;
      default:
        break;
    }

    event.preventDefault()
  }
  
  return (
    <div className='todoForm'>
      <form onSubmit={handleTodoSubmit}>
          
        <h4>
          {convertMinutesToTimeString(start)} — {convertMinutesToTimeString(end)}
        </h4>

        <DualSlider 
          leftValue={start}
          rightValue={end}
          onChange={handleTimeInput}
          step={5} // 5min-step
          max={24*60} // hours * mins
          min={0}
        />     
        {/* <label>
          start: 
          <input 
            ref={todoStartTime}
            name="todoStartTime" 
            type="time"
            // required
             />
        </label> */}

        {/* <label>
          end: 
          <input 
            ref={todoEndTime}
            name="todoEndTime" 
            type="time"
            // required 
            />
        </label> */}

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
