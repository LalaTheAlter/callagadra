import findEarlierInterval from "./findEarlierInterval"


export default function compareTimeIntervalsOfTodos(
  { startTime: startA, endTime: endA }, 
  {startTime: startB, endTime: endB}
  ) {
  console.log(startA, startB, findEarlierInterval(startA, startB))
  console.log(endA, endB, findEarlierInterval(endA, endB))
  return ( 
    startA === startB ? 
    (findEarlierInterval(endA, endB))
    :
    (findEarlierInterval(startA, startB))
  )
}