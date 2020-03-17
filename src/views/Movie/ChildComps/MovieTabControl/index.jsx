import React, { memo } from "react"
import classNames from "classnames"
import "./index.css"

function MovieTabControl(props) {
  let {goCity, goSearch, category, handleCategory, city} = props
  let nowPlaying = classNames("movie-class-item", {active: category === "nowPlaying"})
  let comingSoon = classNames("movie-class-item", {active: category === "comingSoon"})
  return (
    <div className="tab-control">
      <div className="city-entry" onClick={goCity}>
        <span>{city.cityName}</span>
        <i className="iconfont icon-xiajiantou"></i>
      </div>
      <div className="movie-class-switch">
        <div className={nowPlaying} onClick={() => handleCategory("nowPlaying")}>
          <h2>正在热映</h2>
        </div>
        <div className={comingSoon} onClick={() => handleCategory("comingSoon")}>
          <h2>即将上映</h2>
        </div>

        <div className={`tab-link ${category}`}></div>
      </div>
      <div className="search-entry" onClick={goSearch}>
        <i className="iconfont icon-search"></i>
      </div>
    </div>
  )
}

export default memo(MovieTabControl)