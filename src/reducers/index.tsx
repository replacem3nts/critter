import { combineReducers } from "redux"

function counter(state = 0, action: { type: string }) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    default:
      return state
  }
}
export const rootReducer = combineReducers({
  counter,
})
