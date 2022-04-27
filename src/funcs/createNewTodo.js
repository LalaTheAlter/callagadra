import { customAlphabet } from "nanoid"

export default function createNewTodo(startTime, endTime, text) {
  const nanoid = customAlphabet('abcdefgh12345678', 6)
  const todo = {
    startTime, 
    endTime, 
    text,
    todoID: nanoid()
  }
  
  return todo
}
