export default function takeMinutesOf(dateString) {
  return parseInt(dateString.split(":")[1])
}