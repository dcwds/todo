import React, { useEffect } from "react"
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
import { ReactComponent as GitHubLogo } from "../../assets/github-logo.svg"

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
      <div className="bg-gray-900">
        <header className="flex items-center justify-between mx-auto px-3 md:px-4 py-4 md:py-5 mb-8 md:mb-16 md:max-w-xl">
          <a
            href="/"
            className="font-bold hover:text-blue-400 transition-colors"
          >
            Todos
          </a>
          <a
            href="https://github.com/dcwds/todo"
            className="hover:opacity-100 opacity-70 transition-opacity"
          >
            <GitHubLogo height="28" width="28" />
          </a>
        </header>
      </div>

      <div className="mx-auto p-3 md:p-4 md:max-w-xl">
        <div className="flex p-3 md:p-4 space-x-3 md:space-x-4 mb-8 md:mb-12 bg-gray-900 rounded-lg">
          <AddTodo />
        </div>

        {!!todos.length && (
          <div className="flex mb-6 md:mb-8 space-x-4">
            <TodosFilters />
          </div>
        )}

        {!!filteredTodos.length && <Todos todos={filteredTodos} />}
      </div>
    </div>
  )
}

export default App
