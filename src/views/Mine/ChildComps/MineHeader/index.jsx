import React, { memo } from "react"
import { withRouter } from "react-router-dom"

import TitleBar from "@/components/TitleBar"
function MineHeader(props) {
  function back() {
    props.history.goBack()
  }
  return (
    <TitleBar leftText="返回" leftHandle={back}>猫眼电影</TitleBar>
  )
}

export default memo(withRouter(MineHeader))