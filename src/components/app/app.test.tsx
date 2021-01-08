import React from "react"
import { renderWithProvider } from "../../utils/test-utils"
import App from "./app"

describe("<App />", () => {
  it("renders correctly", () => {
    renderWithProvider(<App />)
  })
})
