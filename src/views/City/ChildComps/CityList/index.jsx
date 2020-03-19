import React from "react"
import CityListHot from "../CityListHot"
import CityListItem from "../CityListItem"

const CityList = React.forwardRef((props, ref) => (
  <div className="city-list" ref={ref}>
    <CityListHot hotList={props.hotList}/>
    <CityListItem cityList={props.cityList}/>
  </div>
)) 

export default CityList