const isUniqueChars = function (word) {
  let firstApperance = new Set();
  let secondApperance = new Set();
  for (let i = 0; i < word.length; i++) {
    let letter = word.charAt(i);
    if (firstApperance.has(letter)) {
      secondApperance.add(letter);
    } else {
      firstApperance.add(letter);
    }
  }

  if (secondApperance.size === 0) {
    return true;
  }
  return false;
};

let word = "hello";
console.log(isUniqueChars(word));
