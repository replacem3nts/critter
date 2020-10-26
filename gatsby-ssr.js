import React from "react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "./src/reducers"

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={configureStore({ reducer: rootReducer })}>
      {element}
    </Provider>
  )
}
