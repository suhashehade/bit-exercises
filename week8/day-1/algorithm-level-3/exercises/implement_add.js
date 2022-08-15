const add = function (num1) {
  return function fun(num2) {
    if (num1 === undefined || num2 === undefined) {
      return null;
    }
    return num1 + num2;
  };
};

let num1 = 2;
let num2 = 5;
console.log(add(num1)(num2));
