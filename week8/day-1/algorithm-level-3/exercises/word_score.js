const highestScoringWord = function (str) {
  if(str.length === 0){
     return null
  }
  str = str.toLowerCase();
  let words = str.split(" ");
  let countScore = {};
  for (let word of words) {
    for (let i = 0; i < word.length; i++) {
      if (countScore[word]) {
        countScore[word] += word.charCodeAt(i);
      } else {
        countScore[word] = 1;
      }
    }
  }
  return findMax(countScore)

};


const findMax = function(countScore){
  let objWords = Object.keys(countScore);
  let counts = Object.values(countScore);
  let max = counts[0]
  let maxStr = objWords[0]
  for (let i = 1; i < counts.length; i++) {
    if (counts[i] > max) {
      max = counts[i];
      maxStr = objWords[i]
    }
  }
  return maxStr
}

let str = "if you are a winner";
console.log(highestScoringWord(str));
