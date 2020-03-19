import { combineReducers } from "redux"

import city from "./city"
import load from "./load"
import comingSoon from "./comingSoon"
import nowPlaying from "./nowPlaying"

export default combineReducers({
  city,
  load,
  comingSoon,
  nowPlaying
})