import React from 'react'
import formatTimeInterval from '../funcs/formatTimeInterval'

export default function TodoItem({start, end, text}) {
  return (
    <div className='TodoItem'>
      <div>
        {formatTimeInterval(start, end)}
      </div>
      <div>
        {text}
      </div>
    </div>
  )
}
