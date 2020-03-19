import React, { useState, useEffect, useRef } from "react"
import { getCityList } from "@network/api/city"
import BScroll from "@components/BScroll"
import CityHeader from "./ChildComps/CityHeader"
import CityList from "./ChildComps/CityList"
import AlphabetIndex from "@/components/AlphabetIndex"
import "./index.css"

const City = () => {
  const ref = useRef(null)
  const [hotList, setHotList] = useState([])
  const [cityList, setCityList] = useState([])
  const [alphabet, setAlphabet] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [listEl, setListEl] = useState([])

  const getData = () => {
    let cities = window.localStorage.getItem("my_city")
    if (cities) {
      let { alphabet, hotList, cityList } = formatCityList(JSON.parse(cities))
      setAlphabet(alphabet)
      setHotList(hotList)
      setCityList(cityList)
    } else {
      getCityList().then(res => {
        let cities = res.data.data.cities
        window.localStorage.setItem("my_city", JSON.stringify(cities))
        let { alphabet, hotList, cityList } = formatCityList(cities)
        setAlphabet(alphabet)
        setHotList(hotList)
        setCityList(cityList)
      })
    }
  }

  const getListEl = () => {
    const list = ref.current.children
    setListEl([].slice.call(list))
  }

  const formatCityList = (cities) => {
    const checkExist = (arr, key) => {
      let isExist = arr.some(item => item.key === key)
      return isExist
    }
    let hotList = cities.filter(item => item.isHot === 1)
    let cityList = []
    let alphabet = []
    cities.forEach(item => {
      let key = item.py.substring(0,1).toUpperCase()
      if(checkExist(cityList, key)){ //存在怎么做
        cityList.forEach(city => {
          if(city.key === key) {
            city.list.push(item)
          }
        })
      } else { //不存在怎么做
        cityList.push({key, list: [item]})
        alphabet.push(key)
      }
    })
    alphabet.sort((a, b) => a.localeCompare(b))
    alphabet.unshift("#")
    cityList.sort((a, b) => a.key.localeCompare(b.key))
    return {
      alphabet,
      hotList,
      cityList
    }
  }
  
  const setIndex = (index) => {
    setCurrentIndex(index)
    setActiveIndex(index)
  }

  useEffect(() => {
    getListEl()
  }, [hotList, cityList])

  useEffect(() => {
    getData()
  },[])

  return (
    <div className="city-wrap">
      <CityHeader/>
      <div className="city-list-wrap">
        <BScroll listEl={listEl} currentIndex={currentIndex} listenScroll={true} setIndex={setIndex} setActiveIndex={setActiveIndex}>
          <CityList hotList={hotList} cityList={cityList} ref={ref}/>
        </BScroll>
      </div>
      <AlphabetIndex alphabet={alphabet} setIndex={setIndex} activeIndex={activeIndex}></AlphabetIndex>
    </div>
  )
}

export default City