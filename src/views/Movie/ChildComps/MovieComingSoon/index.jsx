import React, { useState, useEffect } from "react"
import "./index.css"

import { getComingSoon } from "@network/api/film"

import ComingSoonList from "./ChildComps/ComingSoonList"

function ComingSoon(props) {
  const [comingSoonList, setComingSoonList] = useState([])
  useEffect(() => {
    getData()
  }, [])

  function getData() {
    getComingSoon(props.city.cityId).then(res => {
      const list = res.data.data.comingList
      setComingSoonList([...comingSoonList, ...list])
    })
  }
  return (
    <div className="coming-soon-wrap">
      <ComingSoonList comingSoonList={comingSoonList}/>
    </div>
  )
}

export default ComingSoon