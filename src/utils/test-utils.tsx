import React, { ReactElement, ComponentType } from "react"
import { render, RenderResult } from "@testing-library/react"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"

export const makeMockStore = (options = {}) => {
  const store = configureStore([])
  const mockStore = store(options)

  const dispatch = mockStore.dispatch
  mockStore.dispatch = jest.fn(dispatch)

  return mockStore
}

type WrapperProps = {
  children: NonNullable<React.ReactNode>
}

export const renderWithProvider = (
  ui: ReactElement,
  {
    initialState = { todos: { filter: "all", items: [] } },
    store = makeMockStore(initialState),
    ...renderOptions
  } = {}
): RenderResult => {
  const Wrapper = ({ children }: WrapperProps): ReactElement => {
    return <Provider store={store}>{children}</Provider>
  }

  return render(ui, { wrapper: Wrapper as ComponentType, ...renderOptions })
}
