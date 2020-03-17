import React from "react"
import NowPlayingCard from "../NowPlayingCard"

function NowPlayingList(props) {
  let { nowPlayingList } = props
  return (
    <ul className="nwo-playing-list">
      {
        nowPlayingList.map(item => (
          <NowPlayingCard item={item} key={item.id}/>
        ))
      }
    </ul>
  )
}

export default NowPlayingList