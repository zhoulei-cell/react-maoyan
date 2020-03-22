import React, { Fragment } from "react"
import MineHeader from "./ChildComps/MineHeader"
import TabBar from "@/components/TabBar"
import "./index.css"

const Mine = () => {
  return (
    <Fragment>
      <div className="main">
        <MineHeader/>
      </div>
      <TabBar/>
    </Fragment>
  )
}

export default Mine