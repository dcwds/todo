import { Todo as TodoType, toggleTodo } from "../todos/todos.slice"
import { useDispatch } from "react-redux"
import "./todo.css"

const Todo = (todo: TodoType) => {
  const dispatch = useDispatch()

  return (
    <li className="todo flex space-x-4 py-2">
      <input
        data-testid="todo-checkbox"
        type="checkbox"
        defaultChecked={todo.complete}
        onClick={(e) => dispatch(toggleTodo(todo))}
      />
      <p data-testid="todo-text" className="todo-text">
        {todo.text}
      </p>
    </li>
  )
}

export default Todo
