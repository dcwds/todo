import { Todo as TodoType, toggleTodo, removeTodo } from "../todos/todos.slice"
import { useDispatch } from "react-redux"
import "./todo.css"

const Todo = (todo: TodoType) => {
  const dispatch = useDispatch()

  return (
    <li className="todo">
      <input
        data-testid="todo-checkbox"
        type="checkbox"
        defaultChecked={todo.complete}
        onClick={(e) => dispatch(toggleTodo(todo))}
      />
      <div className="flex justify-between w-full">
        <p data-testid="todo-text" className="todo-text">
          {todo.text}
        </p>
        <button
          className="hover:text-white font-bold text-xs text-gray-normal transition-opacity"
          data-testid="todo-remove"
          onClick={(e) => dispatch(removeTodo(todo))}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default Todo
