import React from "react"
import "./index.css"

import filmImg from "@assets/image/film.png"
import mallImg from "@assets/image/mall.png"
const MineContainer = () => {
  return (
    <div className="container">
      <div className="order-wrap">
        <div className="order">
          <div className="title">我的订单</div>
          <div className="list">
            <div className="order-item film">
              <img src={filmImg}/>
              <span>电影</span>
            </div>
            <div className="order-item mall">
              <img src={mallImg}/>
              <span>商城</span>
            </div>
          </div>
        </div>
      </div>

      <div className="discount-group">
        <div className="group-item">
          <span>优惠券</span>
        </div>
        <div className="group-item">
          <span>折扣卡</span>
        </div>
      </div>
    </div>
  )
}

export default MineContainer