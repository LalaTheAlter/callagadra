import { customAlphabet } from "nanoid"
import convertMinutesToTimeString from "./convertMinutesToTimeString"

export default function createTodoObject(startMinutes, endMinutes, text, id) {
  const nanoid = customAlphabet('abcdef0123456789', 12)
  return {
    startTime: convertMinutesToTimeString(startMinutes), 
    endTime: convertMinutesToTimeString(endMinutes), 
    text: text,
    todoID: id ? id : nanoid()
  }
}
