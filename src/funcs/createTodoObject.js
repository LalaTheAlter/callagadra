import { customAlphabet } from "nanoid"
import convertMinutesToTimeString from "./convertMinutesToTimeString"

export default function createTodoObject(startMinutes, endMinutes, text, id) {
  const nanoid = customAlphabet('abcdefgh12345678', 6)
  return {
    startTime: convertMinutesToTimeString(startMinutes), 
    endTime: convertMinutesToTimeString(endMinutes), 
    text: text,
    todoID: id ? id : nanoid()
  }
}
