const count_vowels = function (str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str.charAt(i))) {
      count++;
    }
  }
  return count;
};

let str = "aabuude";
console.log(count_vowels(str));
