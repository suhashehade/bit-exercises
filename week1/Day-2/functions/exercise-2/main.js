const isEven = function(num){
    let result=false;
    if(num%2==0){
        result = true;
    }
    return result;
    
}

const printOdd = function(nums){
    for(let num of nums){
        if(!isEven(num)){
           console.log(num);
        }
    }
}

const nums = [2,5,7,4,9,0,1,4];
printOdd(nums)