import React from "react"
import { render } from "react-dom"
import App from "./app"

it("renders correctly", () => {
  const div = document.createElement("div")
  render(<App />, div)
})
