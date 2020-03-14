import React from "react"

import MovieCard from "@/components/MovieCard"

function NowPlayingCard() {
  return (
    <MovieCard 
    mall="购票" 
    title="调酒师" 
    imgSrc="http://p1.meituan.net/128.180/moviemachine/6664cd8c31f1254bc52793a158dc53ff8811971.jpg">
      <p className="line-ellipsis">观众评论</p>
      <p className="line-ellipsis">主演:刘挺,陆莹,张如意</p>
      <p className="line-ellipsis">主演:刘挺,陆莹,张如意</p>
    </MovieCard>
  )
}
export default NowPlayingCard