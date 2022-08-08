const findDuplicates = function(arr){
    let frequencies = {}
    for(let element of arr){
       if(frequencies[element]){
          return "there is a duplicate"
       }else{
         frequencies[element] = 1
       }
    }
    return "no duplicates"
}


let arr = [2, 4, 5, 5, 7]
console.log(findDuplicates(arr));