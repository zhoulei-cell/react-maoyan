import React, {memo} from "react"
import { NavLink } from "react-router-dom"
import "./css/base"

const TabBar = () => {
  return (
    <ul className="tab-bar">
      <li className="tab-bar-item">
        <NavLink to="/movie" className="link">
          <i className="iconfont icon-dianying"></i>
          <span className="text">电影</span>
        </NavLink>
      </li>
      <li className="tab-bar-item">
        <NavLink to="/cinema" className="link">
          <i className="iconfont icon-dianyingshipin"></i>
          <span className="text">影院</span>
        </NavLink>
      </li>
      <li className="tab-bar-item">
        <NavLink to="/mine" className="link">
          <i className="iconfont icon-wode"></i>
          <span className="text">我的</span>
        </NavLink>
      </li>
    </ul>
  )
}

export default memo(TabBar)