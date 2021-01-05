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
        id: mockTodo.id,
        text: mockTodo.text,
        complete: !mockTodo.complete
      }
    ])
  })

  it("increments todo IDs", () => {
    const todo1 = "this is a todo"
    const todo2 = "this is another todo"

    expect(addTodo(todo1).payload).toEqual({
      id: 1,
      complete: false,
      text: todo1
    })
    expect(addTodo(todo2).payload).toEqual({
      id: 2,
      complete: false,
      text: todo2
    })
  })
})
