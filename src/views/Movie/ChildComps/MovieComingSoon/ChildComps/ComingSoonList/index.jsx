import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import action from "@store/actions"
import ComingSoonListCard from "../ComingSoonListCard"

const ComingSoonList = () => {
  const dispatch = useDispatch()
  const comingSoonList = useSelector(state => state.comingSoon)
  
  const initState = () => {
    if (comingSoonList.length === 0) {
      dispatch(action.comingSoon.getData())
    }
  }

  useEffect(() => {
    initState()
  } ,[])

  return (
    <ul className="coming-soon-list">
      {
        comingSoonList.map(item => (
          <ComingSoonListCard item={item} key={item.id}/>
        ))
      }
    </ul>
  )
}

export default ComingSoonList