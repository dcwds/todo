import React from "react"
import { renderWithProvider, makeMockStore } from "../../utils/test-utils"
import App from "./app"

describe("<App />", () => {
  it("renders without crashing", () => {
    const store = makeMockStore({ todos: { filter: "all", items: [] } })
    renderWithProvider(<App />, { store })
  })
})
