//手写map方法
var arr = [1,2,3,4,5]
arr.map(e=>e*2)

function Mymap(fn){
  let newarr = []
    for(let i=0; i<this.length; i++){
      newarr.push(fn(this[i]))
    }
    return newarr
}
Array.prototype.mmap = Mymap

console.log(arr.mmap(e=>e*2))

//闭包计数器
function add(n){
  let v = n;
  return function(){
    return v++
  }
}

var counter = add(10)
counter()

//函数柯里化
function add(a, b) {
    return a + b;
}
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)); // Output: 3

function curry(fn){
  return function(a){
    return function(b){
      return fn(a, b)
    }
  }
}
//n个参数的
// 实现原理
// 参数判断：
// 如果传入的参数数量 args.length 大于或等于原函数的参数数量 fn.length，则直接调用原函数 fn。
// 否则，返回一个新的函数，继续接收剩余的参数。
// 递归调用：
// 通过递归的方式，每次接收一部分参数，直到所有参数都被传递完毕。
// 参数合并：
// 使用 args.concat(moreArgs) 将新传入的参数与之前的参数合并。

function curry(fn){
  return function curried(...args){
    if (args.length > fn.length) {
      return fn.apply(this, args)
    }else{
      return function(...moreArgs){
        return curried.apply(this, args.concat(moreArgs))
      }
    }
  }
  
}
//测试
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 输出：6
console.log(curriedAdd(1, 2)(3)); // 输出：6
console.log(curriedAdd(1)(2, 3)); // 输出：6
console.log(curriedAdd(1, 2, 3)); // 输出：6

//判断两个字符串的字母和个数是否一致
//Requirement: You cannot use Array.prototype.sort()
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false

function fn(str1, str2){
  if(str1.length !== str2.length) return false
  let obj1={};
  let obj2={};
  for (const char of str1) {
    obj1[char] ? obj1[char] = obj1[char]+1 : obj1[char]=1
  }
  for (const char of str2) {
    obj2[char] ? obj2[char] = obj2[char]+1 : obj2[char]=1
  }
  for (key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }
  return true
}