const reverseOnlyNumbers = function(arr){
    let pointer1 = 0;
    let pointer2 = arr.length - 1;
    while(pointer1 != pointer2){
        if(typeof arr[pointer1] !== "number"){
            pointer1 ++;
        }else{
            if(typeof arr[pointer2] !== "number"){
                pointer2 --;
            }else{
                  if(typeof arr[pointer1] === "number" && typeof arr[pointer2] === "number"){
                    let num1 = swap(arr[pointer1], arr[pointer2])[0];
                    let num2 = swap(arr[pointer1], arr[pointer2])[1];
                    arr[pointer1] = num1;
                    arr[pointer2] = num2;
                    pointer1 ++;
                    pointer2 --;
                  }
                }
            }
          
    }
   return arr;

}

const swap = function(num1, num2){
    let firstNum = (num1 + num2) - num1;
    let secondNum = (num1 + num2) - num2;
    let nums = [firstNum, secondNum];
    return nums;
}

let arr = [1,3,"w","e",2,3,"r",7,8, 6] 
console.log(reverseOnlyNumbers(arr));


