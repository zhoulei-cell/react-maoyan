import React, {memo} from "react"
import TitleBar from "@/components/TitleBar"

const MovieHeader = () => {
  return (
    <TitleBar>
      <span>猫眼电影</span>
    </TitleBar>
  )
}

export default memo(MovieHeader)