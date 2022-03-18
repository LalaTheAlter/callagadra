export default function formatTimeInterval(start, end) {
  return start === end ? `${start}` : `${start} — ${end}`
}