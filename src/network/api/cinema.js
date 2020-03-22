import axios from "../axios"

export const getFilter = () => {
  return axios.get("/filterCinemas").
  then(res => res).
  catch(err => {
    throw new Error("Server request error: " + err)
  })
}

export const getCinemaList = () => {
  return axios.get("/cinemaList").
  then(res => res).
  catch(err => {
    throw new Error("Server request error: " + err)
  })
}