export default function formatZeros(givenValue) {
  let newStr = givenValue.toString()
  return newStr.length > 1 ? newStr : "0" + newStr
}