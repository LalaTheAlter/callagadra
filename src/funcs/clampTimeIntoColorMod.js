export default function clampTimeIntoColorMod(start, end) {
  function chunkHours(timeString) {
    return Math.min(Math.floor(timeString.split(":")[0] / 2) + 1, 12)
    // gives a number from 1 to 12 illustrating the hour-block our input is matching with
    // hour-block is a 2-hour interval. First hour-block is 0:00-1:59, last one (12th) is 22:00-23:59
  }

  return `${chunkHours(start)}-${chunkHours(end)}`
}