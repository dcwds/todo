import { TodosFilter as TodosFilterType } from "../todos/todos.slice"
import TodosFilter from "../todos-filter"

const TodosFilters = () => {
  const filters: TodosFilterType[] = ["all", "complete", "incomplete"]

  return (
    <div className="todos-filters">
      {filters.map((filter) => (
        <TodosFilter name={filter} key={filter} />
      ))}
    </div>
  )
}

export default TodosFilters
