import React, {memo} from "react"
import TitleBar from "@/components/TitleBar"

function CinemaHeader() {
  return (
    <TitleBar>
      <span>猫眼影院</span>
    </TitleBar>
  )
}

export default memo(CinemaHeader)