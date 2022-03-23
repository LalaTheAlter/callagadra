import takeMinutesOf from "./takeMinutesOf";
import takeHoursOf from "./takeHoursOf";

export default function compareTimeIntervalsOfTodos({ startTime: a}, {startTime: b}) {
  
  return ( 
    takeHoursOf(a) < takeHoursOf(b) ? -1
    :
    takeMinutesOf(a) < takeMinutesOf(b) ? -1
    : 
    1
  )
}