import React from "react"
import "./index.css"

import CityHeader from "./ChildComps/CityHeader"
import CityList from "./ChildComps/CityList"

import AlphabetIndex from "@/components/AlphabetIndex"

function City() {
  return (
    <div className="city-wrap">
      <CityHeader/>
      <div className="city-list">
        <CityList/>
      </div>
      <AlphabetIndex></AlphabetIndex>
    </div>
  )
}

export default City