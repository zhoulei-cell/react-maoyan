import React, { Fragment } from "react"
import TabBar from "@/components/TabBar"
import CinemaHeader from "./ChildComps/CinemaHeader"
import "./index.css"

const Cinema = () => {
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