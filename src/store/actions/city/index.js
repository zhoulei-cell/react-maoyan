import * as TYPE from "@store/action-types"

const city = {

  setCity(payload) {
    return {
      type: TYPE.CITY_SET,
      payload
    }
  }

}

export default city