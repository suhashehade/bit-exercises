const greeting = function(){
    
    const sayHi = function(){
        console.log("Hi");
    }

    const sayHello = function(){
        console.log("Hello");
    }

    return {
        hi: sayHi,
        hello: sayHello,
    }
}

const greet = greeting();
greet.hi();
greet.hello();