import React, { Fragment, useState } from "react"

import { addTodo } from "../todos/todos.slice"
import { useDispatch } from "react-redux"

const AddTodo = () => {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState("")

  const handleAddTodoOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle addTodo when `Enter` is pressed on field.
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      handleAddTodo()
    }
  }

  const handleAddTodo = () => {
    if (todo.length) {
      dispatch(addTodo(todo))
    }

    setTodo("")
  }

  return (
    <Fragment>
      <input
        className="w-full py-2 px-4 rounded-md bg-gray-50 text-gray-900 placeholder-gray-900"
        data-testid="add-todo-input"
        type="text"
        placeholder="Write a todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={(e) => handleAddTodoOnEnter(e)}
      />
      <button
        className="btn"
        data-testid="add-todo-button"
        onClick={handleAddTodo}
        disabled={!todo.length}
      >
        Add
      </button>
    </Fragment>
  )
}

export default AddTodo
