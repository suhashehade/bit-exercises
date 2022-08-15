const chars_to_length = function (str) {
  let trimmedStr = str.trim()
  let lengths = {};
  let subString = "";
  let lettersSet = new Set();
  lettersSet.add(trimmedStr.charAt(0));
  for (let i = 0; i < trimmedStr.length + 1; i++) {
    let currentLetter = trimmedStr.charAt(i);
    if (!lettersSet.has(currentLetter)) {
      lettersSet.clear();
      lettersSet.add(currentLetter);
      lengths[subString] = subString.length;
      subString = "";
    }
    subString += currentLetter;
  }
  return printCharsNumbers(lengths);
};

const printCharsNumbers = function (lengths) {
  let subStrings = Object.keys(lengths);
  let subStrLengths = Object.values(lengths);
  let resultStr = "";
  if (subStrings.length === 0) {
    return {};
  }
  for (let i = 0; i < subStrings.length; i++) {
    resultStr += subStrings[i].charAt(0) + subStrLengths[i];
  }
  return resultStr;
};

let str = "aaabbcb";
console.log(chars_to_length(str));
