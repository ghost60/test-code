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

//手写 new 的执行过程
function myNew(fn, ...args){
  let obj = Object.create(fn.prototype);
  let res = fn.apply(obj, args);
  return res instanceof Object ? res : obj;
}

//手写Object.create
function create(proto){
  function F(){}
  F.prototype = proto;
  return new F()
}
function create(obj){
  return Object.setPrototypeOf({}, obj)
}

//手写 instanceof
function myInstanceof(obj, fn){
  let proto = obj.__proto__;
  while(proto){
    if (proto === fn.prototype) {
      return true
    }
    proto = proto.__proto__;
  }
  return false
}

// 手写检查数据类型
function checkType(data){
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
}

//实现深拷贝
function deepClone(obj, map = new WeakMap()){
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  if (obj === null || typeof obj !== 'object') return obj;
  if (map.has(obj)) return map.get(obj);
  let cloneObj = new obj.constructor;
  map.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], map)
    }
  }
  return cloneObj
}

//手写 ajax
function ajax(url, method, data, success, fail){
  let xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.responseText)
      }else{
        fail(xhr.status)
      }
    }
  }
  xhr.send(data)
}

//手写 call
Function.prototype.myCall = function(context, ...args){
  context = context || window;
  context.fn = this;
  let res = context.fn(...args);
  delete context.fn;
  return res;
}

//手写 apply
Function.prototype.myApply = function(context, args){
  context = context || window;
  context.fn = this;
  let res = context.fn(...args);
  delete context.fn;
  return res;
}

//手写 bind 
Function.prototype.myBind = function(context, ...args1){
  let fn = this;
  return function(...args2){
    return fn.apply(context, args1.concat(args2))
  }
}

// 交换a,b的值，不能用临时变量
let a = 1, b = 2;
a = a + b;
b = a - b;
a = a - b;
console.log(a, b) // 2, 1

// 实现数组的扁平化
function flatten(arr){
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}

//setTimeout 实现 setInterval
function mySetInterval(fn, time){
  let timer = null;
  let interval = () => {
    fn();
    timer = setTimeout(interval, time)
  }
  interval();
  return {
    clear(){
      clearTimeout(timer)
    }
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

// 字符串中出现最多的字符和次数
function maxChar(str){
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++
    }else{
      obj[str[i]] = 1
    }
  }
  let max = 0, char = '';
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      char = key
    }
  }
  return {char, max}
}

// 字符串反转
function reverse(str){
  return str.split('').reverse().join('')
} 

// 斐波纳契数列
function fibonacci(n){
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2)
}

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