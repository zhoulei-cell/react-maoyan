import React, { memo, Fragment } from "react"
import "./index.css"

function CityListItem() {
  let sortArr = [{index: "A", list: ["鞍山", "安庆", "安阳"]}]
  return (
    <Fragment>
      {
        sortArr.map(item => (
          <div className="city-list-box" key={item.index}>
            <h5 className="city-list-title">{item.index}</h5>
            <ul className="city-sort-list">
              {
                item.list.map(list => (
                  <li className="city-sort-list-item" key={list}>{list}</li>
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
