import * as TYPE from "@store/action-types"
import store from "@store"
import { getComingSoon } from "@network/api/film"

export const update = (payload) => ({
  type: TYPE.COMINGSOON_UPDATE, 
  payload
})

export const getData = () => (dispatch) => {
  getComingSoon(store.getState().city.cityId).then(res => {
    const list = res.data.data.comingList
    dispatch(update(list))
  })
}