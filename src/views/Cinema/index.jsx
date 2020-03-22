import React, { Fragment, useEffect, useState } from "react"
import TabBar from "@/components/TabBar"
import CinemaHeader from "./ChildComps/CinemaHeader"
import CinemaTopBar from "./ChildComps/CinemaTopBar"
import CinemaFilterControl from "./ChildComps/CinemaFilterControl"
import CinemaList from "./ChildComps/CinemaList"
import { getFilter, getCinemaList } from "@network/api/cinema"
import "./index.css"

const Cinema = () => {
  const [cinemaList, setCinemaList] = useState([])
  useEffect(() => {
    getFilter().then(res => {
      console.log(res)
    })
    getCinemaList().then(res => {
      const data = res.data
      setCinemaList(data.cinemas)
    })
  }, [])

  return (
    <Fragment>
      <div className="main">
        <CinemaHeader/>
        <CinemaTopBar/>
        <CinemaFilterControl/>
        <div className="cinema-wrapper">
          <CinemaList cinemaList={cinemaList}/>
        </div>
      </div>
      <TabBar/>
    </Fragment>
  )
}

export default Cinema