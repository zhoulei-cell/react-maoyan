import * as TYPE from "@store/action-types"

const initState = []

const reducer = (state = initState, action) => {
  switch(action.type) {
    case TYPE.COMINGSOON_UPDATE:
      return [...state, ...action.payload]
    default:
      return state
  }
}

export default reducer