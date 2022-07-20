const duplicateArray = function (arr) {
  let copy = [];

  let copyArrLength = arr.length * 2;

  for (let i = 0; i < copyArrLength; i++) {
    copy.push(arr[i % arr.length]);
  }

  return copy;
};

let arr = [1, 2, 3];
console.log(duplicateArray(arr));
