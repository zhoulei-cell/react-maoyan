import React, { Fragment } from "react"
import TabBar from "@/components/TabBar"
import "./index.css"

import CinemaHeader from "./ChildComps/CinemaHeader"
function Cinema() {
  return (
    <Fragment>
      <div className="main">
        <CinemaHeader/>
      </div>
      <TabBar/>
    </Fragment>
  )
}

export default Cinema