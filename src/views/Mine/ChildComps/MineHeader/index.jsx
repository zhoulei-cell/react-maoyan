import React, { memo } from "react"
import { withRouter } from "react-router-dom"
import TitleBar from "@/components/TitleBar"


const MineHeader = (props) => {
  return (
    <TitleBar>我的</TitleBar>
  )
}

export default memo(withRouter(MineHeader))