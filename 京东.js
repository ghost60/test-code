// 手写查找有序二维数组的目标值
// 要在一个有序的二维数组中查找目标值
// 可以使用二分查找算法
// 假设这个二维数组每一行和每一列都是递增的

function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  let rows = matrix.length;
  let cols = matrix[0].length;
  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midValue = matrix[Math.floor(mid / cols)][mid % cols];

    if (midValue === target) {
      return true;
    } else if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

// 示例用法
const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
];
const target = 3;
console.log(searchMatrix(matrix, target)); // 输出: true

//实现一个你认为不错的 js 继承方式
function Parent(name) {
  this.name = name;
  this.say = () => {
    console.log(111);
  };
}
Parent.prototype.play = () => {
  console.log(222);
};
function Children(name) {
  Parent.call(this);
  this.name = name;
}
Children.prototype = Object.create(Parent.prototype);
Children.prototype.constructor = Children;
// let child = new Children("111");
// // console.log(child.name);
// // child.say();
// // child.play();
// 用ES5 实现数组去重
function unique(arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i]);
    }
  }
  return res;
}
// 用ES6 实现数组去重
function unique(arr) {
  return Array.from(new Set(arr));
}
// 实现树结构转列表结构
function treeToList(tree) {
  let res = [];
  for (let i = 0; i < tree.length; i++) {
    res.push(tree[i]);
    if (tree[i].children) {
      res = res.concat(treeToList(tree[i].children));
    }
  }
  return res;
}
// 实现列表结构转树结构
function listToTree(list, parentId) {
  let res = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].parentId === parentId) {
      let children = listToTree(list, list[i].id);
      if (children.length) {
        list[i].children = children;
      }
      res.push(list[i]);
    }
  }
  return res;
}