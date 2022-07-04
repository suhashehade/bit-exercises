const mathOperations = function(){

    const add = function(x, y){
        return x + y;
    }

    const subtract = function(x, y){
        return x - y;
    }

    const multiply = function(x, y){
        return x * y;
    }

    const divide = function(x, y){
        return x / y;
    }

    return {
        add: add,
        sub: subtract,
        mul: multiply,
        div: divide,
    }
}
let math = mathOperations();


console.log(math.add(13, 29));
console.log(math.mul(1.75, 24));
console.log(math.mul(7, (math.div(36, 6))));