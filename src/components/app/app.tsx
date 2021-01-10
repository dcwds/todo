import AddTodo from "../add-todo"
import Todos from "../todos"
import TodosFilters from "../todos-filters"
import { useSelector } from "react-redux"
import { selectFilteredTodos } from "../todos/todos.slice"
import "./app.css"

function App() {
  const todos = useSelector(selectFilteredTodos)

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo</h1>

        <AddTodo />
      </header>

      <TodosFilters />
      {!!todos.length && <Todos todos={todos} />}
    </div>
  )
}

export default App
