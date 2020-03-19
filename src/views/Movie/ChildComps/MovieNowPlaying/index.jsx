import React from "react"
import NowPlayingList from "./ChildComps/NowPlayingList"
import "./index.css"

const NowPlaying = () => {
  return (
    <div className="now-playing-wrap">
      <NowPlayingList />
    </div>
  )
}

export default NowPlaying