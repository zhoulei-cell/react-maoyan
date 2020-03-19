import React, { useEffect, useRef, useState } from 'react'
import BScroll from "@better-scroll/core"

import throttle from "@utils/throttle"

import "./css/base.css"

function Scroll(props) {
  const { children, listEl, currentIndex, listenScroll } = props
  const scrollEl = useRef(null)
  const scroll = useRef(null)
  const scrollElHeight = useRef([])
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    _initScroll()
  }, [])

  useEffect(() => {
    _refresh()
  }, [children])

  useEffect(() => {
    scrollElHeight.current = listHeightArr()
  }, [listEl])

  useEffect(() => {
    listEl[currentIndex] && scroll.current.scrollToElement(listEl[currentIndex])
  }, [currentIndex])

  useEffect(() => {
    syncIndex()
  }, [scrollY])
  
  function _initScroll() {
    scroll.current = new BScroll(scrollEl.current, {
      probeType: 3,
      click: true
    })
    listenScroll && scroll.current.on("scroll", (pos) => {
      setScrollY(pos.y)
    })
  }
  function _refresh() {
    scroll.current.refresh()
  }

  let setIndex = throttle((index) => {
    props.setActiveIndex(index)
  }, 100)
  
  function syncIndex() {
    let arr = scrollElHeight.current
    let length = arr.length
    if (length < 0) {
      return
    }
    if (-scrollY <= arr[0]) {
      return setIndex(0)
    }
    arr.forEach((height, index) => {
      if (-scrollY > height && -scrollY < arr[index + 1]) {
        setIndex(index)
      }
    })
    if (-scrollY > arr[length-1]) {
      setIndex(length - 1)
    }

  }

  function listHeightArr() {
    let arr = []
    let height = 0;
    listEl.forEach(item => {
      arr.push(height)
      height += item.offsetHeight
    })
    return arr
  }

  return (
    <div className="scroll-wrapper" ref={scrollEl}>
      {props.children}
    </div>
  )
}

Scroll.defaultProps = {
  listEl: null,
  currentIndex: null,
  listenScroll: false
}

export default Scroll
