import React from "react"
import "./index.css"

import ComingSoonList from "./ChildComps/ComingSoonList"

function ComingSoon() {
  return (
    <div className="coming-soon-wrap">
      <ComingSoonList/>
      <ComingSoonList/>
      <ComingSoonList/>
      <ComingSoonList/>
      <ComingSoonList/>
    </div>
  )
}

export default ComingSoon