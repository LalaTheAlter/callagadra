import { customAlphabet } from "nanoid"

export default function registerNewTodo(startTime, endTime, text) {
  const nanoid = customAlphabet('abcdefgh', 6)
  let todoID = nanoid()

  const todoContent = JSON.stringify({ startTime, endTime, text, todoID })
  
  localStorage.setItem(`${todoID}`, todoContent)
  return todoContent
}
