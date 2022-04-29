import { store } from "./store"

function pullTodoByGivenID(todoID) {
  return store.getState()["todos"][todoID]
}

export default function compareTimeIntervalsOfTodos(todoID1, todoID2) {
  const { startTime: startA, endTime: endA } = pullTodoByGivenID(todoID1) 
  const { startTime: startB, endTime: endB } = pullTodoByGivenID(todoID2)

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