import {
  setTodosFilter,
  selectTodosFilter,
  TodosFilter as TodosFilterType
} from "../todos/todos.slice"
import { useDispatch, useSelector } from "react-redux"

type TodosFilterProps = {
  name: TodosFilterType
}
const TodosFilter = ({ name }: TodosFilterProps) => {
  const dispatch = useDispatch()
  const currentFilter = useSelector(selectTodosFilter)
  const activeFilter = currentFilter === name

  return (
    <button
      className={`btn-filter ${activeFilter ? "active" : ""}`}
      data-testid={`todos-filter-${name}`}
      onClick={(e) => dispatch(setTodosFilter(name))}
    >
      {name}
    </button>
  )
}

export default TodosFilter
