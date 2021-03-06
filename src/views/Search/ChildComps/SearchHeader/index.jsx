import React, { memo } from "react"
import { withRouter } from "react-router-dom"
import TitleBar from "@/components/TitleBar"

const SearchHeader = (props) => {
  const back = () => {
    props.history.goBack()
  }
  return (
    <TitleBar leftIcon="icon-fanhui1" leftHandle={back}>猫眼电影</TitleBar>
  )
}

export default memo(withRouter(SearchHeader))