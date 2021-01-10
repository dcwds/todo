import { renderWithProvider, makeMockStore } from "../../utils/test-utils"
import { MockStore } from "redux-mock-store"
import Todo from "./todo"
import { Todo as TodoType, toggleTodo } from "../todos/todos.slice"
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
        text: getByTestId("todo-text")
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
})
