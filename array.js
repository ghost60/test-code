
//手写map
Array.prototype.myMap = function(fn){
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(fn(this[i], i, this))
  }
  return arr
}
// 实现数组的扁平化
function flatten(arr){
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}
function flatten(arr){
  return arr.toString().split(',').map(item => +item)
}

//手写filter
Array.prototype.myFilter = function(fn){
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      arr.push(this[i])
    }
  }
  return arr
}
//手写reduce
Array.prototype.myReduce = function(fn, initialValue){
  let acc = initialValue || this[0];
  let i = initialValue ? 0 : 1;
  for (; i < this.length; i++) {
    acc = fn(acc, this[i], i, this)
  }
  return acc
}
//手写flatMap
Array.prototype.myFlatMap = function(fn){
  return this.map(fn).flat()
}

// 找数组中的最大值
function max(arr){
  return Math.max(...arr)
}

// 找数组中的最小值
function min(arr){
  return Math.min(...arr)
}

// 数组去重
function unique(arr){
  return [...new Set(arr)]
}

// 数组乱序
function shuffle(arr){
  return arr.sort(() => Math.random() - 0.5)
}

// 数组求和
function sum(arr){
  return arr.reduce((pre, cur) => pre + cur, 0)
}

// 数组平均值
function average(arr){
  return sum(arr) / arr.length
} 

// 数组最大差值
function maxDiff(arr){
  return Math.max(...arr) - Math.min(...arr)
}

// 扁平化数组
function flatten(arr){
  return arr.toString().split(',').map(item => +item)
}

// 数组中出现次数最多的元素
function maxCount(arr){
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++
    }else{
      obj[arr[i]] = 1
    }
  }
  let max = 0, res = '';
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      res = key
    }
  }
  return res
}