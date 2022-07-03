const checkExists = function(nums, value){
    let result = false;
   for (let num of nums){
     if(num===value){
        result=true;
        break;
     }
   }
   return result;
}

console.log(checkExists([1, 2, 3], 2));
console.log(checkExists([1, 2, 3], 5));
