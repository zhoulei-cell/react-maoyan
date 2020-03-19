import React, { memo } from "react"
import { withRouter } from "react-router-dom"
import { useDispatch } from "react-redux"
import action from "@store/actions"
import "./index.css"

function CityListHot(props) {
  const { hotList } = props
  const dispatch = useDispatch()

  function setCity(city) {
    dispatch(action.city.setCity(city))
    props.history.goBack()
  }
  return (
    <div className="city-hot-box">
      <h5 className="city-hot-title">热门城市</h5>
      <ul className="city-hot-list">
        {
          hotList.map(hot => (
            <li className="city-hot-list-item" onClick={() => setCity({cityId: hot.id, cityName: hot.nm})} key={hot.id}>{hot.nm}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default memo(withRouter(CityListHot))
