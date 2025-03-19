// 交换a,b的值，不能用临时变量
let a = 1, b = 2;
a = a + b;
b = a - b;
a = a - b;
console.log(a, b) // 2, 1

//写一个sleep函数
function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

// 使用
async function test() {
  console.log('start')
  await sleep(2000)
  console.log('end')
}
test()

//获取 URL 参数
function getParams(){
  let params = {};
  let search = location.search.substring(1);
  if (!search) {
    return params
  }
  let arr = search.split('&');
  arr.forEach(item => {
    let [key, value] = item.split('=');
    key = decodeURIComponent(key);
    value = decodeURIComponent(value);
    params[key] = value;
  })
  return params
}

//使用 URLSearchParams
function getParams(){
  let search = new URLSearchParams(location.search);
  let params = {};
  for (let [key, value] of Object.entries(search)) {
    params[key] = value;
  }
  return params
}

// 实现一个 once 函数，记忆返回结果只执行一次
function once(fn) {
  let done = false;
  let result;
  return function() {
    if (!done) {
      result = fn.apply(this, arguments);
      done = true;
    }
    return result
  }
}
// 异步循环打印1，2，3
async function print(){
  for (let i = 1; i <= 3; i++) {
    await new Promise(resolve => {
      setTimeout(() => {
        console.log(i);
        resolve()
      }, 1000)
    })
  }
}
print()

// 下划线转驼峰，不要用正则
function toHump(str){
  let arr = str.split('_');
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
  }
  return arr.join('')
}

// compose函数
function compose(...fns){
  return function(...args){
    return fns.reduceRight((pre, cur) => cur(pre), ...args)
  }
}

// before函数
function before(n, fn){
  return function(...args){
    if (--n > 0) {
      return fn.apply(this, args)
    }
  }
}