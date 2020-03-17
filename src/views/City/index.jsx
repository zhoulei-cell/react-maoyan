import React, { useState, useEffect } from "react"
import "./index.css"

import { getCityList } from "@network/api/city"

import CityHeader from "./ChildComps/CityHeader"
import CityList from "./ChildComps/CityList"

import AlphabetIndex from "@/components/AlphabetIndex"

function City() {
  const [hotList, setHotList] = useState([])
  const [cityList, setCityList] = useState([])
  const [alphabet, setAlphabet] = useState([])
  useEffect(() => {
    getData()
  },[])
  function getData() {
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
  function formatCityList(cities) {
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

    function checkExist(arr, key) {
      let isExist = arr.some(item => item.key === key)
      return isExist
    }
    alphabet.sort((a, b) => a.localeCompare(b))
    cityList.sort((a, b) => a.key.localeCompare(b.key))

    return {
      alphabet,
      hotList,
      cityList
    }
  }
  return (
    <div className="city-wrap">
      <CityHeader/>
      <div className="city-list">
        <CityList hotList={hotList} cityList={cityList}/>
      </div>
      <AlphabetIndex alphabet={alphabet}></AlphabetIndex>
    </div>
  )
}

export default City