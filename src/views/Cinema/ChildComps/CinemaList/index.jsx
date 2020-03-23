import React from "react"
import "./index.css"

const tagName = {
  allowRefund: "退",
  snack: "小吃",
  endorse: "改签",
  sell: "折扣卡",
  giftTag: "礼品卡"
}

function CinemaList(props) {
  const { cinemaList } = props
  return (
    <ul className="cinema-list">
      {
        cinemaList.map(item => {
          return (<li className="cinema-list-item" key={item.id}>
            <h3 className="title t-of-h">{item.nm}</h3>
            <p className="address">
              <span className="addr t-of-h">{item.addr}</span>
              <span className="distance">{item.distance}</span>
            </p>
            <p className="tag-box">
              {
                Object.keys(item.tag).map((key, index) => {
                  let val = item.tag[key]
                  return val && !Array.isArray(val) && val !== "折扣卡" ? <span key={index + 'b'} className={key === "snack" || key === "sell" ? "tag yellow" : "tag blue"}>{tagName[key]}</span> : null
                })
              }
              {
                item.tag.hallType.map(hall => (
                  hall ? <span key={hall} className="tag blue">{hall}</span> : null
                ))
              }
            </p>
          </li>
        )})
      }
    </ul>
  )
}

export default CinemaList
