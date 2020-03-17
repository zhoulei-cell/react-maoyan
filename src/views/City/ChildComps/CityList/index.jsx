import React, { Fragment } from "react"

import CityListHot from "../CityListHot"
import CityListItem from "../CityListItem"

function CityList(props) {
  return (
    <Fragment>
      <CityListHot hotList={props.hotList}/>
      <CityListItem cityList={props.cityList}/>
    </Fragment>
  )
}

export default CityList