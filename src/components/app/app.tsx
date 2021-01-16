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
      <div className="bg-gray-dark">
        <header className="flex items-center justify-between mx-auto px-3 py-4 md:py-5 mb-8 md:mb-12 md:max-w-xl">
          <a
            href="/"
            className="font-bold hover:text-blue-400 transition-colors"
          >
            Todos
          </a>
          <a
            href="https://github.com/dcwds/todo"
            className="hover:text-white text-gray-normal transition-colors"
          >
            <GitHubLogo className="fill-current" height="28" width="28" />
          </a>
        </header>
      </div>

      <div className="mx-auto p-2 md:p-3 md:max-w-xl">
        <div className="flex p-3 space-x-3 mb-8 md:mb-12 bg-gray-dark rounded-lg">
          <AddTodo />
        </div>

        {!!todos.length && (
          <div className="flex mb-4 md:mb-6 space-x-3">
            <TodosFilters />
          </div>
        )}

        {!!filteredTodos.length && <Todos todos={filteredTodos} />}
      </div>
    </div>
  )
}

export default App
