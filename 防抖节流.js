function debounce(fn, delay){
  let timer = null
  return function(...args){
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(()=>{
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

function throttle(fn, delay){
  let lastTime = 0;
  return function(...args) {
    let now = new Date.now()
    if (now - lastTime >= delay) {
      fn.apply(this, args)
      lastTime = now
    }
  }
}