import React, { memo } from "react"
import { withRouter } from "react-router-dom"
import { useDispatch } from "react-redux"
import action from "@store/actions"
import "./index.css"

const CityListItem = (props) => {
  const { cityList } = props
  const dispatch = useDispatch()

  const setCity = (city) => {
    dispatch(action.city.setCity(city))
    props.history.goBack()
  }
  
  return (
    cityList.map(item => (
      <div className="city-list-box" key={item.key}>
        <h5 className="city-list-title">{item.key}</h5>
        <ul className="city-sort-list">
          {
            item.list.map(list => (
              <li className="city-sort-list-item" onClick={() => setCity({cityId: list.id, cityName: list.nm})} key={list.id}>{list.nm}</li>
            ))
          }
        </ul>
      </div>
    ))
  )
}

export default memo(withRouter(CityListItem))
