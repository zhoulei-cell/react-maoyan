import { combineReducers } from "redux"

import city from "./city"
import load from "./load"

export default combineReducers({
  city,
  load
})