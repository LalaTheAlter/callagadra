import takeMinutesOf from "./takeMinutesOf";
import takeHoursOf from "./takeHoursOf";

export default function compareTimeIntervalsOfTodos(
  { startTime: startA, endTime: endA }, 
  {startTime: startB, endTime: endB}
  ) {
  console.log(startA === startB)
  return ( 
    startA === startB ? 
    (takeHoursOf(endA) < takeHoursOf(endB) ? -1
    :
    takeMinutesOf(endA) < takeMinutesOf(endB) ? -1 
    : 1)
    
    :
    
    (takeHoursOf(startA) < takeHoursOf(startB) ? -1
    :
    takeMinutesOf(startA) < takeMinutesOf(startB) ? -1
    :
    1)
  )
}