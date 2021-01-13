import Todo from "../todo"
import { Todo as TodoType } from "./todos.slice"
import "./todos.css"

type TodosProps = {
  todos: TodoType[]
}

const Todos = ({ todos }: TodosProps) => (
  <ul className="flex flex-col">
    {todos.map((todo) => (
      <Todo {...todo} key={todo.id} />
    ))}
  </ul>
)

export default Todos
