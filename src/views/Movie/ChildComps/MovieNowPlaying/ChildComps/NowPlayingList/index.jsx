import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import action from "@store/actions"
import NowPlayingCard from "../NowPlayingCard"

const NowPlayingList = () => {
  const dispatch = useDispatch()
  const nowPlayingList = useSelector(state => state.nowPlaying)

  const initState = () => {
    if (nowPlayingList.length === 0) {
      dispatch(action.nowPlaying.getData())
    }
  }
  useEffect(() => {
    initState()
  } ,[])
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