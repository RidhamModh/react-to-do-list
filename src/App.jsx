import { InputForm } from "./InputForm"
import { TodoList } from "./TodoList"
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoOnSubmit = (title) => {
    setTodos(currentTodo => {
      return [...currentTodo, {
        id: crypto.randomUUID(),
        title,
        completed: false
      }]
    })   
  }
  const handleCheckboxChange = (isCompleted,todoId) => {
    setTodos(currentTodo => {
      return currentTodo.map(todo => {
        if (todo.id == todoId) {
          return { ...todo, isCompleted }
        }
        return todo
      })
     })
  }

  const handleDeleteTodo = (todoId) => {
    setTodos(currentTodos => {
    return currentTodos.filter( todo => todo.id != todoId)
    })
  }
  return (
    <>
      <InputForm onSubmit={addTodoOnSubmit} />
      <h1 className="header" id="todo-header">To - do list</h1>
      <TodoList todos={todos}
        handleCheckboxChange={handleCheckboxChange}
        handleDeleteTodo={handleDeleteTodo} />
    </>
  );
}

export default App