import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../store"

export type Todo = {
  id: number
  text: string
  complete: boolean
}

type TodosState = Todo[]

const initialState: TodosState = []

let nextTodoId = 0

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (s, action: PayloadAction<Todo>) => {
        s.push(action.payload)
      },
      prepare: (text: string) => {
        return { payload: { id: nextTodoId++, text, complete: false } }
      }
    },
    removeTodo: (s, action: PayloadAction<Todo>) =>
      s.filter((todo) => action.payload.id !== todo.id),
    toggleTodo: (s, action: PayloadAction<Todo>) =>
      s.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }

        return todo
      })
  }
})

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions

export const selectTodos = (s: RootState) => s.todos

export default todosSlice.reducer
