import React, { useEffect, useReducer } from "react"
import classNames from "classnames"
import "./index.css"

const CityNavReducer = (state, action) => {
  switch(action.type) {
    case "area":
      return "area"
    case "subway":
      return "subway"
    default:
      return state
  }
}

const CinemaFilterMask = (props) => {
  const { hideMask } = props
  const [cityNav, cityNavDispatch] = useReducer(CityNavReducer, "area")

  const switchCityNav = (index, e) => {
    e.stopPropagation()
    index === 0 ? cityNavDispatch({type: "area"}) : cityNavDispatch({type: "subway"})
  }

  return (
    <div className="mask-layer" onClick={hideMask}>
      <div className="all-city">
        <ul className="all-city-nav">
          <li className={classNames(["city-nav-item"])} onClick={(e) => switchCityNav(0, e)}>商区</li>
          <li className={classNames(["city-nav-item"])} onClick={(e) => switchCityNav(1, e)}>地铁站</li>
          <li className={classNames(["line", {active: cityNav === "subway"}])}></li>
        </ul>
      </div>

      <div className="brand"></div>

      <div className="features"></div>
    </div>
  )
}

export default CinemaFilterMask