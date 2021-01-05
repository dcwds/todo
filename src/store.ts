import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import todosReducer from "./components/todos/todos.slice"

export const store = configureStore({
  reducer: {
    todos: todosReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
