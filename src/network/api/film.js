import axios from "../axios"

export function getNowPlaying(cityId) {
  return new Promise(resolve => {
    axios.get(`/api/movieOnInfoList?cityId=${cityId}`).then(res => {
      resolve(res)
    }).catch(err => {
      throw new Error("Server request error: " + err)
    })
  })
}

export function getComingSoon(cityId) {
  return new Promise(resolve => {
    axios.get(`/api/movieComingList?cityId=${cityId}`).then(res => {
      resolve(res)
    }).catch(err => {
      throw new Error("Server request error: " + err)
    })
  })
}

export function searchFilms(cityId, kw) {
  return new Promise(resolve => {
    axios.get("/api/searchList", {
      params: {
        cityId,
        kw
      }
    }).then(res => {
      resolve(res)
    }).catch(err => {
      throw new Error("Server request error: " + err)
    })
  })
}