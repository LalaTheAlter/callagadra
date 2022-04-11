
export default function compareTimeIntervalsOfTodos(
  { startTime: startA, endTime: endA }, 
  {startTime: startB, endTime: endB}
  ) {
  // console.log(startA, startB, findEarlierInterval(startA, startB))
  // console.log(endA, endB, findEarlierInterval(endA, endB))
  return ( 
    startA === startB ? 
    (findEarlierInterval(endA, endB))
    :
    (findEarlierInterval(startA, startB))
  )
}

function findEarlierInterval(a, b) {
  return (
    takeHoursOf(a) === takeHoursOf(b) ? 
      (takeMinutesOf(a) <= takeMinutesOf(b) ? -1 : 1)
      :
      (takeHoursOf(a) > takeHoursOf(b) ? 1 : -1)
  )
}

function takeHoursOf(timeString) {
  return parseInt(timeString.split(":")[0])
}

function takeMinutesOf(timeString) {
  return parseInt(timeString.split(":")[1])
}