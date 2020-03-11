import React, { Fragment, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import action from "@/store/actions"

import TabBar from "@/components/TabBar"
import "./index.css"

import MovieHeader from "./ChildComps/MovieHeader"
import MovieTabControl from "./ChildComps/MovieTabControl"
import MovieNowPlaying from "./ChildComps/MovieNowPlaying"
import MovieComingSoon from "./ChildComps/MovieComingSoon"

function Movie(props) {

  const [category, setCategory] = useState("nowPlaying")
  const city = useSelector(state => state.city)
  const dispatch = useDispatch()

  function setCity(city) {
    dispatch(action.city.setCity(city))
  }

  function handleCategory(category) {
    setCategory(category)
  }

  function goCity() {
    props.history.push("/city")
  }

  function goSearch() {
    props.history.push("/search")
  }

  return (
    <Fragment>
      <div className="main">
        <MovieHeader/>
        <MovieTabControl goCity={goCity} goSearch={goSearch} category={category} handleCategory={handleCategory} city={city}/>
        {category === "nowPlaying" ? <MovieNowPlaying/> : null}
        {category === "comingSoon" ? <MovieComingSoon/> : null}
      </div>
      <TabBar/>
    </Fragment>
  )
}

export default Movie