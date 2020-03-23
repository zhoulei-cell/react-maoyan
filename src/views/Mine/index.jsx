import React, { Fragment } from "react"
import TabBar from "@/components/TabBar"
import MineHeader from "./ChildComps/MineHeader"
import MineCenter from "./ChildComps/MineCenter"
import MineContainer from "./ChildComps/MineContainer"

const Mine = () => {
  return (
    <Fragment>
      <div className="main">
        <MineHeader/>
        <MineCenter/>
        <MineContainer/>
      </div>
      <TabBar/>
    </Fragment>
  )
}

export default Mine