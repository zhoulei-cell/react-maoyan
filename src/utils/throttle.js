let lastTime = 0
const throttle = (fn, delay) => {
  return (...args) => {
    let nowTime = Date.now()
    if (!lastTime || nowTime - lastTime > delay) {
      fn.apply(this, args)
      lastTime = nowTime
    }
  }
}

export default throttle