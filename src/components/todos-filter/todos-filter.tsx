import {
  setTodosFilter,
  TodosFilter as TodosFilterType
} from "../todos/todos.slice"
import { useDispatch } from "react-redux"

type TodosFilterProps = {
  name: TodosFilterType
}
const TodosFilter = ({ name }: TodosFilterProps) => {
  const dispatch = useDispatch()

  return (
    <button
      data-testid={`todos-filter-${name}`}
      onClick={(e) => dispatch(setTodosFilter(name))}
    >
      {name}
    </button>
  )
}

export default TodosFilter
