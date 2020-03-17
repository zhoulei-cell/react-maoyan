import React, { memo } from "react"
import "./index.css"

function CityListHot(props) {
  const { hotList } = props
  return (
    <div className="city-hot-box">
      <h5 className="city-hot-title">热门城市</h5>
      <ul className="city-hot-list">
        {
          hotList.map(hot => (
            <li className="city-hot-list-item" key={hot.id}>{hot.nm}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default memo(CityListHot)
