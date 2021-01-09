import AddTodo from "./add-todo"
import { fireEvent } from "@testing-library/react"
import { MockStore } from "redux-mock-store"
import { renderWithProvider, makeMockStore } from "../../utils/test-utils"
import { addTodo } from "../todos/todos.slice"

describe("<AddTodo />", () => {
  let store: MockStore
  let getAddTodoElements: Function
  const mockTodoText = "test todo"

  beforeEach(() => {
    store = makeMockStore()
    getAddTodoElements = () => {
      const { getByTestId } = renderWithProvider(<AddTodo />, { store })

      return {
        input: getByTestId("add-todo-input"),
        button: getByTestId("add-todo-button")
      }
    }
  })

  it("renders correctly", () => {
    getAddTodoElements()
  })

  it("calls addTodo when input with value is submitted via button", () => {
    const { input, button } = getAddTodoElements()

    fireEvent.change(input, {
      target: { value: mockTodoText }
    })

    fireEvent.click(button)

    expect(store.dispatch).toHaveBeenCalledWith(addTodo(mockTodoText))
  })

  it("calls addTodo when input with value is submitted via Enter keypress", () => {
    const { input } = getAddTodoElements()

    fireEvent.change(input, {
      target: { value: mockTodoText }
    })

    fireEvent.keyDown(input, { key: "Enter", code: "Enter" })

    expect(store.dispatch).toHaveBeenCalledWith(addTodo(mockTodoText))
  })
})
