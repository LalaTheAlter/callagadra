import { hoursToMinutes, minutesToHours } from 'date-fns'
import formatZeros from './formatZeros'

export default function convertMinutesToTimeString(givenMinutes) {
  let currentClockHours = minutesToHours(givenMinutes)
  let pastMinutes = hoursToMinutes(currentClockHours)
  let currentClockMinutes = givenMinutes - pastMinutes
  
  return `${currentClockHours}:${formatZeros(currentClockMinutes)}`
}