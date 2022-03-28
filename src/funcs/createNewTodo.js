import { customAlphabet } from "nanoid"

export default function createNewTodo(startTime, endTime, text) {
  const nanoid = customAlphabet('abcdefgh', 6)
  let todoID = nanoid()

  const todoContent = JSON.stringify({ startTime, endTime, text })
  
  localStorage.setItem(`${todoID}`, todoContent)
  return todoID
}
