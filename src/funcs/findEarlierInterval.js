import takeMinutesOf from "./takeMinutesOf";
import takeHoursOf from "./takeHoursOf";

export default function findEarlierInterval(a, b) {
  return (
    takeHoursOf(a) === takeHoursOf(b) ? 
      (takeMinutesOf(a) <= takeMinutesOf(b) ? -1 : 1)
      :
      (takeHoursOf(a) > takeHoursOf(b) ? 1 : -1)
  )
}