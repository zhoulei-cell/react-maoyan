import React, { memo } from "react"
import { withRouter } from "react-router-dom"

import TitleBar from "@/components/TitleBar"
function CityHeader(props) {
  function back() {
    props.history.goBack()
  }
  return (
    <TitleBar leftText="返回" leftHandle={back}>城市选择</TitleBar>
  )
}

export default memo(withRouter(CityHeader))