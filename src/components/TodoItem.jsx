import React from 'react'

export default function TodoItem({start, end, text}) {
  return (
    <div className='TodoItem'>
      <div>{start}—{end}</div>
      <div>{text}</div>
    </div>
  )
}
