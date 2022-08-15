const toCamelCase = function (str) {
  let trimmedStr = str.trim()
  let lowercaseString = trimmedStr.toLowerCase()
  let words = lowercaseString.split(" ");
  let camelCased = words[0];
  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    let firstLetter = word.charAt(0);
    let remainLetters = word.slice(1, word.length);
    let newWord = firstLetter.toUpperCase() + remainLetters;
    camelCased += newWord;
  }

  return camelCased;
};
let str = "camel case word";
console.log(toCamelCase(str));
