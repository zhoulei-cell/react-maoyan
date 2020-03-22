import React from 'react'
import { useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import "./index.css"

function CinemaTopBar(props) {
  const { history } = props
  const city = useSelector(state => state.city)

  const goCityPage = () => {
    history.push("/city")
  }

  const goSearchPage = () => {
    history.push("/search")
  }

  return (
    <div className="top-bar">
      <div className="city-box" onClick={goCityPage}>
        <span className="city">{city.cityName}</span>
        <i className="iconfont icon-xiajiantou"></i>
      </div>
      <div className="search-box" onClick={goSearchPage}>
        <i className="iconfont icon-search"></i>
        <span>搜影院</span>
      </div>
    </div>
  )
}

export default withRouter(CinemaTopBar)
