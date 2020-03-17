import axios from "../axios"

export function getCityList() {
  return new Promise(resolve => {
    axios.get("/api/cityList").then(res => {
      resolve(res)
    }).catch(err => {
      throw new Error("Server request error: " + err)
    })
  })
}