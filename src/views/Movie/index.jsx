import React, { Fragment, useState } from "react"
import { useSelector } from "react-redux"
import TabBar from "@/components/TabBar"
import MovieHeader from "./ChildComps/MovieHeader"
import MovieTabControl from "./ChildComps/MovieTabControl"
import MovieNowPlaying from "./ChildComps/MovieNowPlaying"
import MovieComingSoon from "./ChildComps/MovieComingSoon"
import "./index.css"

const Movie = (props) => {
  const [category, setCategory] = useState("nowPlaying")
  const city = useSelector(state => state.city)

  const handleCategory = (category) => {
    setCategory(category)
  }
  const goCity = () => {
    props.history.push("/city")
  }
  const goSearch = () => {
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