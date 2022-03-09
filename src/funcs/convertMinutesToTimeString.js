import { hoursToMinutes, minutesToHours } from 'date-fns'
import formatZeros from './formatZeros'

export default function convertMinutesToTimeString(givenValue) {
  let minutes = givenValue
  let currentHours = minutesToHours(minutes)
  let pastMinutes = hoursToMinutes(currentHours)
  let currentMinutes = minutes - pastMinutes
  
  return `${currentHours}:${formatZeros(currentMinutes)}`
}