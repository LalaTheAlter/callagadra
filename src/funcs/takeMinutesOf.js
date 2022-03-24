export default function takeMinutesOf(timeString) {
  return parseInt(timeString.split(":")[1])
}