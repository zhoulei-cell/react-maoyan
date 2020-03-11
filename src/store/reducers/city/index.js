import * as TYPE from "../../action-types"

const initState = "泸州"
const reducer = (state = initState, action) => {
  switch(action.type) {
    case TYPE.CITY_SET:
      return action.payload
    default:
      return state
  }
}

export default reducer