
import React from 'react'
import formatZeros from '../funcs/formatZeros'


export default function SelectedDateLabel({ selectedDate }) {
  return (
    <h4>
      {selectedDate ? 
      (selectedDate
        .split("_")
        .map((el) => formatZeros(el)) // just formatting the date for it to have zeros
        .reverse() // originally it's YYYY.MM.DD, which is more convinient for storing the data (looks more organized). 
        .join("."))
      : "choose a day"}
    </h4>
  )
}
