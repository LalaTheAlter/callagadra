import { hoursToMinutes } from 'date-fns'

export default function convertTimeStringToMinutes(timeString) {
  let [hours, minutes] = timeString.split(":")
  return hoursToMinutes(hours) + parseInt(minutes)
}