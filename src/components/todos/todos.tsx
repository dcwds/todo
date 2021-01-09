import Todo from "../todo"
import { Todo as TodoType } from "./todos.slice"
import "./todos.css"

type TodosProps = {
  todos: TodoType[]
}

const Todos = ({ todos }: TodosProps) => (
  <div className="todos">
    <ul>
      {todos.map((todo) => (
        <Todo {...todo} key={todo.id} />
      ))}
    </ul>
  </div>
)

export default Todos
