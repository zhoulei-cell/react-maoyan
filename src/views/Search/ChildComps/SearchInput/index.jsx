import React from 'react'
import "./index.css"

const SearchInput = (props) => {
  const {value, searchHandle} = props
  
  return (
    <div className="search-input-wrap">
      <div className="search-input-box">
        <i className="iconfont icon-search search-input-icon"></i>
        <input className="search-input" type="text" placeholder="搜电影、搜影院" value={value} onChange={searchHandle}/>
      </div>
    </div>
  )
}

export default SearchInput







