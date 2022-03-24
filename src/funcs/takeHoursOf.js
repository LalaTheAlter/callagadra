export default function takeHoursOf(timeString) {
  return parseInt(timeString.split(":")[0])
}