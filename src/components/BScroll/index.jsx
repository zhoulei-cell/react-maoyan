import React, { useEffect, useRef, useState } from 'react'
import BScroll from "@better-scroll/core"
import "./css/base.css"

const Scroll = (props) => {
  const { children, listEl, currentIndex, listenScroll } = props
  const scrollEl = useRef(null)
  const scroll = useRef(null)
  const scrollElHeight = useRef([])
  const [scrollY, setScrollY] = useState(0)
  
  const _initScroll = () => {
    scroll.current = new BScroll(scrollEl.current, {
      probeType: 3,
      click: true
    })
    listenScroll && scroll.current.on("scroll", (pos) => {
      setScrollY(pos.y)
    })
  }
  const _refresh = () => {
    scroll.current.refresh()
  }
  const setIndex = (index) => {
    props.setActiveIndex(index)
  }
  const syncIndex = () => {
    let arr = scrollElHeight.current
    let length = arr.length
    let y = Math.abs(scrollY)
    if (length < 0) {
      return
    }
    if (y <= arr[0]) {
      return setIndex(0)
    }
    for (var i = 0; i < length - 1; i++) {
      if (y > arr[i] && y <= arr[i + 1]) {
        setIndex(i)
      }
    }
    if (-scrollY > arr[length-1]) {
      return setIndex(length - 1)
    }

  }
  const listHeightArr = () => {
    let arr = []
    let height = 0;
    listEl.forEach(item => {
      arr.push(height)
      height += item.offsetHeight
    })
    return arr
  }

  useEffect(() => {
    _initScroll()
    return () => {
      scroll.current.off("scroll")
    }
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
