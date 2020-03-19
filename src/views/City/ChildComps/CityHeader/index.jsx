import React, { memo } from "react"
import { withRouter } from "react-router-dom"
import TitleBar from "@/components/TitleBar"

const CityHeader = (props) => {
  const back = () => {
    props.history.goBack()
  }
  return (
    <TitleBar leftIcon="icon-fanhui1" leftHandle={back}>城市选择</TitleBar>
  )
}

export default memo(withRouter(CityHeader))