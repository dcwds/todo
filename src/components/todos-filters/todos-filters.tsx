import { Fragment } from "react"
import { TodosFilter as TodosFilterType } from "../todos/todos.slice"
import TodosFilter from "../todos-filter"

const TodosFilters = () => {
  const filters: TodosFilterType[] = ["all", "complete", "incomplete"]

  return (
    <Fragment>
      {filters.map((filter) => (
        <TodosFilter name={filter} key={filter} />
      ))}
    </Fragment>
  )
}

export default TodosFilters
