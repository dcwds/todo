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
    setTodo("")
    dispatch(addTodo(todo))
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
      <button onClick={handleAddTodo}>Add</button>
    </Fragment>
  )
}

export default AddTodo
