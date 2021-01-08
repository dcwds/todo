import AddTodo from "./add-todo"
import { cleanup, fireEvent } from "@testing-library/react"
import { MockStore } from "redux-mock-store"
import { renderWithProvider, makeMockStore } from "../../utils/test-utils"
import { Todo, addTodo } from "../todos/todos.slice"

describe("<AddTodo />", () => {
  let store: MockStore
  const mockTodo: Todo = {
    id: 0,
    text: "test todo",
    complete: false
  }
  const mockAddTodoAction = {
    type: addTodo.type,
    payload: mockTodo
  }

  beforeEach(() => {
    store = makeMockStore()
    store.clearActions()
  })

  afterEach(cleanup)

  it("renders correctly", () => {
    renderWithProvider(<AddTodo />, { store })
  })

  it("calls addTodo action when input with value is submitted via button", () => {
    const { getByTestId } = renderWithProvider(<AddTodo />, { store })

    fireEvent.change(getByTestId("add-todo-input"), {
      target: { value: mockTodo.text }
    })

    fireEvent.click(getByTestId("add-todo-button"))

    expect(store.getActions()).toEqual([mockAddTodoAction])
  })
})
