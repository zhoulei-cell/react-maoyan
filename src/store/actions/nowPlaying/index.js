import * as TYPE from "@store/action-types"
import store from "@store"
import { getNowPlaying } from "@network/api/film"

export const update = (payload) => ({
  type: TYPE.NOWPLAYING_UPDATE,
  payload
})

export const getData = () => (dispatch) => {
  getNowPlaying(store.getState().city.cityId).then(res => {
    const list = res.data.data.movieList
    dispatch(update(list))
  })
}