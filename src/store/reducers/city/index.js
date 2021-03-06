import * as TYPE from "@store/action-types"

const initState = {
  cityId: 10,
  cityName: "泸州"
}
const reducer = (state = initState, action) => {
  switch(action.type) {
    case TYPE.CITY_SET:
      return action.payload
    default:
      return state
  }
}

export default reducer