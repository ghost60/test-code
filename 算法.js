// 快速排序
function quickSort(arr){
  if (arr.length <= 1) return arr;
  let midIndex = Math.floor(arr.length / 2);
  let mid = arr.splice(midIndex, 1)[0];
  let left = [], right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(mid, quickSort(right))
}

// 二分查找
function binarySearch(arr, target){
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid
    }else if (arr[mid] < target) {
      left = mid + 1
    }else{
      right = mid - 1
    }
  }
  return -1
}

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

// 找出出现次数最多的html标签
function maxTag(){
  let tags = document.querySelectorAll('*');
  let obj = {};
  for (let i = 0; i < tags.length; i++) {
    if (obj[tags[i].nodeName]) {
      obj[tags[i].nodeName]++
    }else{
      obj[tags[i].nodeName] = 1
    }
  }
  let max = 0, tag = '';
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      tag = key
    }
  }
  return tag
}

// 对以下字符串进行压缩编码
function encode(str) {
  const l = [];
  let i = -1;
  let lastChar;
  for (const char of str) {
    if (char !== lastChar) {
      lastChar = char;
      i++;
      l[i] = [char, 1];
    } else {
      l[i][1]++;
    }
  }
  return l.flat().join("");
}
// 如果只出现一次，不编码数字，如 aaab -> a3b
// 如果只出现两次，不进行编码，如 aabbb -> aab3
// 如果进行解码，碰到数字如何处理？
// 以下是除数字外的进一步编码

function encode(str) {
  const l = [];
  let i = -1;
  let lastChar;
  for (const char of str) {
    if (char !== lastChar) {
      lastChar = char;
      i++;
      l[i] = [char, 1];
    } else {
      l[i][1]++;
    }
  }
  return l
    .map(([x, y]) => {
      if (y === 1) {
        return x;
      }
      if (y === 2) {
        return x + x;
      }
      return x + y;
    })
    .join("");
}
//实现一个 sample 函数，从数组中随机取一个元素
Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};