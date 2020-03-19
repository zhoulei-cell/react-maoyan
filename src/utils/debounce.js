let timer
function debounce(fn, delay) {
  return (...arg) => {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arg)
    }, delay)
  }
}



export default debounce