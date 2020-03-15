import React, { memo } from "react"
import "./index.css"

function CityListHot(props) {
  const hotArr = ["北京", "上海", "广州", "天津", "杭州", "南京", "成都"]
  return (
    <div className="city-hot-box">
      <h5 className="city-hot-title">热门城市</h5>
      <ul className="city-hot-list">
        {
          hotArr.map((hot, index) => (
            <li className="city-hot-list-item" key={index}>{hot}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default memo(CityListHot)
