import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../store"

export type Todo = {
  id: number
  text: string
  complete: boolean
}

export type TodosFilter = "all" | "complete" | "incomplete"

type TodosState = {
  filter: TodosFilter
  items: Todo[]
}

const initialState: TodosState = {
  filter: "all",
  items: []
}

const nextTodoId = (todos: Todo[]) =>
  todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(s, action: PayloadAction<string>) {
      s.items.push({
        id: nextTodoId(s.items),
        text: action.payload,
        complete: false
      })
    },
    removeTodo(s, action: PayloadAction<Todo>) {
      return {
        ...s,
        items: s.items.filter((todo) => action.payload.id !== todo.id)
      }
    },
    toggleTodo(s, action: PayloadAction<Todo>) {
      return {
        ...s,
        items: s.items.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete }
          }

          return todo
        })
      }
    },
    setTodosFilter(s, action: PayloadAction<TodosFilter>) {
      return {
        ...s,
        filter: action.payload
      }
    }
  }
})

export const selectTodosFilter = (s: RootState) => s.todos.filter
export const selectTodos = (s: RootState) => s.todos.items
export const selectCompleteTodos = createSelector(
  selectTodos,
  (todos: Todo[]) => todos.filter((todo) => todo.complete)
)
export const selectIncompleteTodos = createSelector(
  selectTodos,
  (todos: Todo[]) => todos.filter((todo) => !todo.complete)
)
export const selectFilteredTodos = createSelector(
  selectTodos,
  selectCompleteTodos,
  selectIncompleteTodos,
  selectTodosFilter,
  (todos, completeTodos, incompleteTodos, filter) => {
    switch (filter) {
      case "complete":
        return completeTodos
      case "incomplete":
        return incompleteTodos
      default:
        return todos
    }
  }
)

export const {
  addTodo,
  removeTodo,
  toggleTodo,
  setTodosFilter
} = todosSlice.actions

export default todosSlice.reducer
