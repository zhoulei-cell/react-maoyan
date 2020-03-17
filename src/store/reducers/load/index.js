import * as TYPE from "@store/action-types"
const initState = false

const reducer = (state = initState, action) => {
  switch(action.type) {
    case TYPE.LOAD_SET:
      return !state
    default:
      return state
  }
}

export default reducer