import AddTodo from "../add-todo"
import Todos from "../todos"
import { useSelector } from "react-redux"
import { selectTodos } from "../todos/todos.slice"
import "./app.css"

function App() {
  const todos = useSelector(selectTodos)

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo</h1>

        <AddTodo />
      </header>

      {!!todos.length && <Todos todos={todos} />}
    </div>
  )
}

export default App
