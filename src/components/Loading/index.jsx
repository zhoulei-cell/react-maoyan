import React from 'react'
import { useSelector } from "react-redux"
import "./css/base.css"

const Loading = () => {
  const isLoad = useSelector(state => state.load)
  return isLoad ? <LoadingChild/> : null
}

const LoadingChild = () => {
  return (
    <div className="loading">
      <div className="point-box">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Loading
