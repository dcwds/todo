import { useEffect } from "react"
import AddTodo from "../add-todo"
import Todos from "../todos"
import TodosFilters from "../todos-filters"
import { useSelector } from "react-redux"
import {
  selectTodos,
  selectCompleteTodos,
  selectIncompleteTodos,
  selectFilteredTodos
} from "../todos/todos.slice"
import "./app.css"

function App() {
  const todos = useSelector(selectTodos)
  const completeTodos = useSelector(selectCompleteTodos)
  const incompleteTodos = useSelector(selectIncompleteTodos)
  const filteredTodos = useSelector(selectFilteredTodos)

  useEffect(() => {
    const titleTemplate = " - Todos"

    if (todos.length && incompleteTodos.length) {
      document.title = `${completeTodos.length}/${todos.length} complete ${titleTemplate}`
    } else {
      document.title = `Write a todo ${titleTemplate}`
    }
  })

  return (
    <div className="app">
      <header className="mx-auto px-8 py-8 mb-16 md:max-w-xl">
        <h1 className="font-bold">Todos</h1>
      </header>

      <div className="mx-auto p-2 md:p-4 md:max-w-xl">
        <div className="flex p-4 space-x-2 md:space-x-4 mb-12 bg-gray-900 rounded-lg">
          <AddTodo />
        </div>

        {!!todos.length && (
          <div className="flex mb-8 space-x-4">
            <TodosFilters />
          </div>
        )}

        {!!filteredTodos.length && <Todos todos={filteredTodos} />}
      </div>
    </div>
  )
}

export default App
