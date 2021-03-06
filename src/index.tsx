import React, { StrictMode } from "react"
import { render } from "react-dom"
import "./index.css"
import App from "./components/app"
import { store } from "./store"
import { Provider } from "react-redux"
import reportWebVitals from "./reportWebVitals"

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
