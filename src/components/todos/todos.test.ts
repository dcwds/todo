import todosReducer, {
  Todo,
  addTodo,
  removeTodo,
  toggleTodo
} from "./todos.slice"

const mockTodo: Todo = {
  id: 0,
  text: "test",
  complete: false
}

describe("Todos Reducer", () => {
  it("handles addTodo", () => {
    expect(todosReducer([], addTodo(mockTodo.text))).toEqual([mockTodo])
  })

  it("handles removeTodo", () => {
    expect(todosReducer([mockTodo], removeTodo(mockTodo))).toEqual([])
  })

  it("handles toggleTodo", () => {
    expect(todosReducer([mockTodo], toggleTodo(mockTodo))).toEqual([
      {
        ...mockTodo,
        complete: !mockTodo.complete
      }
    ])
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

    expect(todosReducer([todo1], addTodo(todo2.text))).toEqual([todo1, todo2])
  })
})
