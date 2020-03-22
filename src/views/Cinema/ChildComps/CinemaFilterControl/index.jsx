import React from "react"
import classNames from "classnames"
import "./index.css"

const CinemaFilterControl = () => {
  const tabArr = ["全程", "品牌", "特色"]
  return (
    <div className="filter-control">
      <ul className="tab-list">
        {
          tabArr.map((item, index) => (
            <li className={classNames(["tab-item", {line: index >= 1}])} key={index}>
              <span>{item}</span>
              <i className="iconfont icon-xiajiantou"></i>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CinemaFilterControl
