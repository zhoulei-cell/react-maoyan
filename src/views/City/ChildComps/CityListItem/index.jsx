import React, { memo, Fragment } from "react"
import "./index.css"

function CityListItem(props) {
  let { alphabet, cityList } = props
  return (
    <Fragment>
      {
        cityList.map(item => (
          <div className="city-list-box" key={item.key}>
            <h5 className="city-list-title">{item.key}</h5>
            <ul className="city-sort-list">
              {
                item.list.map(list => (
                  <li className="city-sort-list-item" key={list.id}>{list.nm}</li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </Fragment>
  )
}

export default memo(CityListItem)
