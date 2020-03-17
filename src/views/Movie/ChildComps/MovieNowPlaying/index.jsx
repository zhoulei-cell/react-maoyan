import React, { useState, useEffect } from "react"
import "./index.css"

import { getNowPlaying } from "@network/api/film"
import NowPlayingList from "./ChildComps/NowPlayingList"


function NowPlaying(props) {
  const [nowPlayingList, setNowPlayingList] = useState([])
  useEffect(() => {
    getData()
  }, [])

  function getData() {
    getNowPlaying(props.city.cityId).then(res => {
      const list = res.data.data.movieList
      setNowPlayingList([...nowPlayingList, ...list])
    })
  }
  return (
    <div className="now-playing-wrap">
      <NowPlayingList nowPlayingList={nowPlayingList}/>
    </div>
  )
}

export default NowPlaying