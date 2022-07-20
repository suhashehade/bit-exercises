const findCommonElem2Arr = function (arr1, arr2) {
    let common = new Set();
    let myArr2 = new Set(arr2);
  
    for (let elem of arr1) {
      if (myArr2.has(elem)) {
         common.add(elem);
      }
    }
    return common;
};


const findCommonElem3Arr = function (arr1, arr2, arr3) {
  let common = new Set();
  let myArr2 = new Set(arr2);
  let myArr3 = new Set(arr3);

  for (let elem of arr1) {
    if (myArr2.has(elem) && myArr3.has(elem)) {
      common.add(elem);
    }
  }
  return common;
};

let arr1 = [1, 2, 4, 5, 6];
let arr2 = [3, 5, 2, 6];
let arr3 = [3, 0, 1, 6, 5];

arr1 = arr1.sort();
arr2 = arr2.sort();
arr3 = arr3.sort();

console.log(findCommonElem3Arr(arr1, arr2, arr3));
