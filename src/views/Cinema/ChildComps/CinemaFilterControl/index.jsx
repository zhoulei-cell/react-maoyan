import React, { useState } from "react"
import classNames from "classnames"

import CinemaFilterMask from "../CinemaFilterMask"
import "./index.css"

const CinemaFilterControl = () => {
  const tabArr = ["全程", "品牌", "特色"]
  const [isShowMask, setIsShowMask] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(-1)
  const showMask = (index) => {
    setIsShowMask(true)
    setCurrentIndex(index)
  }
  const hideMask = () => {
    setIsShowMask(false)
    setCurrentIndex(-1)
  }
  return (
    <div className="filter-control">
      <ul className="tab-list">
        {
          tabArr.map((item, index) => (
            <li className={classNames(["tab-item", {line: index >= 1}])} key={index} onClick={(e) => showMask(index, e)}>
              <span className={classNames({active: index === currentIndex})}>{item}</span>
              <i className={classNames(["iconfont", "icon-xiajiantou", {icon: index === currentIndex}])}></i>
            </li>
          ))
        }
      </ul>
      {
        isShowMask ? <CinemaFilterMask hideMask={hideMask}/> : null
      }
    </div>
  )
}

export default CinemaFilterControl
