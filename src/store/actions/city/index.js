import * as TYPE from "../../action-types"

const city = {

  setCity(payload) {
    return {
      type: TYPE.CITY_SET,
      payload
    }
  }

}

export default city