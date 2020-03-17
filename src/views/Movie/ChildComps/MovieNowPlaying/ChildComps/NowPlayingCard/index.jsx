import React, { memo } from "react"

import MovieCard from "@/components/MovieCard"

function NowPlayingCard(props) {
  let { item } = props
  return (
    <MovieCard 
      mall="购票" 
      title={item.nm}
      imgSrc={item.img.replace(/w.h/, "128.180")}
    >
      <p className="line-ellipsis">
       <span>{item.wish}</span> 人看过
      </p>
      <p className="line-ellipsis">主演: {item.star}</p>
      <p className="line-ellipsis">上映时间: {item.rt}</p>
    </MovieCard>
  )
}
export default memo(NowPlayingCard)