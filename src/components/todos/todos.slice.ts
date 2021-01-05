import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../store"
import { nanoid } from "nanoid"

type Todo = {
  id: string
  text: string
  complete: boolean
}

type TodosState = Todo[]

const initialState: TodosState = []

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (s, action: PayloadAction<Todo>) => {
        s.push(action.payload)
      },
      prepare: (text: string) => {
        const id = nanoid()
        const complete = false

        return { payload: { id, text, complete } }
      }
    },
    removeTodo: (s, action: PayloadAction<Todo>) =>
      s.filter((todo) => action.payload.id !== todo.id)
  }
})

export const { addTodo, removeTodo } = todosSlice.actions

export const selectTodos = (s: RootState) => s.todos

export default todosSlice.reducer
