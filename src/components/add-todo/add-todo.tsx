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
        type="text"
        placeholder="Todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyPress={(e) => handleAddTodoOnEnter(e)}
      />
      <button onClick={handleAddTodo} disabled={!todo.length}>
        Add
      </button>
    </Fragment>
  )
}

export default AddTodo
