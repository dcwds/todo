import todosReducer, {
  Todo,
  addTodo,
  removeTodo,
  toggleTodo,
  setTodosFilter
} from "./todos.slice"

const mockTodo: Todo = {
  id: 0,
  text: "test",
  complete: false
}

describe("Todos Reducer", () => {
  it("handles addTodo", () => {
    expect(
      todosReducer({ filter: "all", items: [] }, addTodo(mockTodo.text))
    ).toEqual({ filter: "all", items: [mockTodo] })
  })

  it("handles removeTodo", () => {
    expect(
      todosReducer({ filter: "all", items: [mockTodo] }, removeTodo(mockTodo))
    ).toEqual({ filter: "all", items: [] })
  })

  it("handles toggleTodo", () => {
    expect(
      todosReducer({ filter: "all", items: [mockTodo] }, toggleTodo(mockTodo))
    ).toEqual({
      filter: "all",
      items: [
        {
          ...mockTodo,
          complete: !mockTodo.complete
        }
      ]
    })
  })

  it("handles setTodosFilter", () => {
    expect(
      todosReducer({ filter: "all", items: [] }, setTodosFilter("all"))
    ).toEqual({ filter: "all", items: [] })
  })

  it("increments todo IDs", () => {
    const todo1 = {
      id: 0,
      text: "this is a todo",
      complete: false
    }

    const todo2 = {
      id: 1,
      text: "this is another todo",
      complete: false
    }

    expect(
      todosReducer({ filter: "all", items: [todo1] }, addTodo(todo2.text))
    ).toEqual({ filter: "all", items: [todo1, todo2] })
  })
})
