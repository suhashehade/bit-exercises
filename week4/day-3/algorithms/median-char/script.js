const findMedianChar = function(str){
    
    let strArr = str.split("");
    let sortedArr = strArr.sort();
    let medChar = sortedArr[(sortedArr.length / 2) - 1];
    return medChar;
}

let str = "question";
console.log(findMedianChar(str));



