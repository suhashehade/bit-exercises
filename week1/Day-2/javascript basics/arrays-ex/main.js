const numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.splice(1,2);
numbers.splice(3,1,1);
numbers.splice(-4);
numbers.splice(0,0,0);

let result = "[";
for(let index in numbers){
    if(index == numbers.length-1){
        result += numbers[index] + "]"
    }else{
        result += numbers[index] + ","
    }
  
}
console.log(result);