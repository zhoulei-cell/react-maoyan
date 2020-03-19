import React, { memo } from "react"
import MovieCard from "@/components/MovieCard"

const ComingSoonListCard = (props) => {
  const { item } = props
  return (
    <MovieCard 
      mall="预购" 
      title={item.nm}
      imgSrc={item.img.replace(/w.h/, "128.180")}
    >
      <p className="line-ellipsis">
        <span>{item.wish}</span>
        人想看
      </p>
      <p className="line-ellipsis">主演: {item.star}</p>
      <p className="line-ellipsis">{item.comingTitle} 上映</p>
    </MovieCard>
  )
}

export default memo(ComingSoonListCard)