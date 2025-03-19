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
Function.prototype.myBind = function(context, ...args1){
  return (...args2) => this.apply(context, args1.concat(args2))
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