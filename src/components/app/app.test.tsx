import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import App from "./app"

import configureStore from "redux-mock-store"

const store = configureStore([])

describe("<App />", () => {
  it("renders correctly", () => {
    const mockStore = store({ todos: [] })
    const div = document.createElement("div")

    render(
      <Provider store={mockStore}>
        <App />
      </Provider>,
      div
    )
  })
})
