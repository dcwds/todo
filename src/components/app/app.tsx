import AddTodo from "../add-todo"
import "./app.css"

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo</h1>

        <AddTodo />
      </header>
    </div>
  )
}

export default App
