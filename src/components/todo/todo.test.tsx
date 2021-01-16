import { renderWithProvider, makeMockStore } from "../../utils/test-utils"
import { MockStore } from "redux-mock-store"
import Todo from "./todo"
import { Todo as TodoType, toggleTodo, removeTodo } from "../todos/todos.slice"
import { fireEvent } from "@testing-library/react"

describe("<Todo />", () => {
  let store: MockStore
  let getTodoElements: Function

  const mockTodo: TodoType = {
    id: 0,
    text: "test todo",
    complete: false
  }

  beforeEach(() => {
    store = makeMockStore()
    getTodoElements = () => {
      const { getByTestId } = renderWithProvider(<Todo {...mockTodo} />, {
        store
      })

      return {
        checkbox: getByTestId("todo-checkbox"),
        text: getByTestId("todo-text"),
        remove: getByTestId("todo-remove")
      }
    }
  })

  it("renders without crashing", () => {
    renderWithProvider(<Todo {...mockTodo} />, { store })
  })

  it("handles toggleTodo when checkbox is clicked", () => {
    const { checkbox } = getTodoElements()

    fireEvent.click(checkbox)
    expect(store.dispatch).toHaveBeenCalledWith(toggleTodo(mockTodo))
  })

  it("handles removeTodo when remove button is clicked", () => {
    const { remove } = getTodoElements()

    fireEvent.click(remove)
    expect(store.dispatch).toHaveBeenCalledWith(removeTodo(mockTodo))
  })
})
