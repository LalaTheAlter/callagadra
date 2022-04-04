import { customAlphabet } from "nanoid"

export default function registerNewTodo(startTime, endTime, text) {
  const nanoid = customAlphabet('abcdefgh12345678', 6)
  let todoContent = {
    startTime, 
    endTime, 
    text,
    todoID: nanoid()
  }

  const todo = JSON.stringify(todoContent)
  
  localStorage.setItem(`${todoContent.todoID}`, todo)
  return todoContent
}
