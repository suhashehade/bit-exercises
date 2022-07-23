const deepClone = function (obj) {
  if (!(obj instanceof Object)) {
    return obj;
  }

  let keys = Object.keys(obj);
  let values = Object.values(obj);

  let cloneObj = "";
  if (Array.isArray(obj)) {
    cloneObj = [];
    for (let i = 0; i < keys.length; i++) {
      cloneObj.push(deepClone(values[i]));
    }
  } else {
    if (obj instanceof Object) {
      cloneObj = {};
      for (let i = 0; i < keys.length; i++) {
        cloneObj[keys[i]] = deepClone(values[i]);
      }
    }
  }
  return cloneObj;
};

let x = { a: "b", a2: ["first", "second"] };
let y = { b: x, b3: ["firtsY", x] };

let z = deepClone(y);
console.log(y);

z.b.a = "suha";
console.log(z);
console.log(y.b.a);
