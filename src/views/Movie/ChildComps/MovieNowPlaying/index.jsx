import React from "react"
import "./index.css"

import NowPlayingList from "./ChildComps/NowPlayingList"

function NowPlaying() {
  return (
    <div className="now-playing-wrap">
      <NowPlayingList />
    </div>
  )
}

export default NowPlaying