const duplicateArray = function(arr){
    let copy = [];

    // for(let element of arr){
    //     copy.push(element);
    // }

    // for(let element of arr){
    //     copy.push(element); 
    // }

    // for(let index in arr){
    //     copy.push(arr[arr.length % (index+1)])
    // }
    // let copyArrLength = arr.length * 2;
    for(let i = 1; i <= 6; i++){
        copy.push(arr[arr.length % i])
    }
    
    return copy;
}

let arr = [1, 2, 3];
console.log(duplicateArray(arr));